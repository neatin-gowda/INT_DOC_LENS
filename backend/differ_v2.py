"""
Anchor-aware differ (v2).

Adds, on top of v1's stable_key + path + text-similarity passes:
  * An anchor-signature alignment pass that matches blocks by the set of
    anchors they contain (clause numbers, dollar amounts, dates, defined
    terms, codes), regardless of which page they appear on.
  * Cross-page-shift tolerance: a paragraph that moved from page 2 to
    page 5 will still align if its anchor signature is preserved.
  * Header-aware table-row alignment: rows in stitched tables are
    matched first by stable_key, then by header-anchored cell values
    (e.g., the "Article" column), then by full-row similarity.

Output schema unchanged from v1.
"""
from __future__ import annotations

import difflib
import re
from collections import defaultdict
from typing import Iterable, Optional

from rapidfuzz import fuzz

from .anchors import jaccard
from .models import (
    Block,
    BlockDiff,
    BlockType,
    ChangeType,
    FieldDiff,
    TokenOp,
)


_WS_RE = re.compile(r"\s+")
_TM_RE = re.compile(r"[™®©]")


def _norm_text(s: str) -> str:
    if not s:
        return ""
    s = _TM_RE.sub("", s)
    s = _WS_RE.sub(" ", s)
    return s.strip().lower()


def _section_prefix(path: str, depth: int = 2) -> str:
    parts = [p for p in (path or "").split("/") if p]
    return "/" + "/".join(parts[:depth]) if parts else ""


def _anchors_of(b: Block) -> frozenset[str]:
    a = b.payload.get("anchors") if isinstance(b.payload, dict) else None
    if not a:
        a = b.payload.get("__anchors__") if isinstance(b.payload, dict) else None
    return frozenset(a or [])


# ---------- alignment ----------

def _align(
    base: list[Block],
    target: list[Block],
) -> list[tuple[Optional[Block], Optional[Block]]]:
    pairs: list[tuple[Optional[Block], Optional[Block]]] = []
    used_b: set = set()
    used_t: set = set()

    # Pass 1a: stable_key + section prefix
    by_key_b: dict[tuple[str, str], list[Block]] = defaultdict(list)
    by_key_t: dict[tuple[str, str], list[Block]] = defaultdict(list)
    for b in base:
        if b.stable_key:
            by_key_b[(_section_prefix(b.path, 2), b.stable_key)].append(b)
    for t in target:
        if t.stable_key:
            by_key_t[(_section_prefix(t.path, 2), t.stable_key)].append(t)
    for key, b_list in by_key_b.items():
        t_list = by_key_t.get(key, [])
        for i in range(min(len(b_list), len(t_list))):
            pairs.append((b_list[i], t_list[i]))
            used_b.add(b_list[i].id)
            used_t.add(t_list[i].id)

    # Pass 1b: stable_key anywhere
    flat_b: dict[str, list[Block]] = defaultdict(list)
    flat_t: dict[str, list[Block]] = defaultdict(list)
    for b in base:
        if b.stable_key and b.id not in used_b:
            flat_b[b.stable_key].append(b)
    for t in target:
        if t.stable_key and t.id not in used_t:
            flat_t[t.stable_key].append(t)
    for key, b_list in flat_b.items():
        t_list = flat_t.get(key, [])
        for i in range(min(len(b_list), len(t_list))):
            pairs.append((b_list[i], t_list[i]))
            used_b.add(b_list[i].id)
            used_t.add(t_list[i].id)

    # Pass 2: exact path match
    by_path_b = {b.path: b for b in base if b.id not in used_b}
    by_path_t = {t.path: t for t in target if t.id not in used_t}
    for p, b in by_path_b.items():
        if p in by_path_t:
            t = by_path_t[p]
            pairs.append((b, t))
            used_b.add(b.id)
            used_t.add(t.id)

    # Pass 3: anchor-signature match (the cross-page-shift fix)
    # For each remaining base block with non-empty anchors, find the
    # target block (any page, any section) with highest Jaccard on anchors.
    remaining_b = [b for b in base if b.id not in used_b and _anchors_of(b)]
    remaining_t = [t for t in target if t.id not in used_t and _anchors_of(t)]

    # Group target blocks by anchor set membership for cheaper lookup
    t_by_anchor: dict[str, list[Block]] = defaultdict(list)
    for t in remaining_t:
        for a in _anchors_of(t):
            t_by_anchor[a].append(t)

    for b in remaining_b:
        b_anc = _anchors_of(b)
        if not b_anc:
            continue
        # Candidate set: targets sharing any anchor
        cand: dict = {}                # key: block id, value: (block, count)
        for a in b_anc:
            for t in t_by_anchor.get(a, []):
                if t.id in used_t:
                    continue
                prev = cand.get(t.id, (t, 0))
                cand[t.id] = (t, prev[1] + 1)
        if not cand:
            continue

        # Rank by Jaccard, then by block-type match, then by text similarity
        def score(t: Block) -> tuple[float, int, float]:
            jac = jaccard(b_anc, _anchors_of(t))
            type_match = int(t.block_type == b.block_type)
            txt_sim = fuzz.ratio(_norm_text(b.text), _norm_text(t.text)) / 100.0
            return (jac, type_match, txt_sim)

        candidates = [v[0] for v in cand.values()]
        best = max(candidates, key=score)
        s = score(best)
        # Only accept if anchors agree on >= 50% AND text isn't wildly different
        if s[0] >= 0.5 and s[2] >= 0.3:
            pairs.append((b, best))
            used_b.add(b.id)
            used_t.add(best.id)

    # Pass 4: text similarity within nearest section, same block_type (v1 behavior)
    rem_b2 = [b for b in base if b.id not in used_b]
    rem_t2 = [t for t in target if t.id not in used_t]
    by_sec_t: dict[tuple[str, BlockType], list[Block]] = defaultdict(list)
    for t in rem_t2:
        by_sec_t[(_section_prefix(t.path, 2), t.block_type)].append(t)

    for b in rem_b2:
        candidates = by_sec_t.get((_section_prefix(b.path, 2), b.block_type), [])
        if not candidates:
            continue
        b_norm = _norm_text(b.text)
        if not b_norm:
            continue
        best = None
        best_score = 0.0
        for c in candidates:
            if c.id in used_t:
                continue
            score_ = fuzz.ratio(b_norm, _norm_text(c.text)) / 100.0
            if score_ > best_score:
                best_score = score_
                best = c
        if best is not None and best_score >= 0.6:
            pairs.append((b, best))
            used_b.add(b.id)
            used_t.add(best.id)

    # Remaining = ADDED / DELETED
    for b in base:
        if b.id not in used_b:
            pairs.append((b, None))
    for t in target:
        if t.id not in used_t:
            pairs.append((None, t))

    return pairs


