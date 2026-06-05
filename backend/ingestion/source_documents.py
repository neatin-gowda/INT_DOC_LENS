"""
Multi-format document ingestion.
Restructured to delegate to individual parser modules under backend/ingestion/parsers/.
"""
from __future__ import annotations

import re
import shutil
from pathlib import Path
from typing import Callable, Optional

from ..extraction.runner import enrich_blocks
from ..models import Block, TemplateProfile

# Sibling parser imports
from .parsers.converter import normalize_to_pdf, IMAGE_EXTENSIONS
from .parsers.docx_parser import _extract_docx
from .parsers.excel_parser import _extract_spreadsheet
from .parsers.ocr_parser import _extract_image_ocr, _extract_pdf_ocr
from .parsers.utils import _attach_visual_bboxes

SUPPORTED_INPUT_EXTENSIONS = {
    ".pdf",
    ".png",
    ".jpg",
    ".jpeg",
    ".tif",
    ".tiff",
    ".bmp",
    ".webp",
    ".docx",
    ".doc",
    ".xlsx",
    ".xlsm",
    ".xlsb",
    ".xls",
    ".csv",
    ".tsv",
}

WORD_EXTENSIONS = {".docx", ".doc"}
SPREADSHEET_EXTENSIONS = {".xlsx", ".xlsm", ".xlsb", ".xls", ".csv", ".tsv"}

def supported_input_extensions() -> list[str]:
    return sorted(SUPPORTED_INPUT_EXTENSIONS)

def source_kind(path: str | Path) -> str:
    ext = Path(path).suffix.lower()
    if ext == ".pdf":
        return "pdf"
    if ext in IMAGE_EXTENSIONS:
        return "image"
    if ext in WORD_EXTENSIONS:
        return "word"
    if ext in SPREADSHEET_EXTENSIONS:
        return "spreadsheet"
    return "unknown"

def ensure_supported(path: str | Path) -> None:
    ext = Path(path).suffix.lower()
    if ext not in SUPPORTED_INPUT_EXTENSIONS:
        raise ValueError(
            "Unsupported file type. Supported formats: "
            + ", ".join(supported_input_extensions())
        )

def _safe_copy_upload_name(filename: str, side: str) -> str:
    ext = Path(filename or "").suffix.lower()
    stem = re.sub(r"[^A-Za-z0-9_.-]+", "_", Path(filename or side).stem).strip("._")
    return f"{side}_{stem or side}{ext or '.bin'}"

def save_upload_to_source(upload_file, work_dir: Path, side: str) -> Path:
    filename = upload_file.filename or f"{side}.pdf"
    path = work_dir / _safe_copy_upload_name(filename, side)
    ensure_supported(path)

    with path.open("wb") as f:
        shutil.copyfileobj(upload_file.file, f)

    return path

def extract_blocks_from_source(
    source_path: Path,
    pdf_path: Path,
    pdf_extractor: Callable[[str], list[Block]],
    profile: Optional[TemplateProfile] = None,
) -> list[Block]:
    ext = source_path.suffix.lower()
    source_format = source_kind(source_path)
    document_label = source_path.stem

    if ext in IMAGE_EXTENSIONS:
        blocks = pdf_extractor(str(pdf_path))
        extracted_chars = len(re.sub(r"\s+", "", " ".join(block.text or "" for block in blocks)))
        if extracted_chars < 25:
            ocr_blocks = _extract_image_ocr(source_path)
            if ocr_blocks:
                blocks = ocr_blocks
        return enrich_blocks(
            blocks,
            source_path=source_path,
            source_format=source_format,
            document_label=document_label,
        )

    if ext == ".pdf":
        blocks = pdf_extractor(str(pdf_path))
        extracted_chars = len(re.sub(r"\s+", "", " ".join(block.text or "" for block in blocks)))
        if extracted_chars < 25:
            ocr_blocks = _extract_pdf_ocr(pdf_path, source_path)
            if ocr_blocks:
                blocks = ocr_blocks
        return enrich_blocks(
            blocks,
            source_path=source_path,
            source_format=source_format,
            document_label=document_label,
        )

    blocks: list[Block] = []
    if ext == ".docx":
        blocks = _extract_docx(source_path)
    elif ext in SPREADSHEET_EXTENSIONS:
        blocks = _extract_spreadsheet(source_path)

    if blocks:
        visual_blocks = pdf_extractor(str(pdf_path))
        blocks = _attach_visual_bboxes(blocks, visual_blocks)
        return enrich_blocks(
            blocks,
            source_path=source_path,
            source_format=source_format,
            document_label=document_label,
        )

    # DOC/legacy XLS or parser failure: use the converted PDF as a safe fallback.
    blocks = pdf_extractor(str(pdf_path))
    return enrich_blocks(
        blocks,
        source_path=source_path,
        source_format=source_format,
        document_label=document_label,
    )

def coverage_for_source(
    source_path: Path,
    pdf_path: Path,
    blocks: list[Block],
    pdf_coverage: Callable[[str, list[Block]], float]
) -> float:
    if source_path.suffix.lower() == ".pdf":
        return pdf_coverage(str(pdf_path), blocks)

    extracted = len(re.sub(r"\s+", "", " ".join(block.text or "" for block in blocks)))
    if extracted > 0:
        return 100.0
    return 0.0
