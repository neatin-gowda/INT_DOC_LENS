"""
Diff engine.

Three granularities:
  1. BLOCK       — coarse: which logical units were ADDED/DELETED/MODIFIED
  2. FIELD       — within a MODIFIED table row or kv-pair, which cell/field changed
  3. TOKEN       — within a MODIFIED paragraph, GitHub-style word-level diff

Alignment strategy (in priority order):
  a) stable_key match within the same path-prefix
  b) exact path match
  c) text-similarity match within nearest section
  d) embedding-similarity match (when embeddings are available)
"""
from __future__ import annotations

import difflib
import re
from collections import defaultdict
from typing import Iterable, Optional

from rapidfuzz import fuzz

from .models import (
    Block,
    BlockDiff,
    BlockType,
    ChangeType,
    FieldDiff,
    TokenOp,
)


# ---------- normalization helpers ----------

_WS_RE = re.compile(r"\s+")
_TRADEMARK_RE = re.compile(r"[™®©]")


def _norm_text(s: str) -> str:
    if not s:
        return ""
    s = _TRADEMARK_RE.sub("", s)
    s = _WS_RE.sub(" ", s)
    return s.strip().lower()


def _section_prefix(path: str, depth: int = 2) -> str:
    parts = [p for p in path.split("/") if p]
    return "/" + "/".join(parts[:depth]) if parts else ""


# ---------- alignment ----------

def _align(
    base: list[Block],
    target: list[Block],
) -> list[tuple[Optional[Block], Optional[Block]]]:
    """
    Return a list of (base_block, target_block) pairs covering every block
    in either side.  None on one side = unmatched.
    """
    pairs: list[tuple[Optional[Block], Optional[Block]]] = []
    used_b: set = set()
    used_t: set = set()

    # Pass 1: stable_key match within section prefix
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

    # Pass 1b: stable_key match anywhere (in case section name was renamed)
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

    # Pass 3: text similarity within nearest section, same block_type
    remaining_b = [b for b in base if b.id not in used_b]
    remaining_t = [t for t in target if t.id not in used_t]

    by_sec_t: dict[tuple[str, BlockType], list[Block]] = defaultdict(list)
    for t in remaining_t:
        by_sec_t[(_section_prefix(t.path, 2), t.block_type)].append(t)

    for b in remaining_b:
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
            score = fuzz.ratio(b_norm, _norm_text(c.text)) / 100.0
            if score > best_score:
                best_score = score
                best = c
        if best is not None and best_score >= 0.6:
            pairs.append((b, best))
            used_b.add(b.id)
            used_t.add(best.id)

    # Remaining b = DELETED, remaining t = ADDED
    for b in base:
        if b.id not in used_b:
            pairs.append((b, None))
    for t in target:
        if t.id not in used_t:
            pairs.append((None, t))

    return pairs


# ---------- field/token diff ----------

def _field_diff(b: Block, t: Block) -> list[FieldDiff]:
    out: list[FieldDiff] = []
    keys = set(b.payload.keys()) | set(t.payload.keys())
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
            out.append(TokenOp(
                op="replace",
                text_a=" ".join(aw[i1:i2]),
                text_b=" ".join(bw[j1:j2]),
            ))
    return out


def _impact(
    change: ChangeType,
    b: Optional[Block],
    t: Optional[Block],
    field_diffs: list[FieldDiff],
) -> float:
    """
    Heuristic 0..1 ranking score for "how important is this change?"
    Used by the summarizer to pick top-N rows for the LLM table.
    """
    if change == ChangeType.UNCHANGED:
        return 0.0
    block = b or t
    base = 0.5
    # Tables / table rows usually carry product spec — boost
    if block and block.block_type in {BlockType.TABLE_ROW, BlockType.TABLE}:
        base += 0.2
    # Headings/sections being removed = high impact
    if change in {ChangeType.ADDED, ChangeType.DELETED} and block and block.block_type == BlockType.SECTION:
        base += 0.3
    # KV pairs about price, availability, code = high impact
    if block and block.block_type == BlockType.KV_PAIR:
        text = (block.text or "").lower()
        if any(t in text for t in ("price", "availability", "code", "engine", "transmission")):
            base += 0.2
    if field_diffs:
        base += min(0.2, 0.05 * len(field_diffs))
    return min(1.0, base)


# ---------- main entry ----------

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
        elif b is not None and t is not None:
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
            if b.block_type in {BlockType.PARAGRAPH, BlockType.LIST_ITEM, BlockType.HEADING}:
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