# ---------- field/token diff (unchanged from v1) ----------

def _field_diff(b: Block, t: Block) -> list[FieldDiff]:
    out: list[FieldDiff] = []
    keys = set(b.payload.keys()) | set(t.payload.keys())
    # Skip our own internal bookkeeping fields
    keys = {k for k in keys if not k.startswith("__") and k not in ("anchors",)}
    for k in keys:
        bv = b.payload.get(k)
        tv = t.payload.get(k)
        if _norm_text(str(bv or "")) != _norm_text(str(tv or "")):
            out.append(FieldDiff(field=k, before=bv, after=tv))
    return out


def _token_diff(a: str, b: str) -> list[TokenOp]:
    aw = a.split()
    bw = b.split()
    sm = difflib.SequenceMatcher(a=aw, b=bw)
    out: list[TokenOp] = []
    for tag, i1, i2, j1, j2 in sm.get_opcodes():
        if tag == "equal":
            out.append(TokenOp(op="equal", text_a=" ".join(aw[i1:i2])))
        elif tag == "delete":
            out.append(TokenOp(op="delete", text_a=" ".join(aw[i1:i2])))
        elif tag == "insert":
            out.append(TokenOp(op="insert", text_b=" ".join(bw[j1:j2])))
        elif tag == "replace":
            out.append(TokenOp(op="replace",
                               text_a=" ".join(aw[i1:i2]),
                               text_b=" ".join(bw[j1:j2])))
    return out


def _impact(change: ChangeType, b: Optional[Block], t: Optional[Block], field_diffs: list[FieldDiff]) -> float:
    if change == ChangeType.UNCHANGED:
        return 0.0
    block = b or t
    base_score = 0.5
    if block and block.block_type in {BlockType.TABLE_ROW, BlockType.TABLE}:
        base_score += 0.2
    if change in {ChangeType.ADDED, ChangeType.DELETED} and block and block.block_type == BlockType.SECTION:
        base_score += 0.3
    if block and block.block_type == BlockType.KV_PAIR:
        text = (block.text or "").lower()
        if any(s in text for s in ("price", "availability", "amount", "rent", "fee", "term", "date")):
            base_score += 0.2
    # Boost when the block contains dollar amounts, dates, percentages
    if block:
        anc = _anchors_of(block)
        if any(a.startswith(("dollar_amount:", "percent:", "date_long:", "date_short:")) for a in anc):
            base_score += 0.15
    if field_diffs:
        base_score += min(0.2, 0.05 * len(field_diffs))
    return min(1.0, base_score)


