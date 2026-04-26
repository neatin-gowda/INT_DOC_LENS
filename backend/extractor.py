"""
Three-layer extractor.

Layer A:  PDF -> page images       (pdf -> PNG/JPEG via PyMuPDF)
Layer B:  PDF -> word spans        (every word + bbox + page)
Layer C:  PDF -> structured blocks (sections, tables, kv pairs, lists)

Layer C is the workhorse for semantic diffing. Layer B drives the
visual highlight overlay. Layer A is pure rendering.

The extractor is INTENTIONALLY GENERIC. It does not hard-code any
Ford-specific patterns. Where supplier-specific knowledge is needed
(e.g., "rows that start with a 3-char alphanumeric code are stable
keys"), the rules come from a TemplateProfile loaded from the DB.
"""
from __future__ import annotations

import hashlib
import re
from dataclasses import dataclass, field
from pathlib import Path
from typing import Iterable, Optional

import fitz                                # PyMuPDF
import pdfplumber

from .models import Block, BlockType, TemplateProfile


# ---------------------------------------------------------------------
#  Layer A — page images
# ---------------------------------------------------------------------
def render_pages(pdf_path: str, out_dir: str, dpi: int = 150) -> list[str]:
    """Render every page to a PNG. Returns the list of paths."""
    out = Path(out_dir)
    out.mkdir(parents=True, exist_ok=True)
    paths: list[str] = []
    doc = fitz.open(pdf_path)
    zoom = dpi / 72.0
    matrix = fitz.Matrix(zoom, zoom)
    for i, page in enumerate(doc, start=1):
        pix = page.get_pixmap(matrix=matrix, alpha=False)
        p = out / f"page_{i:04d}.png"
        pix.save(p)
        paths.append(str(p))
    doc.close()
    return paths


# ---------------------------------------------------------------------
#  Layer B — word spans
# ---------------------------------------------------------------------
@dataclass
class Word:
    page: int
    text: str
    x0: float
    y0: float
    x1: float
    y1: float
    size: float = 0.0
    fontname: str = ""


def extract_words(pdf_path: str) -> list[Word]:
    words: list[Word] = []
    doc = fitz.open(pdf_path)
    for pno, page in enumerate(doc, start=1):
        for w in page.get_text("words"):
            x0, y0, x1, y1, txt, *_ = w
            if not txt.strip():
                continue
            words.append(Word(pno, txt, x0, y0, x1, y1))
    doc.close()
    return words


# ---------------------------------------------------------------------
#  Layer C — structured blocks
# ---------------------------------------------------------------------
@dataclass
class _Line:
    page: int
    y: float
    x0: float
    x1: float
    text: str
    sizes: list[float] = field(default_factory=list)
    fonts: list[str] = field(default_factory=list)

    @property
    def avg_size(self) -> float:
        return sum(self.sizes) / len(self.sizes) if self.sizes else 0.0

    @property
    def is_bold(self) -> bool:
        return any("Bold" in f or "Black" in f for f in self.fonts)


