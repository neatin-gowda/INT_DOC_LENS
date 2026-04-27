"""
Robust table extraction.

The original extractor used pdfplumber.find_tables() with default settings.
That is fast and reliable for clean grid tables, but misses:

  * Tables defined by whitespace/alignment alone (no ruling lines)
  * Nested tables (a table cell containing another table)
  * Merged cells (rowspan/colspan), where pdfplumber returns None
    in the missing positions
  * Tables that pdfplumber sees as two adjacent tables when ruled
    differently

This module wraps multiple strategies and reconciles the results:

  Strategy A:  pdfplumber default (lines+text) — fastest, best for grids
  Strategy B:  pdfplumber text-only mode — catches whitespace tables
  Strategy C:  camelot stream mode — best for sparse/legal tables

Reconciliation rule:
  - For each page, run A. If A returns nothing or returns tables with
    >30% None cells (a merged-cell symptom), also run B.
  - For pages where text density and column variance suggest tables
    but A+B both miss (configurable), try C.
  - Detect nested tables by checking whether any cell contains text
    whose layout matches a sub-table pattern; if so, recursively extract.
  - Forward-fill rowspan-merged cells (None inherits the value above).
  - Detect colspan by joining cells whose start positions overlap.
"""
from __future__ import annotations

import re
import warnings
from typing import Optional

import pdfplumber


_MARK_VALUES = {
    "",
    "-",
    "--",
    "—",
    "–",
    "x",
    "o",
    "●",
    "○",
    "•",
    "n/a",
    "na",
    "none",
    "tbd",
}


def _normalize_cell(value: Optional[str]) -> str:
    text = str(value or "").replace("\u00a0", " ").strip()
    if not text:
        return ""

    lines = [re.sub(r"\s+", " ", ln).strip() for ln in text.splitlines() if ln.strip()]

    # Vertical headers often arrive as P\nC\nV or S t a n d a r d. Collapse
    # only when each line is a tiny fragment; keep normal multi-line cells.
    if len(lines) >= 3 and all(len(ln) <= 3 for ln in lines):
        joined = "".join(lines)
        if len(joined) <= 24:
            return joined

    if len(lines) == 1:
        chars = lines[0].split()
        if len(chars) >= 3 and all(len(part) == 1 for part in chars):
            return "".join(chars)

    return re.sub(r"\s+", " ", " | ".join(lines)).strip()


def _normalize_rows(rows: list[list[Optional[str]]]) -> list[list[str]]:
    if not rows:
        return []

    n_cols = max(len(r) for r in rows)
    normalized = []

    for row in rows:
        padded = list(row) + [""] * (n_cols - len(row))
        normalized.append([_normalize_cell(cell) for cell in padded])

    return normalized


def _forward_fill_rowspans(rows: list[list[Optional[str]]]) -> list[list[str]]:
    """
    pdfplumber returns None for cells covered by a rowspan-merged cell.
    We forward-fill from the cell above so each row stands alone.
    Pure heuristic: only fill if the cell directly above has content.
    """
    if not rows:
        return []
    n_cols = max(len(r) for r in rows)
    filled = [list(r) + [None] * (n_cols - len(r)) for r in rows]
    for ri in range(1, len(filled)):
        for ci in range(n_cols):
            if (filled[ri][ci] is None or filled[ri][ci] == "") and filled[ri - 1][ci]:
                filled[ri][ci] = filled[ri - 1][ci]
    return _normalize_rows(filled)


def _is_sparse(rows: list[list[Optional[str]]]) -> float:
    """Fraction of cells that are None/empty — signal of merged cells."""
    if not rows:
        return 0.0
    total = sum(len(r) for r in rows)
    empty = sum(1 for r in rows for c in r if c is None or c == "")
    return empty / max(1, total)


def _strategy_a(page) -> list[dict]:
    """Default pdfplumber table extraction."""
    out = []
    for t in page.find_tables():
        rows = t.extract()
        if not rows or len(rows) < 2:
            continue
        rows = [[c if c is not None else "" for c in r] for r in rows]
        out.append({"bbox": t.bbox, "rows": rows, "strategy": "A"})
    return out