def diff_blocks(base: list[Block], target: list[Block]) -> list[BlockDiff]:
    pairs = _align(base, target)
    out: list[BlockDiff] = []
    for b, t in pairs:
        if b is None and t is not None:
            out.append(BlockDiff(
                target_block_id=t.id,
                change_type=ChangeType.ADDED,
                similarity=0.0,
                impact_score=_impact(ChangeType.ADDED, None, t, []),
            ))
        elif t is None and b is not None:
            out.append(BlockDiff(
                base_block_id=b.id,
                change_type=ChangeType.DELETED,
                similarity=0.0,
                impact_score=_impact(ChangeType.DELETED, b, None, []),
            ))
        elif b and t:
            if b.content_hash == t.content_hash:
                out.append(BlockDiff(
                    base_block_id=b.id,
                    target_block_id=t.id,
                    change_type=ChangeType.UNCHANGED,
                    similarity=1.0,
                    impact_score=0.0,
                ))
                continue
            f_diffs = _field_diff(b, t)
            t_diff = []
            if b.block_type in {BlockType.PARAGRAPH, BlockType.LIST_ITEM, BlockType.HEADING, BlockType.FIGURE}:
                t_diff = _token_diff(b.text or "", t.text or "")
            sim = fuzz.ratio(_norm_text(b.text), _norm_text(t.text)) / 100.0
            out.append(BlockDiff(
                base_block_id=b.id,
                target_block_id=t.id,
                change_type=ChangeType.MODIFIED,
                similarity=sim,
                field_diffs=f_diffs,
                token_diff=t_diff,
                impact_score=_impact(ChangeType.MODIFIED, b, t, f_diffs),
            ))
    return out


def diff_stats(diffs: Iterable[BlockDiff]) -> dict[str, int]:
    s = {"ADDED": 0, "DELETED": 0, "MODIFIED": 0, "UNCHANGED": 0}
    for d in diffs:
        s[d.change_type.value] += 1
    return s


# ---------- header-to-header table comparison API ----------

def compare_table_headers(
    base_blocks: list[Block],
    target_blocks: list[Block],
    base_header_query: str,
    target_header_query: Optional[str] = None,
) -> dict:
    """
    Compare a specific table from the base doc against a specific table
    from the target doc, identified by fuzzy header text match.

    This is the API behind "user picks any header on the left and any
    header on the right and we diff their rows."

    Returns:
      {
        "base_header":   [...],
        "target_header": [...],
        "row_diffs": [
          {"change_type": "MODIFIED", "key": "765", "before_row": [...], "after_row": [...], "field_diffs": [...]},
          ...
        ],
        "header_alignment": [{"base_col": "...", "target_col": "..."}, ...]
      }
    """
    target_header_query = target_header_query or base_header_query

    def _find_table(blocks: list[Block], q: str) -> Optional[Block]:
        q_norm = _norm_text(q)
        best = None
        best_score = 0.0
        for b in blocks:
            if b.block_type != BlockType.TABLE:
                continue
            header_text = _norm_text(" ".join(b.payload.get("header", [])))
            score = fuzz.partial_ratio(q_norm, header_text) / 100.0
            if score > best_score:
                best_score = score
                best = b
        return best if best_score >= 0.55 else None

    bt = _find_table(base_blocks, base_header_query)
    tt = _find_table(target_blocks, target_header_query)

    if not bt or not tt:
        return {
            "error": "table not found",
            "base_found": bool(bt),
            "target_found": bool(tt),
        }

    # Get the rows that belong to each table
    b_rows = [b for b in base_blocks if b.parent_id == bt.id and b.block_type == BlockType.TABLE_ROW]
    t_rows = [b for b in target_blocks if b.parent_id == tt.id and b.block_type == BlockType.TABLE_ROW]

    # Align column headers
    b_header = bt.payload.get("header", [])
    t_header = tt.payload.get("header", [])
    header_alignment = []
    used_t = set()
    for bi, bh in enumerate(b_header):
        best_ti = None
        best_score = 0.0
        for ti, th in enumerate(t_header):
            if ti in used_t:
                continue
            s = fuzz.ratio(_norm_text(bh), _norm_text(th)) / 100.0
            if s > best_score:
                best_score = s
                best_ti = ti
        if best_ti is not None and best_score >= 0.5:
            used_t.add(best_ti)
            header_alignment.append({"base_col": bh, "target_col": t_header[best_ti], "score": round(best_score, 2)})
        else:
            header_alignment.append({"base_col": bh, "target_col": None, "score": 0.0})

    # Diff rows
    pairs = _align(b_rows, t_rows)
    row_diffs = []
    for b, t in pairs:
        if b is None:
            row_diffs.append({
                "change_type": "ADDED",
                "key": t.stable_key,
                "after_row": list(t.payload.values()),
            })
        elif t is None:
            row_diffs.append({
                "change_type": "DELETED",
                "key": b.stable_key,
                "before_row": list(b.payload.values()),
            })
        elif b.content_hash == t.content_hash:
            continue
        else:
            row_diffs.append({
                "change_type": "MODIFIED",
                "key": b.stable_key or t.stable_key,
                "before_row": list(b.payload.values()),
                "after_row":  list(t.payload.values()),
                "field_diffs": [fd.model_dump() for fd in _field_diff(b, t)],
            })

    return {
        "base_header": b_header,
        "target_header": t_header,
        "header_alignment": header_alignment,
        "row_diffs": row_diffs,
        "base_pages": bt.payload.get("spans_pages", [bt.page_number]),
        "target_pages": tt.payload.get("spans_pages", [tt.page_number]),
    }
