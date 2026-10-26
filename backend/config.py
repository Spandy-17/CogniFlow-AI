import os
from pathlib import Path

# Base backend directory
BASE_DIR = Path(__file__).resolve().parent

# Storage directories
STORAGE_DIR = BASE_DIR / "storage"
UPLOADS_DIR = STORAGE_DIR / "uploads"
ROUTED_DIR = STORAGE_DIR / "routed"

# Pre-defined routing target folders
CATEGORY_FOLDERS = {
    "Certificate": ROUTED_DIR / "Certificates",
    "Invoice": ROUTED_DIR / "Invoices",
    "Contract": ROUTED_DIR / "Contracts",
    "Transcript": ROUTED_DIR / "Transcripts",
    "Report": ROUTED_DIR / "Reports",
    "Review": ROUTED_DIR / "Needs_Review",
    "Other": ROUTED_DIR / "Archive",
}

# Create only the storage roots. Routed category folders are created by the
# routing agent when a real uploaded document is processed.
for path in [STORAGE_DIR, UPLOADS_DIR, ROUTED_DIR]:
    path.mkdir(parents=True, exist_ok=True)

# Server config
SERVER_HOST = os.environ.get("COGNIFLOW_HOST", "0.0.0.0")
SERVER_PORT = int(os.environ.get("COGNIFLOW_PORT", "5000"))

# Pipeline configuration
VALIDATION_CONFIDENCE_THRESHOLD = 75.0
OCR_MIN_TOKEN_THRESHOLD = 10
