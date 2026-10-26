import shutil
import hashlib
from datetime import datetime
from pathlib import Path
from typing import Dict, Any, List, Optional
from backend.config import (
    STORAGE_DIR,
    UPLOADS_DIR,
    ROUTED_DIR,
    CATEGORY_FOLDERS,
)

def format_bytes(num_bytes: int) -> str:
    """Format bytes into human-readable size."""
    if num_bytes == 0:
        return "0 B"
    sizes = ["B", "KB", "MB", "GB", "TB"]
    i = 0
    size = float(num_bytes)
    while size >= 1024.0 and i < len(sizes) - 1:
        size /= 1024.0
        i += 1
    return f"{size:.1f} {sizes[i]}"

def get_file_hash(filepath: Path) -> str:
    """Calculate SHA-256 hash of a file."""
    hasher = hashlib.sha256()
    with open(filepath, "rb") as f:
        while True:
            chunk = f.read(8192)
            if not chunk:
                break
            hasher.update(chunk)
    return hasher.hexdigest()

class StorageService:
    def __init__(self):
        self._ensure_storage()

    def _ensure_storage(self):
        for p in [STORAGE_DIR, UPLOADS_DIR, ROUTED_DIR]:
            p.mkdir(parents=True, exist_ok=True)
    def save_upload(self, file_storage, filename: str) -> Dict[str, Any]:
        """Save an incoming uploaded file to the staging upload directory."""
        sanitized = "".join(c for c in filename if c.isalnum() or c in "._- ")
        if not sanitized:
            sanitized = "unnamed_document.bin"
        
        timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
        final_filename = f"{timestamp}_{sanitized}"
        target_path = UPLOADS_DIR / final_filename

        file_storage.save(str(target_path))
        file_size = target_path.stat().st_size

        return {
            "original_name": filename,
            "filename": final_filename,
            "path": str(target_path),
            "size": file_size,
            "size_formatted": format_bytes(file_size),
            "sha256": get_file_hash(target_path),
            "uploaded_at": datetime.now().isoformat(),
        }

    def route_file(self, source_path: Path, category: str, subfolder: Optional[str] = None) -> Dict[str, Any]:
        """
        Agent 5 helper: Physically moves the file from staging to the target folder.
        """
        category_dir = CATEGORY_FOLDERS.get(category, ROUTED_DIR / category)
        if subfolder:
            dest_dir = category_dir / subfolder
        else:
            # Default subfolder by current year
            current_year = str(datetime.now().year)
            dest_dir = category_dir / current_year

        dest_dir.mkdir(parents=True, exist_ok=True)
        dest_path = dest_dir / source_path.name

        # If file exists at destination, add duplicate counter
        counter = 1
        base_stem = source_path.stem
        ext = source_path.suffix
        while dest_path.exists():
            dest_path = dest_dir / f"{base_stem}_{counter}{ext}"
            counter += 1

        # Copy or move file
        shutil.copy2(str(source_path), str(dest_path))

        # Relative folder display name
        folder_display_name = category_dir.name
        if subfolder:
            rel_folder = f"/{folder_display_name}/{subfolder}"
        elif category in ["Contract", "Transcript"]:
            rel_folder = f"/{folder_display_name}"
        else:
            rel_folder = f"/{folder_display_name}/{datetime.now().year}"

        return {
            "destination_dir": str(dest_dir),
            "destination_path": str(dest_path),
            "filename": dest_path.name,
            "folder": rel_folder,
            "category": category,
        }

storage_service = StorageService()
