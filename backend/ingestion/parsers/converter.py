"""
LibreOffice document conversion to PDF helper.
"""
from __future__ import annotations

import os
import shutil
import subprocess
from pathlib import Path
from typing import Optional

import fitz

IMAGE_EXTENSIONS = {".png", ".jpg", ".jpeg", ".tif", ".tiff", ".bmp", ".webp"}

def _find_libreoffice() -> Optional[str]:
    configured = os.getenv("LIBREOFFICE_BIN") or os.getenv("SOFFICE_BIN")
    if configured and Path(configured).exists():
        return configured

    for candidate in ("soffice", "libreoffice"):
        found = shutil.which(candidate)
        if found:
            return found

    return None

def normalize_to_pdf(source_path: Path, out_dir: Path) -> Path:
    """
    Return a PDF path for visual rendering.
    PDFs pass through unchanged. Office/CSV files are converted through
    LibreOffice to preserve layout, fonts, tables, and pagination.
    """
    out_dir.mkdir(parents=True, exist_ok=True)

    if source_path.suffix.lower() == ".pdf":
        return source_path

    if source_path.suffix.lower() in IMAGE_EXTENSIONS:
        pdf_path = out_dir / f"{source_path.stem}.pdf"
        try:
            img_doc = fitz.open(str(source_path))
            pdf_bytes = img_doc.convert_to_pdf()
            img_doc.close()
            pdf_doc = fitz.open("pdf", pdf_bytes)
            pdf_doc.save(str(pdf_path))
            pdf_doc.close()
        except Exception as exc:
            raise RuntimeError(f"Image conversion to PDF failed: {exc}") from exc

        if not pdf_path.exists():
            raise RuntimeError("Image conversion to PDF failed because no PDF was produced.")
        return pdf_path

    soffice = _find_libreoffice()
    if not soffice:
        raise RuntimeError(
            "LibreOffice/soffice is required to convert Word, Excel, or CSV files to PDF. "
            "Install LibreOffice in the backend container or upload PDF files."
        )

    cmd = [
        soffice,
        "--headless",
        "--nologo",
        "--nofirststartwizard",
        "--convert-to",
        "pdf",
        "--outdir",
        str(out_dir),
        str(source_path),
    ]

    try:
        completed = subprocess.run(
            cmd,
            check=False,
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE,
            text=True,
            timeout=int(os.getenv("DOCUMENT_CONVERSION_TIMEOUT", "120")),
        )
    except subprocess.TimeoutExpired as exc:
        raise RuntimeError(f"Document conversion timed out after {exc.timeout} seconds.") from exc

    pdf_path = out_dir / f"{source_path.stem}.pdf"
    if completed.returncode != 0 or not pdf_path.exists():
        raise RuntimeError(
            "Document conversion to PDF failed. "
            f"stdout={completed.stdout[-800:]} stderr={completed.stderr[-800:]}"
        )

    return pdf_path