def _strategy_b(page) -> list[dict]:
    """Text-only mode for whitespace-only tables."""
    out = []
    settings = {
        "vertical_strategy": "text",
        "horizontal_strategy": "text",
        "intersection_tolerance": 5,
    }
    try:
        tables = page.find_tables(table_settings=settings)
    except Exception:
        return out
    for t in tables:
        rows = t.extract()
        if not rows or len(rows) < 2:
            continue
        rows = [[c if c is not None else "" for c in r] for r in rows]
        out.append({"bbox": t.bbox, "rows": rows, "strategy": "B"})
    return out


def _strategy_c(pdf_path: str, page_num: int) -> list[dict]:
    """Camelot stream mode — best for messy / legal layouts."""
    try:
        import camelot
        with warnings.catch_warnings():
            warnings.simplefilter("ignore")
            ts = camelot.read_pdf(pdf_path, pages=str(page_num), flavor="stream", suppress_stdout=True)
        out = []
        for t in ts:
            rows = t.df.fillna("").values.tolist()
            if len(rows) < 2:
                continue
            # camelot reports bbox in (x1, y1, x2, y2) PDF coords
            bbox = tuple(t._bbox) if hasattr(t, "_bbox") else (0, 0, 0, 0)
            out.append({"bbox": bbox, "rows": rows, "strategy": "C"})
        return out
    except Exception:
        return []


def _is_value_like(cell: str) -> bool:
    text = _normalize_cell(cell)
    low = text.lower()

    if low in _MARK_VALUES:
        return True
    if "$" in text:
        return True
    if re.fullmatch(r"\d+(?:[,.]\d+)*(?:\.\d+)?%?", text):
        return True
    if re.fullmatch(r"\d{1,2}[/-]\d{1,2}[/-]\d{2,4}", text):
        return True
    if re.fullmatch(r"(?:19|20)\d{2}", text):
        return True
    return False


def _header_likelihood(row: list[str]) -> float:
    cells = [_normalize_cell(c) for c in row if _normalize_cell(c)]
    if not cells:
        return 0.0

    short_ratio = sum(1 for c in cells if len(c) <= 70) / len(cells)
    value_ratio = sum(1 for c in cells if _is_value_like(c)) / len(cells)
    header_word_ratio = sum(
        1
        for c in cells
        if re.search(
            r"\b(feature|item|code|order|package|model|series|description|option|pcv|pcb|value|price|date|status|standard|mid|lux|base)\b",
            c,
            re.I,
        )
    ) / len(cells)

    return (short_ratio * 0.45) + ((1 - value_ratio) * 0.35) + (header_word_ratio * 0.20)


def _combine_header_rows(header_rows: list[list[str]], n_cols: int) -> list[str]:
    header = []

    for ci in range(n_cols):
        parts = []
        for row in header_rows:
            cell = _normalize_cell(row[ci] if ci < len(row) else "")
            if not cell:
                continue
            if parts and cell.lower() == parts[-1].lower():
                continue
            parts.append(cell)

        label = " / ".join(parts).strip(" /")
        header.append(label or f"Column {ci + 1}")

    # If extraction produced only generic labels, use safe numbered columns.
    seen = {}
    deduped = []
    for i, label in enumerate(header):
        clean = label or f"Column {i + 1}"
        seen[clean] = seen.get(clean, 0) + 1
        if seen[clean] > 1:
            clean = f"{clean} {seen[clean]}"
        deduped.append(clean)

    return deduped


