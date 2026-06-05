"""
CSV and TSV Document parser.
"""
from __future__ import annotations

import csv
from pathlib import Path
from typing import Iterable

from .utils import _clean

def _sheet_rows_from_csv(source_path: Path) -> Iterable[tuple[str, list[list[str]]]]:
    delimiter = "\t" if source_path.suffix.lower() == ".tsv" else ","
    rows = []
    with source_path.open("r", encoding="utf-8-sig", newline="") as f:
        reader = csv.reader(f, delimiter=delimiter)
        for row in reader:
            clean = [_clean(cell) for cell in row]
            if any(clean):
                rows.append(clean)
    return [(source_path.stem, rows)]