def _collect_lines(pdf_path: str) -> list[_Line]:
    """
    Build a flat list of lines with font metadata. We use PyMuPDF for
    font/style info (pdfplumber doesn't expose font weight cleanly).

    Also filters out repeating page headers/footers (the boilerplate that
    appears on every page — date stamps, "Ford Division", page numbers,
    "PROPRIETARY"). These are pure noise for diffing.
    """
    raw: list[_Line] = []
    doc = fitz.open(pdf_path)
    page_height_by_num: dict[int, float] = {}
    for pno, page in enumerate(doc, start=1):
        page_height_by_num[pno] = page.rect.height
        d = page.get_text("dict")
        for block in d["blocks"]:
            if block.get("type", 0) != 0:
                continue
            for line in block["lines"]:
                if not line["spans"]:
                    continue
                txt = "".join(s["text"] for s in line["spans"]).strip()
                if not txt:
                    continue
                spans = line["spans"]
                raw.append(_Line(
                    page=pno,
                    y=line["bbox"][1],
                    x0=line["bbox"][0],
                    x1=line["bbox"][2],
                    text=txt,
                    sizes=[s["size"] for s in spans],
                    fonts=[s["font"] for s in spans],
                ))
    doc.close()

    if len(page_height_by_num) < 2:
        return raw

    # Identify lines that recur on >= 50% of pages near the top or bottom.
    # These are page headers/footers and we drop them.
    HEADER_BAND = 0.10        # top 10% of page
    FOOTER_BAND = 0.92        # bottom 8% of page
    text_to_pages: dict[str, set[int]] = {}
    for ln in raw:
        h = page_height_by_num[ln.page]
        rel_y = ln.y / h
        if rel_y <= HEADER_BAND or rel_y >= FOOTER_BAND:
            text_to_pages.setdefault(ln.text, set()).add(ln.page)

    page_count = len(page_height_by_num)
    repeating = {
        text
        for text, pages in text_to_pages.items()
        if len(pages) >= max(2, int(page_count * 0.4))
    }

    # Also drop pure date stamps, page-number-only lines, and "Ford Division"-style boilerplate
    DATE_RX = re.compile(r"^\d{1,2}/\d{1,2}/\d{2,4}$")
    PAGE_RX = re.compile(r"^-?\s*\d+\s*-?$")
    BOILER  = {"Ford Division", "PROPRIETARY", "= New for this model year"}

    filtered: list[_Line] = []
    for ln in raw:
        if ln.text in repeating:
            continue
        if DATE_RX.match(ln.text):
            continue
        if PAGE_RX.match(ln.text):
            continue
        if ln.text in BOILER:
            continue
        filtered.append(ln)

    return filtered


_HEADING_RE = re.compile(r"^[A-Z][A-Z0-9 /®™&\-\(\)\.]{2,}$")
_STABLE_CODE_HINT = re.compile(r"\b(?:\(?[A-Z0-9]{2,4}\)?)\b")
_TYPICAL_KEY_RE = re.compile(r"^\s*(?P<key>[A-Z][A-Za-z0-9 \-/®™&\.]+?):\s*(?P<val>.+)$")


def _is_heading(line: _Line, body_size: float) -> bool:
    """
    Generic heading heuristic — works across templates because we look at
    *relative* font size against the document body, not absolute sizes.
    """
    if line.avg_size > body_size * 1.15:
        return True
    if line.avg_size >= body_size and line.is_bold and _HEADING_RE.match(line.text):
        return True
    return False


def _body_font_size(lines: list[_Line]) -> float:
    """The mode of the size distribution = body font size."""
    if not lines:
        return 10.0
    sizes: dict[float, int] = {}
    for ln in lines:
        s = round(ln.avg_size, 1)
        sizes[s] = sizes.get(s, 0) + 1
    return max(sizes.items(), key=lambda kv: kv[1])[0]


def _hash_content(payload: dict) -> str:
    """Stable hash that ignores key order."""
    import json
    s = json.dumps(payload, sort_keys=True, ensure_ascii=False)
    return hashlib.sha256(s.encode("utf-8")).hexdigest()


def _extract_tables(pdf_path: str) -> dict[int, list[dict]]:
    """
    pdfplumber tables, keyed by page. Each table includes its bbox so we
    can later strip the lines that belong to it from the line stream.
    """
    by_page: dict[int, list[dict]] = {}
    with pdfplumber.open(pdf_path) as pdf:
        for pno, page in enumerate(pdf.pages, start=1):
            tables = page.find_tables()
            entries = []
            for t in tables:
                rows = t.extract()
                if not rows or len(rows) < 2:
                    continue
                # Try to identify a header row (first non-empty row)
                header = next(
                    (r for r in rows if any(c and c.strip() for c in r)),
                    rows[0],
                )
                header = [c.strip() if c else "" for c in header]
                body_rows: list[list[str]] = []
                for r in rows:
                    cleaned = [c.strip() if c else "" for c in r]
                    if cleaned == header:
                        continue
                    if not any(cleaned):
                        continue
                    body_rows.append(cleaned)
                entries.append({
                    "bbox": t.bbox,
                    "header": header,
                    "rows": body_rows,
                })
            if entries:
                by_page[pno] = entries
    return by_page


def _row_bbox_overlaps(line: _Line, table_bboxes: list[tuple[float, float, float, float]]) -> bool:
    """True if line is inside any of the page's table bboxes (so we skip it for prose)."""
    for x0, y0, x1, y1 in table_bboxes:
        if y0 - 2 <= line.y <= y1 + 2 and x0 - 5 <= line.x0 and line.x1 <= x1 + 5:
            return True
    return False


