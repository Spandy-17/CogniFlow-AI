import os
import json
import re
import hashlib
from datetime import datetime, date, timedelta
from pathlib import Path
from typing import Dict, Any, List, Optional, Tuple

from backend.config import STORAGE_DIR

HASH_REGISTRY_FILE = STORAGE_DIR / "document_hashes.json"
QUARANTINE_REGISTRY_FILE = STORAGE_DIR / "quarantine_registry.json"


def normalize_text_for_hash(text: str) -> str:
    """Normalize textual content into lowercase alphanumeric tokens."""
    tokens = re.findall(r"\b[a-zA-Z0-9]+\b", text.lower())
    return " ".join(tokens)


def parse_date_safely(date_str: str) -> Optional[date]:
    """Parse common date formats found in certificates, invoices, contracts, and reports."""
    if not date_str or not isinstance(date_str, str):
        return None

    cleaned = date_str.strip()
    # Remove ordinal suffixes like 1st, 2nd, 3rd, 4th
    cleaned = re.sub(r"(\d+)(st|nd|rd|th)", r"\1", cleaned, flags=re.IGNORECASE)

    formats = [
        "%Y-%m-%d",
        "%d/%m/%Y",
        "%m/%d/%Y",
        "%d-%m-%Y",
        "%Y/%m/%d",
        "%B %d, %Y",
        "%b %d, %Y",
        "%d %B %Y",
        "%d %b %Y",
        "%B %Y",
        "%b %Y",
    ]

    for fmt in formats:
        try:
            return datetime.strptime(cleaned, fmt).date()
        except ValueError:
            continue

    # Try regex fallback for embedded date e.g. 2026-10-15 or 15 Oct 2026
    iso_match = re.search(r"\b(20\d{2})[-/](0[1-9]|1[0-2])[-/](0[1-9]|[12]\d|3[01])\b", cleaned)
    if iso_match:
        try:
            y, m, d = map(int, iso_match.groups())
            return date(y, m, d)
        except ValueError:
            pass

    return None


