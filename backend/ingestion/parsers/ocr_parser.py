"""
OCR Fallback parser utilizing pytesseract for scanned PDFs and image uploads.
"""
from __future__ import annotations

import os
import re
from pathlib import Path

import fitz

from ...models import Block, BlockType
from .utils import _clean, _slug, _block

def _source_kind(path: str | Path) -> str:
    ext = Path(path).suffix.lower()
    if ext == ".pdf":
        return "pdf"
    if ext in {".png", ".jpg", ".jpeg", ".tif", ".tiff", ".bmp", ".webp"}:
        return "image"
    if ext in {".docx", ".doc"}:
        return "word"
    if ext in {".xlsx", ".xlsm", ".xlsb", ".xls", ".csv", ".tsv"}:
        return "spreadsheet"
    return "unknown"

def _ocr_text_to_blocks(text: str, *, source_path: Path, page_number: int = 1, sequence_start: int = 0) -> list[Block]:
    lines = [_clean(line) for line in str(text or "").splitlines()]
    lines = [line for line in lines if line]
    blocks: list[Block] = []
    seq = sequence_start
    current_section = None
    base_path = "/ocr"

    for line in lines:
        low = line.lower()
        is_heading = (
            seq == sequence_start
            or (len(line) <= 90 and line[:1].isupper() and not re.search(r"[:：]\s*\S", line) and len(line.split()) <= 8)
            or any(term in low for term in ("template", "confirmation", "invoice", "statement", "purchase order"))
        )
        block_type = BlockType.SECTION if is_heading and len(blocks) == 0 else BlockType.PARAGRAPH
        if re.match(r"^\s*[^:：]{2,80}\s*[:：]\s*\S+", line):
            block_type = BlockType.KV_PAIR

        if block_type == BlockType.SECTION:
            path = f"{base_path}/{_slug(line, f'section_{seq}')}"
            block = _block(
                block_type=BlockType.SECTION,
                path=path,
                text=line,
                payload={
                    "text": line,
                    "source_format": _source_kind(source_path),
                    "source_extraction": "ocr",
                    "ocr": True,
                },
                sequence=seq,
                page_number=page_number,
            )
            current_section = block
        else:
            parent_path = current_section.path if current_section else base_path
            block = _block(
                parent_id=current_section.id if current_section else None,
                block_type=block_type,
                path=f"{parent_path}/line_{seq}",
                text=line,
                payload={
                    "text": line,
                    "source_format": _source_kind(source_path),
                    "source_extraction": "ocr",
                    "ocr": True,
                },
                sequence=seq,
                page_number=page_number,
            )

        blocks.append(block)
        seq += 1

    return blocks

def _extract_image_ocr(source_path: Path) -> list[Block]:
    try:
        from PIL import Image
        import pytesseract
    except Exception:
        return []

    try:
        image = Image.open(str(source_path))
        text = pytesseract.image_to_string(image, lang=os.getenv("TESSERACT_LANG", "eng+ara"))
    except Exception:
        return []

    return _ocr_text_to_blocks(text, source_path=source_path, page_number=1)

def _extract_pdf_ocr(pdf_path: Path, source_path: Path) -> list[Block]:
    try:
        from PIL import Image
        import pytesseract
    except Exception:
        return []

    blocks: list[Block] = []
    seq = 0
    try:
        doc = fitz.open(str(pdf_path))
        for page_idx, page in enumerate(doc, start=1):
            pix = page.get_pixmap(matrix=fitz.Matrix(2.5, 2.5), alpha=False)
            image = Image.frombytes("RGB", [pix.width, pix.height], pix.samples)
            text = pytesseract.image_to_string(image, lang=os.getenv("TESSERACT_LANG", "eng+ara"))
            page_blocks = _ocr_text_to_blocks(text, source_path=source_path, page_number=page_idx, sequence_start=seq)
            blocks.extend(page_blocks)
            seq += len(page_blocks)
        doc.close()
    except Exception:
        return []

    return blocks