def extract_blocks(
    pdf_path: str,
    profile: Optional[TemplateProfile] = None,
) -> list[Block]:
    """
    Produce a flat (parent-aware) sequence of Blocks.
    Hierarchy is encoded in `path` and `parent_id`, not in nesting,
    which keeps the SQL story simple.
    """
    lines = _collect_lines(pdf_path)
    if not lines:
        return []

    body = _body_font_size(lines)
    tables_by_page = _extract_tables(pdf_path)

    # Build a per-page list of table bboxes for line filtering
    table_bboxes_by_page: dict[int, list[tuple[float, float, float, float]]] = {
        p: [t["bbox"] for t in tbls] for p, tbls in tables_by_page.items()
    }

    blocks: list[Block] = []
    seq = 0
    path_stack: list[str] = []
    current_section_block: Optional[Block] = None

    # Emit table blocks first (we process them anchored on the first line that
    # appears at-or-below the top of each table on each page)
    emitted_table_pages: set[tuple[int, int]] = set()

    def _slug(s: str) -> str:
        s = re.sub(r"[^A-Za-z0-9]+", "_", s).strip("_").lower()
        return s[:60] or "section"

    def _emit_tables_for_page(pno: int):
        if pno not in tables_by_page:
            return
        nonlocal seq
        for ti, tbl in enumerate(tables_by_page[pno]):
            key = (pno, ti)
            if key in emitted_table_pages:
                continue
            emitted_table_pages.add(key)
            tbl_path = "/".join(path_stack + [f"table_{pno}_{ti}"])
            parent_id = current_section_block.id if current_section_block else None
            payload = {"header": tbl["header"], "rows": tbl["rows"]}
            tblock = Block(
                parent_id=parent_id,
                block_type=BlockType.TABLE,
                path="/" + tbl_path,
                page_number=pno,
                bbox=list(tbl["bbox"]),
                text="",
                payload=payload,
                sequence=seq,
            )
            tblock.content_hash = _hash_content(payload)
            blocks.append(tblock)
            seq += 1

            # Emit one row block per row, each with stable_key if discoverable
            for ri, row in enumerate(tbl["rows"]):
                stable_key = _detect_stable_key(row, profile)
                row_path = f"{tblock.path}/row_{ri}"
                row_payload = dict(zip(tbl["header"], row))
                rblock = Block(
                    parent_id=tblock.id,
                    block_type=BlockType.TABLE_ROW,
                    path=row_path,
                    stable_key=stable_key,
                    page_number=pno,
                    bbox=list(tbl["bbox"]),
                    text=" | ".join(row),
                    payload=row_payload,
                    sequence=seq,
                )
                rblock.content_hash = _hash_content(row_payload)
                blocks.append(rblock)
                seq += 1

    for ln in lines:
        # Emit any tables whose top is above this line, before consuming it
        _emit_tables_for_page(ln.page)

        if _row_bbox_overlaps(ln, table_bboxes_by_page.get(ln.page, [])):
            continue  # text inside a table — already captured

        # Section heading?
        if _is_heading(ln, body):
            slug = _slug(ln.text)
            # Determine depth by relative size: bigger size = shallower
            depth = max(1, int(round((ln.avg_size - body) / max(0.5, body * 0.1))))
            depth = min(depth, len(path_stack) + 1)
            path_stack = path_stack[:depth - 1] + [slug]
            payload = {"heading": ln.text, "size": ln.avg_size}
            blk = Block(
                parent_id=current_section_block.id if (current_section_block and depth > 1) else None,
                block_type=BlockType.SECTION,
                path="/" + "/".join(path_stack),
                page_number=ln.page,
                bbox=[ln.x0, ln.y, ln.x1, ln.y + ln.avg_size],
                text=ln.text,
                payload=payload,
                sequence=seq,
            )
            blk.content_hash = _hash_content(payload)
            blocks.append(blk)
            seq += 1
            current_section_block = blk
            continue

        # Key/value line?
        m = _TYPICAL_KEY_RE.match(ln.text)
        if m:
            payload = {"key": m.group("key").strip(), "value": m.group("val").strip()}
            kvpath = (current_section_block.path if current_section_block else "/root") + f"/kv_{seq}"
            blk = Block(
                parent_id=current_section_block.id if current_section_block else None,
                block_type=BlockType.KV_PAIR,
                path=kvpath,
                page_number=ln.page,
                bbox=[ln.x0, ln.y, ln.x1, ln.y + ln.avg_size],
                text=ln.text,
                payload=payload,
                sequence=seq,
            )
            blk.content_hash = _hash_content(payload)
            blocks.append(blk)
            seq += 1
            continue

        # List item? (starts with "● " or "— " or "-")
        list_marker_match = re.match(r"^\s*([●○■•—–\-])\s+(.*)$", ln.text)
        if list_marker_match:
            payload = {"marker": list_marker_match.group(1), "text": list_marker_match.group(2).strip()}
            base = current_section_block.path if current_section_block else "/root"
            blk = Block(
                parent_id=current_section_block.id if current_section_block else None,
                block_type=BlockType.LIST_ITEM,
                path=f"{base}/list_{seq}",
                page_number=ln.page,
                bbox=[ln.x0, ln.y, ln.x1, ln.y + ln.avg_size],
                text=payload["text"],
                payload=payload,
                sequence=seq,
            )
            blk.content_hash = _hash_content(payload)
            blocks.append(blk)
            seq += 1
            continue

        # Plain paragraph line
        payload = {"text": ln.text}
        base = current_section_block.path if current_section_block else "/root"
        blk = Block(
            parent_id=current_section_block.id if current_section_block else None,
            block_type=BlockType.PARAGRAPH,
            path=f"{base}/p_{seq}",
            page_number=ln.page,
            bbox=[ln.x0, ln.y, ln.x1, ln.y + ln.avg_size],
            text=ln.text,
            payload=payload,
            sequence=seq,
        )
        blk.content_hash = _hash_content(payload)
        blocks.append(blk)
        seq += 1

    # Catch any tables we never reached via line iteration
    for pno in tables_by_page.keys():
        _emit_tables_for_page(pno)

    return blocks


