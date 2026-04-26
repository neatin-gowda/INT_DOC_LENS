"""
Cross-page table stitching.

Problem: pdfplumber returns one table object per page, even when a
logical table continues across multiple pages. For lease documents,
spec docs, and most enterprise PDFs this is the rule, not the exception.

Strategy:
  1. Walk tables in document order.
  2. Two adjacent tables are "the same logical table" if:
       (a) they appear on consecutive pages (or same page back-to-back), AND
       (b) their column counts match, AND
       (c) their column structure is similar (header repetition,
           OR the second table has no recognizable header row,
           OR fuzzy-match of column-header text >= 0.8).
  3. Stitch their row arrays. Drop the repeated header row if present.

Returns the stitched logical tables along with the source page(s) each
spans, so the UI can still highlight regions on every page involved.
"""
from __future__ import annotations

from dataclasses import dataclass, field
from typing import Optional

from rapidfuzz import fuzz


@dataclass
class StitchedTable:
    pages: list[int] = field(default_factory=list)        # pages this logical table spans
    bboxes_by_page: dict[int, tuple[float, float, float, float]] = field(default_factory=dict)
    header: list[str] = field(default_factory=list)
    rows: list[list[str]] = field(default_factory=list)
    # for traceability — which originals were merged
    source_count: int = 1


def _norm(s: str) -> str:
    return " ".join((s or "").lower().split())


def _looks_like_repeated_header(row: list[str], header: list[str]) -> bool:
    if len(row) != len(header):
        return False
    return all(
        fuzz.ratio(_norm(a), _norm(b)) >= 80
        for a, b in zip(row, header)
        if a or b
    )


def _headers_compatible(h1: list[str], h2: list[str]) -> bool:
    if len(h1) != len(h2):
        return False
    if not any(h2):
        return True   # continuation table has no header row at all
    score = 0
    nonempty = 0
    for a, b in zip(h1, h2):
        if not a and not b:
            continue
        nonempty += 1
        if fuzz.ratio(_norm(a), _norm(b)) >= 80:
            score += 1
    return nonempty == 0 or (score / nonempty) >= 0.6


def stitch_tables(tables_by_page: dict[int, list[dict]]) -> list[StitchedTable]:
    """
    Input format (matches what extractor._extract_tables already returns):
        { page_num: [ {"bbox":..., "header":[...], "rows":[[...]]}, ... ] }

    Output: list of StitchedTable in document order.
    """
    # Flatten with page numbers
    flat: list[tuple[int, dict]] = []
    for pno in sorted(tables_by_page.keys()):
        for t in tables_by_page[pno]:
            flat.append((pno, t))

    stitched: list[StitchedTable] = []
    for pno, t in flat:
        merged = False
        if stitched:
            last = stitched[-1]
            last_page = last.pages[-1]
            same_or_next_page = pno == last_page or pno == last_page + 1
            cols_match = len(t["header"]) == len(last.header)
            # Only stitch tables with >=2 columns — single-column "tables"
            # are usually misclassified body text.
            multi_col = len(last.header) >= 2
            if (
                same_or_next_page
                and cols_match
                and multi_col
                and _headers_compatible(last.header, t["header"])
            ):
                # Drop the repeated header row if it appears as the first body row
                rows = list(t["rows"])
                if rows and _looks_like_repeated_header(rows[0], last.header):
                    rows = rows[1:]
                last.pages.append(pno)
                last.bboxes_by_page[pno] = tuple(t["bbox"])
                last.rows.extend(rows)
                last.source_count += 1
                merged = True
        if not merged:
            st = StitchedTable(
                pages=[pno],
                bboxes_by_page={pno: tuple(t["bbox"])},
                header=list(t["header"]),
                rows=list(t["rows"]),
                source_count=1,
            )
            stitched.append(st)

    return stitched
