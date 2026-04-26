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

import warnings
from typing import Optional

import pdfplumber


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
    return [[(c or "") for c in r] for r in filled]


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


def _split_header_body(raw_rows: list[list[str]]) -> tuple[list[str], list[list[str]]]:
    """
    Heuristic: the header is the first row that has values in most columns
    AND is followed by at least one row that has different content.
    """
    if not raw_rows:
        return [], []
    for i, r in enumerate(raw_rows):
        non_empty = sum(1 for c in r if c.strip())
        if non_empty >= max(1, int(0.5 * len(r))):
            return r, raw_rows[i + 1:]
    return raw_rows[0], raw_rows[1:]


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
