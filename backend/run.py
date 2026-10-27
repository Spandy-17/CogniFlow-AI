import sys
from pathlib import Path

# Set up path so backend package can be imported directly
root_dir = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(root_dir))

from backend.app import app
from backend.config import SERVER_HOST, SERVER_PORT
from backend.services.storage_service import storage_service

if __name__ == "__main__":
    print("=" * 65)
    print("  COGNIFLOW AUTONOMOUS MULTI-AGENT BACKEND")
    print("  5 Active Agents: OCR -> Classify -> Extract -> Validate -> Route")
    print(f"  Server URL: http://localhost:{SERVER_PORT}")
    print("=" * 65)
    
    app.run(host=SERVER_HOST, port=SERVER_PORT, debug=True)