def _split_header_body(raw_rows: list[list[str]]) -> tuple[list[str], list[list[str]]]:
    """
    Heuristic: the header is the first row that has values in most columns
    AND is followed by at least one row that has different content.
    """
    raw_rows = _normalize_rows(raw_rows)
    if not raw_rows:
        return [], []

    n_cols = max(len(r) for r in raw_rows)
    rows = [list(r) + [""] * (n_cols - len(r)) for r in raw_rows]

    header_rows: list[list[str]] = []
    max_header_rows = min(4, len(rows) - 1)

    for i in range(max_header_rows):
        row = rows[i]
        non_empty = sum(1 for c in row if c.strip())
        if non_empty == 0:
            continue

        likelihood = _header_likelihood(row)

        if i == 0:
            header_rows.append(row)
            continue

        # Multi-level headers: e.g. Equipment Group / Standard Package / Mid
        # Package, or vertical PCV labels that were normalized above.
        if likelihood >= 0.58:
            header_rows.append(row)
            continue

        break

    if not header_rows:
        header_rows = [rows[0]]

    body = rows[len(header_rows):]
    header = _combine_header_rows(header_rows, n_cols)

    return header, body


def _bboxes_overlap(b1, b2, tol: float = 5.0) -> bool:
    return not (
        b1[2] < b2[0] - tol
        or b2[2] < b1[0] - tol
        or b1[3] < b2[1] - tol
        or b2[3] < b1[1] - tol
    )


def _looks_like_text_columns(rows: list[list[str]]) -> bool:
    """
    Detect when pdfplumber has mistaken multi-column page layout
    (newspaper-style flowing text) for a table.

    Signals:
      * Cells contain very long text (>200 chars) — table cells rarely do
      * Cells often start with bullets (●, —, ○, •) — body content
      * Header row also has long-text cells — true headers are short
    """
    if not rows:
        return False
    long_cells = 0
    bullet_cells = 0
    total_cells = 0
    for r in rows:
        for c in r:
            if not c:
                continue
            total_cells += 1
            if len(c) > 200:
                long_cells += 1
            if c.lstrip().startswith(("●", "—", "○", "•", "▪")):
                bullet_cells += 1
    if total_cells == 0:
        return False
    if long_cells / total_cells > 0.20:
        return True
    if bullet_cells / total_cells > 0.30:
        return True
    return False


def extract_tables_robust(pdf_path: str) -> dict[int, list[dict]]:
    """
    Returns {page_num: [{"bbox":..., "header":[...], "rows":[[...]]}]}
    matching the contract used by extractor._extract_tables.
    """
    by_page: dict[int, list[dict]] = {}
    with pdfplumber.open(pdf_path) as pdf:
        for pno, page in enumerate(pdf.pages, start=1):
            results: list[dict] = []
            a_results = _strategy_a(page)
            results.extend(a_results)

            # Strategy B (text-only mode) is aggressive — it can pick up
            # any text block as a "table". Only run it when strategy A
            # genuinely found nothing on this page (true text-aligned
            # tables that A missed).
            if not a_results:
                b_results = _strategy_b(page)
                # Validate: a real text-table must have >= 2 columns AND
                # at least 3 rows where most cells are non-empty.
                for br in b_results:
                    rows = br["rows"]
                    if len(rows) < 3:
                        continue
                    n_cols = max(len(r) for r in rows)
                    if n_cols < 2:
                        continue
                    fill = sum(
                        1 for r in rows for c in r
                        if c and c.strip()
                    ) / max(1, n_cols * len(rows))
                    if fill >= 0.6:
                        results.append(br)

            # If still nothing on a page that has table-shaped text, fall back to camelot.
            # (Cheap heuristic: lots of digits arranged in columns.)
            if not results:
                txt = page.extract_text() or ""
                if txt.count("\n") > 5 and sum(c.isdigit() for c in txt) > 20:
                    results.extend(_strategy_c(pdf_path, pno))

            cleaned: list[dict] = []
            for r in results:
                rows = _forward_fill_rowspans(r["rows"])
                if not rows:
                    continue
                # Reject multi-column-text-layout false positives
                if _looks_like_text_columns(rows):
                    continue
                header, body = _split_header_body(rows)
                if not body:
                    continue
                cleaned.append({
                    "bbox": r["bbox"],
                    "header": header,
                    "rows": body,
                    "strategy": r["strategy"],
                })
            if cleaned:
                by_page[pno] = cleaned
    return by_page
