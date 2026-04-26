"""
Image text capture.

Many supplier PDFs have important content trapped inside images:
  - Wheel labels in the Ford order guide (small JPEGs with text under them)
  - Architectural diagrams in lease docs with key dimensions
  - Stamped/watermarked clauses
  - Figure captions that are themselves images, not selectable text

Two pathways:
  1. Direct text-near-image: every embedded raster image gets a small
     surrounding region (above/below) checked for caption text from the
     normal text layer. We capture this as a `figure` block with the
     caption preserved and linked.
  2. OCR-on-image: for raster images >= 100x40 pixels (filters out
     decorative dots), we run tesseract OCR. Text recovered is added to
     the block's payload as `ocr_text` and feeds into the diff.

We also OCR the FULL PAGE for any page where pdftotext returned <50
characters but pdfimages says the page has visible imagery — this
catches scanned pages.
"""
from __future__ import annotations

from io import BytesIO
from typing import Optional

import fitz
from PIL import Image


def _ocr_image(img: Image.Image) -> str:
    try:
        import pytesseract
    except Exception:
        return ""
    try:
        # PSM 6 = single uniform block of text (good default for caption-style images)
        txt = pytesseract.image_to_string(img, config="--psm 6")
        return " ".join(txt.split())
    except Exception:
        return ""


def extract_image_text(pdf_path: str, min_pixels: int = 100 * 40) -> list[dict]:
    """
    Returns a list of dicts:
      { page, bbox, kind: "image_ocr"|"figure_caption",
        ocr_text, near_text, image_xref }

    near_text is the closest text-layer line above/below the image
    (the caption, if any). ocr_text is what tesseract pulled from the
    image itself.
    """
    out: list[dict] = []
    doc = fitz.open(pdf_path)
    for pno, page in enumerate(doc, start=1):
        # Build a list of text lines on this page so we can find captions
        text_lines = []
        d = page.get_text("dict")
        for block in d["blocks"]:
            if block.get("type", 0) != 0:
                continue
            for line in block["lines"]:
                txt = "".join(s["text"] for s in line["spans"]).strip()
                if not txt:
                    continue
                text_lines.append((line["bbox"], txt))

        for img_info in page.get_images(full=True):
            xref = img_info[0]
            try:
                bboxes = page.get_image_rects(xref)
            except Exception:
                bboxes = []
            for bbox in bboxes:
                w = bbox.width
                h = bbox.height
                if w * h < min_pixels:
                    continue

                # Find caption — text within ~30 points below or above
                near = None
                near_dist = 1e9
                for (lx0, ly0, lx1, ly1), txt in text_lines:
                    # Below the image?
                    if ly0 >= bbox.y1 - 2 and ly0 - bbox.y1 < 30:
                        d_ = ly0 - bbox.y1
                        if d_ < near_dist:
                            near, near_dist = txt, d_
                    # Above the image?
                    elif ly1 <= bbox.y0 + 2 and bbox.y0 - ly1 < 30:
                        d_ = bbox.y0 - ly1
                        if d_ < near_dist:
                            near, near_dist = txt, d_

                # Run OCR on the image
                ocr_text = ""
                try:
                    pix = fitz.Pixmap(doc, xref)
                    if pix.n - pix.alpha >= 4:
                        pix = fitz.Pixmap(fitz.csRGB, pix)
                    img = Image.open(BytesIO(pix.tobytes("png")))
                    if img.size[0] >= 60 and img.size[1] >= 20:
                        ocr_text = _ocr_image(img)
                except Exception:
                    pass

                if not ocr_text and not near:
                    continue
                out.append({
                    "page": pno,
                    "bbox": [bbox.x0, bbox.y0, bbox.x1, bbox.y1],
                    "kind": "image_with_text" if ocr_text else "figure_caption_only",
                    "ocr_text": ocr_text,
                    "near_text": near or "",
                    "image_xref": xref,
                })

    doc.close()
    return out


def is_scanned_page(pdf_path: str, page_num: int, min_text_chars: int = 50) -> bool:
    """Quick check: page may need full-page OCR."""
    doc = fitz.open(pdf_path)
    try:
        page = doc[page_num - 1]
        txt = (page.get_text() or "").strip()
        return len(txt) < min_text_chars
    finally:
        doc.close()


def ocr_full_page(pdf_path: str, page_num: int, dpi: int = 200) -> str:
    """Render a page and OCR it; for pages where the text layer is empty/scanned."""
    try:
        import pytesseract
    except Exception:
        return ""
    doc = fitz.open(pdf_path)
    try:
        page = doc[page_num - 1]
        zoom = dpi / 72.0
        pix = page.get_pixmap(matrix=fitz.Matrix(zoom, zoom), alpha=False)
        img = Image.open(BytesIO(pix.tobytes("png")))
        return pytesseract.image_to_string(img, config="--psm 4")
    finally:
        doc.close()