class ComplianceService:
    """
    CogniFlow Security & Compliance Intelligence Service.
    Provides:
      1. Cryptographic SHA-256 & content-level duplicate document detection.
      2. Automated temporal validity & expiration date verification.
      3. Malware, embedded macro, and prompt injection security scanning.
      4. Autonomous quarantine classification and quarantine lifecycle management.
    """

    def __init__(self):
        self._ensure_storage()

    def _ensure_storage(self):
        STORAGE_DIR.mkdir(parents=True, exist_ok=True)
        if not HASH_REGISTRY_FILE.exists():
            with open(HASH_REGISTRY_FILE, "w", encoding="utf-8") as f:
                json.dump([], f, indent=2)
        if not QUARANTINE_REGISTRY_FILE.exists():
            with open(QUARANTINE_REGISTRY_FILE, "w", encoding="utf-8") as f:
                json.dump([], f, indent=2)

    def calculate_file_sha256(self, file_path: Path) -> str:
        """Compute SHA-256 hash of a file."""
        hasher = hashlib.sha256()
        with open(file_path, "rb") as f:
            for chunk in iter(lambda: f.read(65536), b""):
                hasher.update(chunk)
        return hasher.hexdigest()

    def calculate_content_hash(self, text: str) -> str:
        """Compute SHA-256 hash of normalized document text."""
        normalized = normalize_text_for_hash(text)
        return hashlib.sha256(normalized.encode("utf-8")).hexdigest()

    def load_hash_registry(self) -> List[Dict[str, Any]]:
        self._ensure_storage()
        try:
            with open(HASH_REGISTRY_FILE, "r", encoding="utf-8") as f:
                return json.load(f)
        except Exception:
            return []

    def save_hash_registry(self, registry: List[Dict[str, Any]]):
        with open(HASH_REGISTRY_FILE, "w", encoding="utf-8") as f:
            json.dump(registry, f, indent=2, ensure_ascii=False)

    def load_quarantine_registry(self) -> List[Dict[str, Any]]:
        self._ensure_storage()
        try:
            with open(QUARANTINE_REGISTRY_FILE, "r", encoding="utf-8") as f:
                return json.load(f)
        except Exception:
            return []

    def save_quarantine_registry(self, items: List[Dict[str, Any]]):
        with open(QUARANTINE_REGISTRY_FILE, "w", encoding="utf-8") as f:
            json.dump(items, f, indent=2, ensure_ascii=False)

    def check_duplicate(
        self,
        file_path: Path,
        extracted_text: str,
        current_task_id: Optional[str] = None
    ) -> Dict[str, Any]:
        """
        Check if document is an exact binary duplicate (SHA-256) or
        content duplicate (token sequence match) of a previously uploaded document.
        """
        sha256_hash = self.calculate_file_sha256(file_path)
        content_hash = self.calculate_content_hash(extracted_text) if extracted_text else ""
        token_count = len(re.findall(r"\b\w+\b", extracted_text))

        registry = self.load_hash_registry()

        for entry in registry:
            if current_task_id and entry.get("doc_id") == current_task_id:
                continue

            # Exact binary match via SHA-256
            if entry.get("sha256") == sha256_hash:
                return {
                    "is_duplicate": True,
                    "duplicate_type": "exact_binary",
                    "similarity_score": 100.0,
                    "sha256": sha256_hash,
                    "matched_doc_id": entry.get("doc_id"),
                    "matched_file_name": entry.get("file_name"),
                    "original_upload_date": entry.get("uploaded_at"),
                    "original_user": entry.get("user_name"),
                    "details": f"Exact binary duplicate of '{entry.get('file_name')}' uploaded on {entry.get('uploaded_at')[:10]}.",
                }

            # Content match if token count is significant (>25 tokens)
            if token_count > 25 and entry.get("content_hash") and entry.get("content_hash") == content_hash:
                return {
                    "is_duplicate": True,
                    "duplicate_type": "content_match",
                    "similarity_score": 98.5,
                    "sha256": sha256_hash,
                    "matched_doc_id": entry.get("doc_id"),
                    "matched_file_name": entry.get("file_name"),
                    "original_upload_date": entry.get("uploaded_at"),
                    "original_user": entry.get("user_name"),
                    "details": f"Content duplicate (100% text match) of '{entry.get('file_name')}'.",
                }

        return {
            "is_duplicate": False,
            "duplicate_type": None,
            "similarity_score": 0.0,
            "sha256": sha256_hash,
            "matched_doc_id": None,
            "matched_file_name": None,
            "original_upload_date": None,
            "original_user": None,
            "details": f"Document is cryptographically unique (SHA-256: {sha256_hash[:12]}…).",
        }

    def check_duplicate_by_name(self, filename: str) -> Optional[Dict[str, Any]]:
        """Check if a file with this name (or base name) already exists in registry or storage."""
        registry = self.load_hash_registry()
        clean_name = filename.strip().lower()
        for entry in registry:
            entry_name = entry.get("file_name", "").strip().lower()
            if entry_name == clean_name or entry_name.endswith(f"_{clean_name}"):
                return entry

        # Also check documents.json in backend/storage
        docs_file = STORAGE_DIR / "documents.json"
        if docs_file.exists():
            try:
                with open(docs_file, "r", encoding="utf-8") as f:
                    docs = json.load(f)
                    for d in docs:
                        d_name = d.get("name", "").strip().lower()
                        if d_name == clean_name or d_name.endswith(f"_{clean_name}"):
                            return {
                                "doc_id": d.get("id"),
                                "file_name": d.get("name"),
                                "folder": d.get("folder"),
                                "category": d.get("cat"),
                                "status": d.get("status"),
                                "uploaded_at": d.get("created_at"),
                            }
            except Exception:
                pass

        return None


    def check_expiration(
        self,
        entities: Dict[str, Any],
        extracted_text: str,
        category: str
    ) -> Dict[str, Any]:
        """
        Verify document expiration dates, validity windows, and due dates.
        Supports certificates, contracts, invoices, and general documents.
        """
        today = date.today()
        candidate_dates: List[Tuple[str, str, date]] = []  # (source_label, raw_str, parsed_date)

        # 1. Search structured entities
        field_priority = [
            ("expiry_date", "Expiration Date"),
            ("valid_until", "Valid Until"),
            ("validity_date", "Validity Period"),
            ("due_date", "Payment Due Date"),
            ("end_date", "Contract End Date"),
            ("issue_date", "Issue Date"),
        ]

        for key, label in field_priority:
            val = entities.get(key)
            if val and isinstance(val, str):
                parsed = parse_date_safely(val)
                if parsed:
                    candidate_dates.append((label, val, parsed))

        # 2. Search extracted text for expiration cues if none in entities
        if not candidate_dates and extracted_text:
            text_patterns = [
                (r"(?:expires|expiration|valid through|valid until|expiry date)[:\s]+([A-Za-z0-9, -]{6,25})", "Document Expiry"),
                (r"(?:due date|payment due)[:\s]+([A-Za-z0-9, -]{6,25})", "Payment Due Date"),
                (r"(?:effective until|termination date)[:\s]+([A-Za-z0-9, -]{6,25})", "Termination Date"),
            ]
            for pat, label in text_patterns:
                match = re.search(pat, extracted_text, re.IGNORECASE)
                if match:
                    parsed = parse_date_safely(match.group(1))
                    if parsed:
                        candidate_dates.append((label, match.group(1).strip(), parsed))
                        break

        # If certificate has only issue_date, evaluate standard academic/pro validity (e.g. 3 years default validity)
        if not candidate_dates and category == "Certificate" and entities.get("issue_date"):
            issue_parsed = parse_date_safely(entities.get("issue_date"))
            if issue_parsed:
                # Many certifications have a 3-year renewal cycle
                calculated_expiry = date(issue_parsed.year + 3, issue_parsed.month, issue_parsed.day)
                candidate_dates.append(("Calculated Certification Expiry (3-Year Cycle)", str(calculated_expiry), calculated_expiry))

        if not candidate_dates:
            return {
                "status": "NOT_APPLICABLE",
                "is_expired": False,
                "is_expiring_soon": False,
                "expiration_date": None,
                "raw_date_string": None,
                "date_label": None,
                "days_delta": None,
                "alert": "No expiration constraints detected.",
            }

        # Select the most relevant candidate date (prefer expiry over issue)
        selected_label, selected_raw, parsed_exp = candidate_dates[0]
        days_delta = (parsed_exp - today).days

        if days_delta < 0:
            days_ago = abs(days_delta)
            return {
                "status": "EXPIRED",
                "is_expired": True,
                "is_expiring_soon": False,
                "expiration_date": parsed_exp.isoformat(),
                "raw_date_string": selected_raw,
                "date_label": selected_label,
                "days_delta": days_delta,
                "alert": f"EXPIRED: Document exceeded validity on {parsed_exp.isoformat()} ({days_ago} day(s) overdue).",
            }
        elif days_delta <= 30:
            return {
                "status": "EXPIRING_SOON",
                "is_expired": False,
                "is_expiring_soon": True,
                "expiration_date": parsed_exp.isoformat(),
                "raw_date_string": selected_raw,
                "date_label": selected_label,
                "days_delta": days_delta,
                "alert": f"WARNING: Document expires in {days_delta} day(s) on {parsed_exp.isoformat()}.",
            }
        else:
            return {
                "status": "ACTIVE",
                "is_expired": False,
                "is_expiring_soon": False,
                "expiration_date": parsed_exp.isoformat(),
                "raw_date_string": selected_raw,
                "date_label": selected_label,
                "days_delta": days_delta,
                "alert": f"VALID: Document active through {parsed_exp.isoformat()} ({days_delta} days remaining).",
            }

    def scan_content_safety(self, file_path: Path, extracted_text: str) -> Dict[str, Any]:
        """
        Scan document for security threats:
          - Embedded Windows/Linux executable binaries
          - Malicious macros and active scripts
          - Prompt injection payloads targeting automated AI pipelines
        """
        threats: List[str] = []
        risk_level = "SAFE"

        # 1. Byte-level executable header inspection
        try:
            with open(file_path, "rb") as f:
                header = f.read(1024)
                if header.startswith(b"MZ"):
                    threats.append("Detected Windows PE Executable binary header (MZ).")
                elif header.startswith(b"\x7fELF"):
                    threats.append("Detected Linux ELF Executable binary header.")
        except Exception:
            pass

        # 2. Dangerous macro / script signatures in text
        script_patterns = [
            (r"<script[\s>]", "Embedded HTML <script> tag detected"),
            (r"javascript:\s*", "JavaScript URI execution pattern detected"),
            (r"powershell(?:\.exe)?\s+-[eE]", "Encoded PowerShell invocation string detected"),
            (r"cmd(?:\.exe)?\s+/c\s+", "Command shell execution trigger detected"),
            (r"\b(?:AutoOpen|AutoExec|Document_Open)\b", "Suspicious Microsoft Office auto-exec macro signature"),
        ]

        text_to_scan = extracted_text or ""
        for pat, desc in script_patterns:
            if re.search(pat, text_to_scan, re.IGNORECASE):
                threats.append(desc)

        # 3. AI Pipeline Prompt Injection / Adversarial Instructions
        injection_patterns = [
            (r"ignore\s+(?:all\s+)?previous\s+instructions", "Prompt injection attack: 'ignore previous instructions'"),
            (r"bypass\s+(?:all\s+)?validation\s+checks", "Adversarial override: 'bypass validation checks'"),
            (r"mark\s+this\s+document\s+as\s+verified", "Adversarial instruction: forced verification override"),
            (r"system\s*prompt\s*override", "Adversarial system prompt override token"),
        ]

        for pat, desc in injection_patterns:
            if re.search(pat, text_to_scan, re.IGNORECASE):
                threats.append(desc)

        if threats:
            risk_level = "CRITICAL" if any("Executable" in t or "PowerShell" in t for t in threats) else "HIGH"

        return {
            "threat_detected": len(threats) > 0,
            "risk_level": risk_level,
            "threat_count": len(threats),
            "threats": threats,
            "scanned_size_bytes": file_path.stat().st_size if file_path.exists() else 0,
            "summary": "Security scan clear · 0 threats detected." if not threats else f"Flagged {len(threats)} security issue(s).",
        }

    def evaluate_compliance(
        self,
        file_path: Path,
        extracted_text: str,
        entities: Dict[str, Any],
        category: str,
        confidence: float,
        current_task_id: Optional[str] = None
    ) -> Dict[str, Any]:
        """
        Execute full security and compliance evaluation across:
        - Duplicate detection
        - Expiration verification
        - Content safety scan
        - Quarantine decision engine
        """
        duplicate_res = self.check_duplicate(file_path, extracted_text, current_task_id)
        expiration_res = self.check_expiration(entities, extracted_text, category)
        security_res = self.scan_content_safety(file_path, extracted_text)

        # Quarantine determination
        quarantined = False
        quarantine_reason = None
        quarantine_subfolder = None
        risk_score = 0.0

        if security_res["threat_detected"]:
            quarantined = True
            quarantine_reason = "SECURITY_THREAT"
            quarantine_subfolder = "Quarantine"
            risk_score += 85.0
        elif duplicate_res["is_duplicate"]:
            quarantined = True
            quarantine_reason = "DUPLICATE_DOCUMENT"
            quarantine_subfolder = "Duplicates"
            risk_score += 45.0
        elif expiration_res["is_expired"] and category in ["Certificate", "Contract", "Invoice"]:
            quarantined = True
            quarantine_reason = "EXPIRED_DOCUMENT"
            quarantine_subfolder = "Expired"
            risk_score += 40.0
        elif confidence < 60.0:
            quarantined = True
            quarantine_reason = "LOW_CONFIDENCE_INTEGRITY"
            quarantine_subfolder = "Low_Confidence"
            risk_score += 35.0

        if expiration_res["is_expiring_soon"]:
            risk_score += 15.0

        return {
            "quarantined": quarantined,
            "quarantine_reason": quarantine_reason,
            "quarantine_subfolder": quarantine_subfolder,
            "risk_score": min(100.0, risk_score),
            "sha256": duplicate_res["sha256"],
            "is_duplicate": duplicate_res["is_duplicate"],
            "duplicate_info": duplicate_res,
            "is_expired": expiration_res["is_expired"],
            "is_expiring_soon": expiration_res["is_expiring_soon"],
            "expiration_info": expiration_res,
            "threat_detected": security_res["threat_detected"],
            "security_scan": security_res,
            "compliance_verdict": "QUARANTINE" if quarantined else "COMPLIANT",
        }

    def register_document(self, doc: Dict[str, Any]):
        """Register a newly processed document in the cryptographic hash registry."""
        file_path_str = doc.get("physical_path") or doc.get("file_path")
        if not file_path_str:
            return

        file_path = Path(file_path_str)
        if not file_path.exists():
            return

        sha256_hash = self.calculate_file_sha256(file_path)
        content_hash = self.calculate_content_hash(doc.get("extracted", ""))

        registry = self.load_hash_registry()
        # Avoid duplicate registry entries for same doc_id
        registry = [r for r in registry if r.get("doc_id") != doc.get("id")]

        registry.append({
            "doc_id": doc.get("id"),
            "file_name": doc.get("name"),
            "sha256": sha256_hash,
            "content_hash": content_hash,
            "category": doc.get("cat"),
            "user_name": doc.get("uploadedBy"),
            "uploaded_at": doc.get("created_at") or datetime.now().isoformat(),
            "folder": doc.get("folder"),
            "status": doc.get("status"),
        })

        self.save_hash_registry(registry)

        # If document was quarantined, log in quarantine registry
        sec = doc.get("security") or {}
        if sec.get("quarantined"):
            self.record_quarantine(doc, sec)

    def record_quarantine(self, doc: Dict[str, Any], sec: Dict[str, Any]):
        """Record quarantined document in the quarantine audit registry."""
        items = self.load_quarantine_registry()
        doc_id = doc.get("id")
        items = [q for q in items if q.get("doc_id") != doc_id]

        items.append({
            "doc_id": doc_id,
            "file_name": doc.get("name"),
            "category": doc.get("cat"),
            "user_name": doc.get("uploadedBy"),
            "sha256": sec.get("sha256"),
            "quarantined_at": datetime.now().isoformat(),
            "reason": sec.get("quarantine_reason"),
            "folder": doc.get("folder"),
            "risk_score": sec.get("risk_score"),
            "details": (
                sec.get("duplicate_info", {}).get("details")
                or sec.get("expiration_info", {}).get("alert")
                or sec.get("security_scan", {}).get("summary")
                or "Compliance policy triggered"
            ),
            "status": "quarantined",
        })
        self.save_quarantine_registry(items)

    def release_from_quarantine(self, doc_id: str, reviewer: str = "Administrator") -> bool:
        """Manually release a document from quarantine."""
        items = self.load_quarantine_registry()
        target = next((item for item in items if item.get("doc_id") == doc_id), None)
        if not target:
            return False

        target["status"] = "released"
        target["released_at"] = datetime.now().isoformat()
        target["released_by"] = reviewer
        self.save_quarantine_registry(items)
        return True

    def get_compliance_summary(self) -> Dict[str, Any]:
        """Aggregate compliance statistics for dashboard and reporting."""
        hash_reg = self.load_hash_registry()
        quarantine_reg = self.load_quarantine_registry()

        total_tracked = len(hash_reg)
        active_quarantined = sum(1 for q in quarantine_reg if q.get("status") == "quarantined")
        duplicate_count = sum(1 for q in quarantine_reg if q.get("reason") == "DUPLICATE_DOCUMENT")
        expired_count = sum(1 for q in quarantine_reg if q.get("reason") == "EXPIRED_DOCUMENT")
        threat_count = sum(1 for q in quarantine_reg if q.get("reason") == "SECURITY_THREAT")

        clean_rate = round(((total_tracked - active_quarantined) / max(1, total_tracked)) * 100, 1)

        return {
            "total_documents_tracked": total_tracked,
            "active_quarantined": active_quarantined,
            "duplicates_detected": duplicate_count,
            "expired_documents": expired_count,
            "security_threats_blocked": threat_count,
            "compliance_health_score": min(100.0, max(0.0, clean_rate)),
        }


compliance_service = ComplianceService()
