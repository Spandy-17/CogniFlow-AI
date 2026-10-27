import re
from typing import Dict, Any, List, Tuple
from backend.agents.base_agent import BaseAgent

# Strong cues are deliberately specific. Generic words such as "degree",
# "institution", "award", or "metrics" are not enough to identify a type.
FILENAME_CUES = {
    "Certificate": ("certificate", "certification", "diploma", "license", "credential"),
    "Invoice": ("invoice", "bill", "receipt", "purchase_order"),
    "Contract": ("contract", "agreement", "nda", "lease"),
    "Transcript": ("transcript", "marksheet", "grade_report", "academic_record"),
    "Report": ("report", "annual_report", "activity_report", "department_report", "analysis"),
    "Data": (
        "data", "dataset", "students", "faculty", "roster", "attendance", "records",
        "sheet", "spreadsheet", "table", "participants", "enrollment", "metrics",
        "export", "database", "analytics", "activity_data", "tabular", "log", "entries",
    ),
}

TEXT_CUES = {
    "Certificate": (
        "certificate of", "this is to certify", "certifies that", "awarded to",
        "issued to", "certificate id", "certificate number", "license number",
        "credential awarded",
    ),
    "Invoice": (
        "invoice number", "invoice #", "amount due", "balance due", "bill to",
        "subtotal", "tax invoice", "purchase order", "payment terms",
    ),
    "Contract": (
        "agreement between", "terms and conditions", "non-disclosure agreement",
        "governing law", "effective date", "in witness whereof", "party a",
        "party b", "confidentiality clause",
    ),
    "Transcript": (
        "academic transcript", "student name", "student id", "grade point average",
        "cumulative gpa", "credits completed", "course code", "semester grades",
        "official academic record", "marksheet",
    ),
    "Report": (
        "annual report", "activity report", "department report", "executive summary",
        "methodology", "findings", "recommendations", "reporting period",
        "annual performance", "survey results",
    ),
    "Data": (
        "sheet:", "faculty id", "faculty name", "activity type", "activity title",
        "roll no", "roll number", "phone number", "student name", "student list",
        "current course", "s.no", "serial no", "hours", "status", "dataset",
        "record count", "row id", "column", "data sheet", "participants",
    ),
}

ACADEMIC_RESULT_CUES = (
    "academic transcript", "academic record", "grade point average", "gpa",
    "marks", "grades", "result", "credits completed", "semester result",
)
ACADEMIC_ROW_LABELS = ("student name", "roll no", "roll number", "registration no", "course code")
ACADEMIC_TABLE_CUES = ("student", "students", "roll no", "roll number", "registration no", "course code", "semester")


def _contains_phrase(text: str, phrase: str) -> bool:
    return re.search(r"(?<![a-z0-9])" + re.escape(phrase) + r"(?![a-z0-9])", text) is not None


class ClassificationAgent(BaseAgent):
    """Classify using specific filename, file type, and document-content evidence."""

    def __init__(self):
        super().__init__(
            key="classify",
            name="Classification Agent",
            role="Document Classification & Confidence Scoring",
        )

    def execute(self, state: Dict[str, Any]) -> Dict[str, Any]:
        text = (state.get("extracted_text") or "").lower()
        raw_filename = state.get("original_file_name") or state.get("file_name") or ""
        filename = raw_filename.lower()
        normalized_filename = re.sub(r"[^a-z0-9]+", " ", filename)

        self.log("Comparing document text and filename against specific type evidence…", "info")
        scores: Dict[str, float] = {category: 0.0 for category in TEXT_CUES}

        for category, cues in FILENAME_CUES.items():
            if any(_contains_phrase(normalized_filename, cue.replace("_", " ")) for cue in cues):
                scores[category] += 8.0

        for category, cues in TEXT_CUES.items():
            matched = [cue for cue in cues if _contains_phrase(text, cue)]
            # A single specific phrase is meaningful; repeated boilerplate is capped.
            scores[category] += min(len(matched), 4) * 3.0

        # Structural cues for tabular datasets and spreadsheets
        is_spreadsheet = any(
            filename.endswith(ext)
            for ext in (".xlsx", ".xls", ".csv", ".tsv", ".ods")
        )
        has_table_structure = text.count("|") >= 3 or "sheet:" in text or "\t" in text

        if is_spreadsheet:
            scores["Data"] += 14.0
        elif has_table_structure and any(
            _contains_phrase(normalized_filename, cue.replace("_", " ")) for cue in FILENAME_CUES["Data"]
        ):
            scores["Data"] += 10.0
        elif has_table_structure and any(_contains_phrase(text, cue) for cue in TEXT_CUES["Data"]):
            scores["Data"] += 8.0

        # Student lists and spreadsheets should never become certificates merely
        # because they contain names, schools, or degree/program references.
        has_certificate_cues = any(
            _contains_phrase(text, cue)
            for cue in ("certificate of", "this is to certify", "certifies that", "certificate id", "certificate number", "credential awarded")
        )
        if not has_certificate_cues:
            scores["Certificate"] = 0.0

        # Student rosters and data sheets are not certificates or transcripts.
        # Transcript classification requires explicit naming or strong grade/gpa proof.
        explicit_transcript = any(
            _contains_phrase(normalized_filename, cue.replace("_", " "))
            for cue in ("transcript", "marksheet", "grade_report", "academic_record")
        )
        academic_result_evidence = sum(1 for cue in ACADEMIC_RESULT_CUES if _contains_phrase(text, cue))
        if explicit_transcript:
            scores["Transcript"] += 8.0
        elif not is_spreadsheet and (
            (
                academic_result_evidence >= 2
                and sum(1 for cue in ACADEMIC_ROW_LABELS if _contains_phrase(text, cue)) >= 1
            ) or (
                sum(1 for cue in ACADEMIC_TABLE_CUES if _contains_phrase(text, cue)) >= 3
                and any(separator in text for separator in ("|", "\t", ","))
            )
        ):
            scores["Transcript"] += max(6.0, min(academic_result_evidence, 5) * 2.0)
        else:
            scores["Transcript"] = 0.0

        ranked: List[Tuple[str, float]] = sorted(scores.items(), key=lambda item: item[1], reverse=True)
        top_category, top_score = ranked[0]
        second_category, second_score = ranked[1]
        total_score = sum(scores.values())

        if top_score <= 0:
            top_category = "Other"
            confidence = 35.0
            self.log("No reliable category evidence found; marking as Other for review.", "warn")
        else:
            # Don't manufacture high confidence from a lone generic keyword.
            share = top_score / total_score if total_score else 0.0
            margin = top_score - second_score
            confidence = round(min(95.0, max(45.0, 50.0 + min(top_score * 2.0, 30.0) + min(margin * 1.5, 18.0))), 1)
            if top_category == "Data":
                confidence = max(confidence, 88.5)
            elif margin < 2.0:
                confidence = min(confidence, 69.0)
                self.log(f"Ambiguous evidence: {top_category} vs {second_category}; flagging for review.", "warn")

        self.log(f"Classification: {top_category} ({confidence}% confidence)", "info")
        self.log(f"Next closest category: {second_category}", "info")
        self.log("Handoff → Entity Extraction Agent", "ok")

        state["category"] = top_category
        state["confidence"] = confidence
        state["alternatives"] = [
            {"category": category, "score": round(score, 2)}
            for category, score in ranked[1:3]
        ]
        state["classification_logs"] = self.logs
        return state