# ---------------------------------------------------------------------
#  Stable-key detection
# ---------------------------------------------------------------------
def _detect_stable_key(row: list[str], profile: Optional[TemplateProfile]) -> Optional[str]:
    """
    Pick out a stable identifier from a table row.

    Strategy (in order):
      1. If a TemplateProfile is provided, use its stable_key_patterns.
      2. Otherwise: any cell that matches a 2-4 char alphanumeric code
         not equal to common short words ('S', 'O', 'M', 'I'), and not
         purely a single letter, gets used.
      3. Failing that: return None.
    """
    if profile:
        for spec in profile.stable_key_patterns:
            rx = re.compile(spec["regex"])
            for cell in row:
                m = rx.search(cell)
                if m:
                    return m.group(0)

    # Generic fallback. Look for tokens like 765, 99H, 44T, 43L, EA, G4, DB, 221A.
    code_rx = re.compile(r"^[A-Z0-9]{2,4}[A-Z]?$")
    for cell in row:
        cell = (cell or "").strip()
        if cell in {"S", "O", "M", "I"}:
            continue
        if code_rx.fullmatch(cell):
            return cell
    return None


# ---------------------------------------------------------------------
#  Coverage check (from ARCHITECTURE §accuracy)
# ---------------------------------------------------------------------
def coverage_pct(pdf_path: str, blocks: Iterable[Block]) -> float:
    """
    Percentage of source PDF text characters that ended up in a block.
    Useful as a smoke-test for extraction completeness.
    """
    raw = ""
    doc = fitz.open(pdf_path)
    for page in doc:
        raw += page.get_text() or ""
    doc.close()
    raw_chars = sum(1 for c in raw if not c.isspace())

    block_chars = 0
    for b in blocks:
        if b.block_type == BlockType.TABLE:
            continue          # rows already counted separately
        if b.block_type == BlockType.TABLE_ROW:
            block_chars += sum(1 for c in (b.text or "") if not c.isspace())
        else:
            block_chars += sum(1 for c in (b.text or "") if not c.isspace())

    if raw_chars == 0:
        return 100.0
    return min(100.0, 100.0 * block_chars / raw_chars)
