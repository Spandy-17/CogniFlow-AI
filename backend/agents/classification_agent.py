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
    """Classify using specific filename and document-content evidence."""

    def __init__(self):
        super().__init__(
            key="classify",
            name="Classification Agent",
            role="Document Classification & Confidence Scoring",
        )

    def execute(self, state: Dict[str, Any]) -> Dict[str, Any]:
        text = (state.get("extracted_text") or "").lower()
        filename = (state.get("original_file_name") or state.get("file_name") or "").lower()
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

        # Student lists and spreadsheets should not become certificates merely
        # because they contain names, schools, or degree/program references.
        if scores["Certificate"] and not any(
            _contains_phrase(text, cue)
            for cue in ("certificate of", "this is to certify", "certifies that", "certificate id", "certificate number")
        ):
            scores["Certificate"] = max(0.0, scores["Certificate"] - 5.0)

        # Student rosters are not certificates or transcripts. Transcript
        # classification requires result/grade evidence, unless named explicitly.
        explicit_transcript = any(
            _contains_phrase(normalized_filename, cue.replace("_", " "))
            for cue in ("transcript", "marksheet", "grade_report", "academic_record")
        )
        academic_result_evidence = sum(1 for cue in ACADEMIC_RESULT_CUES if _contains_phrase(text, cue))
        if explicit_transcript:
            scores["Transcript"] += 8.0
        elif (
            academic_result_evidence >= 2
            and sum(1 for cue in ACADEMIC_ROW_LABELS if _contains_phrase(text, cue)) >= 1
        ) or (
            sum(1 for cue in ACADEMIC_TABLE_CUES if _contains_phrase(text, cue)) >= 3
            and any(separator in text for separator in ("|", "\t", ","))
        ):
            scores["Transcript"] += max(6.0, min(academic_result_evidence, 5) * 2.0)
        elif any(_contains_phrase(normalized_filename, term) for term in ("student", "students", "roster", "register")):
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
            confidence = round(min(93.0, max(40.0, 45.0 + min(top_score * 2.0, 30.0) + min(margin * 1.5, 18.0))), 1)
            if margin < 2.0:
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
