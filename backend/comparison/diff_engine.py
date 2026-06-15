"""
Anchor-aware diff engine.

Core goals:
  - Match related content semantically before declaring ADDED / DELETED.
  - Treat whitespace/layout-only changes as UNCHANGED.
  - Preserve real-world changes such as dates, years, prices, codes, values.
  - Compare table rows by row key + visible cell values, not by PDF layout noise.
  - Keep extraction/classification metadata out of user-facing diffs.
"""
from __future__ import annotations

import difflib
import re
from collections import Counter, defaultdict
from typing import Any, Iterable, Optional

from rapidfuzz import fuzz

from ..anchors import jaccard
from ..models import (
    Block,
    BlockDiff,
    BlockType,
    ChangeType,
    FieldDiff,
    TokenOp,
)


_WS_RE = re.compile(r"\s+")
_TM_RE = re.compile(r"[™®©]")
_PUNCT_RE = re.compile(r"[^a-z0-9 ]+")
_NUMBER_PREFIX_RE = re.compile(r"^\s*\d+(?:\.\d+)*\s*[.)-]?\s*")
_YEAR_RE = re.compile(r"\b(?:19|20)\d{2}\b")
_DATE_RE = re.compile(r"\b\d{1,2}[/-]\d{1,2}[/-]\d{2,4}\b")
_NUMBER_RE = re.compile(r"\b\d+(?:\.\d+)?\b")
_CODE_RE = re.compile(r"\b[A-Z0-9]{2,6}[A-Z]?\b")

_STOPWORDS = {
    "a", "an", "and", "are", "as", "at", "be", "by", "for", "from",
    "has", "in", "is", "it", "of", "on", "or", "that", "the", "this",
    "to", "with",
}

_INTERNAL_PAYLOAD_FIELDS = {
    "anchors",
    "__anchors__",
    "__pages__",
    "__row_index__",
    "__table_title__",
    "__table_context__",
    "page_width",
    "page_height",
    "spans_pages",
    "stitched_from",
    "ocr",
    "kind",
    "caption",
    "source_extraction",
    "source_format",
    "visual_match_score",
    "visual_match_source",
    "extraction_intelligence",
    "table_fingerprint",
    "column_profiles",
    "extraction_confidence",
    "quality_warnings",
    "language",
    "header_rows",
    "header_row_count",
    "header_index",
    "header_strategy",
    "header_sources",
    "strategies",
    "bbox_by_page",
}

_TABLE_BLOCK_NON_CONTENT_FIELDS = {
    "rows",
    "header",
    "near_texts",
    "source_tables",
    "stitched_from",
    "spans_pages",
    "header_rows",
    "header_sources",
}

_MATCH_TYPES = {
    BlockType.SECTION,
    BlockType.HEADING,
    BlockType.PARAGRAPH,
    BlockType.LIST_ITEM,
    BlockType.KV_PAIR,
    BlockType.FIGURE,
    BlockType.TABLE_ROW,
}


def _norm_text(s: Any) -> str:
    if s is None:
        return ""
    s = _TM_RE.sub("", str(s))
    s = _WS_RE.sub(" ", s)
    return s.strip().lower()


def _canonical_text(s: Any) -> str:
    """Strict equality text: ignores layout whitespace, case, and trademarks."""
    if s is None:
        return ""
    s = _TM_RE.sub("", str(s))
    s = _WS_RE.sub(" ", s)
    return s.strip().casefold()


def _semantic_text(s: Any) -> str:
    """
    Matching text: ignores section numbers, punctuation, and filler words.
    Years/dates/numbers are preserved so real-world changes are still caught.
    """
    if s is None:
        return ""

    s = _TM_RE.sub("", str(s))
    s = _NUMBER_PREFIX_RE.sub("", s)
    s = _PUNCT_RE.sub(" ", s.casefold())
    tokens = [t for t in _WS_RE.split(s.strip()) if t and t not in _STOPWORDS]
    return " ".join(tokens)


def _meaningful_tokens(s: Any) -> list[str]:
    return [t for t in _semantic_text(s).split() if t]


def _critical_values(s: Any) -> tuple[list[str], list[str], list[str]]:
    text = str(s or "")
    return (
        _YEAR_RE.findall(text),
        _DATE_RE.findall(text),
        _NUMBER_RE.findall(text),
    )


def _same_critical_values(before: Any, after: Any) -> bool:
    return _critical_values(before) == _critical_values(after)


def _layout_or_order_equivalent(before: Any, after: Any) -> bool:
    """
    Treat extraction-only noise as unchanged: line wraps, spacing, punctuation,
    and reordered copies of the same meaningful words.

    This deliberately refuses equivalence when years, dates, or numbers differ.
    Those are business facts, not layout.
    """
    if _canonical_text(before) == _canonical_text(after):
        return True
    if not _same_critical_values(before, after):
        return False

    b_sem = _semantic_text(before)
    a_sem = _semantic_text(after)
    if b_sem == a_sem:
        return True

    b_tokens = _meaningful_tokens(before)
    a_tokens = _meaningful_tokens(after)
    if not b_tokens and not a_tokens:
        return True
    if not b_tokens or not a_tokens:
        return False

    if Counter(b_tokens) == Counter(a_tokens):
        return True

    b_set = set(b_tokens)
    a_set = set(a_tokens)
    overlap = len(b_set & a_set) / max(1, len(b_set | a_set))
    length_delta = abs(len(b_tokens) - len(a_tokens)) / max(1, max(len(b_tokens), len(a_tokens)))
    token_set = fuzz.token_set_ratio(b_sem, a_sem) / 100.0
    token_sort = fuzz.token_sort_ratio(b_sem, a_sem) / 100.0
    return overlap >= 0.96 and length_delta <= 0.04 and max(token_set, token_sort) >= 0.97


def _is_internal_field(key: Any) -> bool:
    key = str(key or "")
    if not key:
        return True
    if key.startswith("__"):
        return True
    if key in _INTERNAL_PAYLOAD_FIELDS:
        return True
    if key.startswith("extraction_"):
        return True
    if key.endswith("_confidence"):
        return True
    if key in {"bbox", "coordinates", "page_coordinate", "page_coordinates"}:
        return True
    return False


def _section_prefix(path: str | None, depth: int = 2) -> str:
    parts = [p for p in (path or "").split("/") if p]
    cleaned = []
    for part in parts:
        if (
            part.startswith("table_")
            or part.startswith("row_")
            or part.startswith("layout_")
            or part.startswith("line_")
            or part.startswith("p_")
        ):
            continue
        cleaned.append(part)
    return "/" + "/".join(cleaned[:depth]) if cleaned else ""


def _path_similarity(a: str | None, b: str | None) -> float:
    return fuzz.token_set_ratio(_norm_text(_section_prefix(a, 4)), _norm_text(_section_prefix(b, 4))) / 100.0


def _anchors_of(b: Block) -> frozenset[str]:
    if not isinstance(b.payload, dict):
        return frozenset()
    anchors = b.payload.get("anchors") or b.payload.get("__anchors__") or []
    return frozenset(anchors or [])


def _visible_payload(block: Block) -> dict[str, Any]:
    if not isinstance(block.payload, dict):
        return {}

    out: dict[str, Any] = {}
    for key, value in block.payload.items():
        key = str(key)
        if _is_internal_field(key):
            continue
        if block.block_type == BlockType.TABLE and key in _TABLE_BLOCK_NON_CONTENT_FIELDS:
            continue
        out[key] = value
    return out


def _payload_text(block: Block) -> str:
    payload = _visible_payload(block)
    parts = []
    for key, value in payload.items():
        if isinstance(value, list):
            value_text = " ".join(str(v or "") for v in value[:20])
        elif isinstance(value, dict):
            value_text = " ".join(
                f"{k} {v}" for k, v in list(value.items())[:20]
                if not _is_internal_field(k)
            )
        else:
            value_text = str(value or "")
        parts.append(f"{key} {value_text}")
    return " ".join(parts)


def _row_values(row: Block) -> dict[str, Any]:
    if row.block_type != BlockType.TABLE_ROW:
        return {}
    return _visible_payload(row)


def _row_key(row: Block) -> str:
    if row.stable_key:
        return str(row.stable_key).strip()

    values = _row_values(row)
    for value in values.values():
        text = str(value or "").strip()
        if text:
            return text[:100]

    return (row.text or "").strip()[:100]


def _row_signature(row: Block) -> str:
    values = _row_values(row)
    if values:
        return " | ".join(f"{k}: {v}" for k, v in values.items() if str(v or "").strip())
    return row.text or ""


def _same_kind_bonus(b: Block, t: Block) -> float:
    if b.block_type == t.block_type:
        return 0.10
    if {b.block_type, t.block_type} <= {BlockType.PARAGRAPH, BlockType.LIST_ITEM, BlockType.KV_PAIR}:
        return 0.03
    return -0.18


def _page_sequence_affinity(b: Block, t: Block) -> float:
    seq_gap = abs((b.sequence or 0) - (t.sequence or 0))
    page_gap = abs((b.page_number or 0) - (t.page_number or 0))
    seq_score = max(0.0, 1.0 - seq_gap / 18.0)
    page_score = max(0.0, 1.0 - page_gap / 6.0)
    return seq_score * 0.62 + page_score * 0.38


def _number_overlap_score(b: Block, t: Block) -> float:
    b_text = " ".join([b.text or "", _payload_text(b)])
    t_text = " ".join([t.text or "", _payload_text(t)])
    b_nums = set(_NUMBER_RE.findall(b_text))
    t_nums = set(_NUMBER_RE.findall(t_text))
    b_codes = set(_CODE_RE.findall(b_text.upper()))
    t_codes = set(_CODE_RE.findall(t_text.upper()))
    b_all = b_nums | b_codes
    t_all = t_nums | t_codes
    if not b_all and not t_all:
        return 0.0
    return len(b_all & t_all) / max(1, len(b_all | t_all))


def _table_row_match_score(b: Block, t: Block) -> float:
    b_key = _norm_text(_row_key(b))
    t_key = _norm_text(_row_key(t))
    b_sig = _norm_text(_row_signature(b))
    t_sig = _norm_text(_row_signature(t))

    key_score = 0.0
    if b_key and t_key:
        if b_key == t_key:
            key_score = 1.0
        else:
            key_score = max(
                fuzz.ratio(b_key, t_key) / 100.0,
                fuzz.partial_ratio(b_key, t_key) / 100.0,
            )

    row_text_score = max(
        fuzz.token_set_ratio(_norm_text(b.text), _norm_text(t.text)) / 100.0,
        fuzz.token_set_ratio(b_sig, t_sig) / 100.0,
    )

    b_values = _row_values(b)
    t_values = _row_values(t)
    shared_field_score = 0.0
    if b_values and t_values:
        b_payload_text = _norm_text(" ".join(str(v or "") for v in b_values.values()))
        t_payload_text = _norm_text(" ".join(str(v or "") for v in t_values.values()))
        shared_field_score = fuzz.token_set_ratio(b_payload_text, t_payload_text) / 100.0

    path_score = _path_similarity(b.path, t.path)
    number_score = _number_overlap_score(b, t)
    score = (
        key_score * 0.36
        + row_text_score * 0.28
        + shared_field_score * 0.16
        + path_score * 0.08
        + _page_sequence_affinity(b, t) * 0.05
        + number_score * 0.07
    )
    if b.block_type == t.block_type:
        score += 0.04
    return min(1.0, score)


def _semantic_match_score(b: Block, t: Block) -> float:
    if b.block_type == BlockType.TABLE_ROW and t.block_type == BlockType.TABLE_ROW:
        return _table_row_match_score(b, t)

    bs = _semantic_text(" ".join([b.text or "", _payload_text(b)]))
    ts = _semantic_text(" ".join([t.text or "", _payload_text(t)]))
    if not bs or not ts:
        return 0.0

    ratio = fuzz.ratio(bs, ts) / 100.0
    token_set = fuzz.token_set_ratio(bs, ts) / 100.0
    partial = fuzz.partial_ratio(bs, ts) / 100.0
    anchors = jaccard(_anchors_of(b), _anchors_of(t)) if (_anchors_of(b) or _anchors_of(t)) else 0.0
    path_score = _path_similarity(b.path, t.path)
    number_score = _number_overlap_score(b, t)

    return (
        ratio * 0.28
        + token_set * 0.25
        + partial * 0.17
        + _page_sequence_affinity(b, t) * 0.10
        + anchors * 0.07
        + path_score * 0.06
        + number_score * 0.07
        + _same_kind_bonus(b, t)
    )


def _is_layout_only_change(b: Block, t: Block) -> bool:
    if b.block_type != t.block_type:
        return False
    if not _layout_or_order_equivalent(b.text, t.text):
        return False
    return _visible_payload(b) == _visible_payload(t)


def _has_real_world_delta(b: Block, t: Block) -> bool:
    if _is_layout_only_change(b, t):
        return False

    before = _canonical_text(" ".join([b.text or "", _payload_text(b)]))
    after = _canonical_text(" ".join([t.text or "", _payload_text(t)]))
    if _YEAR_RE.findall(before) != _YEAR_RE.findall(after):
        return True
    if _DATE_RE.findall(before) != _DATE_RE.findall(after):
        return True
    if _NUMBER_RE.findall(before) != _NUMBER_RE.findall(after):
        return True
    if _layout_or_order_equivalent(before, after):
        return False
    return before != after


def _pair_sorted_candidates(
    scored: list[tuple[float, Block, Block]],
    used_b: set,
    used_t: set,
) -> list[tuple[Block, Block]]:
    pairs = []
    scored.sort(key=lambda item: item[0], reverse=True)
    for score, b, t in scored:
        if b.id in used_b or t.id in used_t:
            continue
        pairs.append((b, t))
        used_b.add(b.id)
        used_t.add(t.id)
    return pairs


def _sequence_alignment_score(b: Block, t: Block) -> float:
    score = _semantic_match_score(b, t)

    b_norm = _canonical_text(b.text)
    t_norm = _canonical_text(t.text)
    if b_norm == t_norm:
        score += 0.05
    else:
        if len(b_norm.split()) <= 3 or len(t_norm.split()) <= 3:
            score -= 0.50
        else:
            ratio = fuzz.ratio(b_norm, t_norm) / 100.0 if (b_norm and t_norm) else 0.0
            if ratio >= 0.82:
                score += 0.05 * ratio
            else:
                score -= 0.50 * (1.0 - ratio)

    if _page_sequence_affinity(b, t) >= 0.75:
        score += 0.06
    return min(1.0, score)


def _align_sequence_dp(
    base_list: list[Block],
    target_list: list[Block],
) -> list[tuple[Optional[Block], Optional[Block]]]:
    """
    Order-preserving alignment for repeated lines inside the same section/type.
    This avoids greedy cross-pairing when identical placeholders or footers move.
    """
    base_items = sorted(base_list, key=lambda b: (b.page_number, b.sequence))
    target_items = sorted(target_list, key=lambda b: (b.page_number, b.sequence))
    m = len(base_items)
    n = len(target_items)
    gap_penalty = -0.18

    scores = [[0.0] * (n + 1) for _ in range(m + 1)]
    moves = [[""] * (n + 1) for _ in range(m + 1)]

    for i in range(1, m + 1):
        scores[i][0] = scores[i - 1][0] + gap_penalty
        moves[i][0] = "up"
    for j in range(1, n + 1):
        scores[0][j] = scores[0][j - 1] + gap_penalty
        moves[0][j] = "left"

    for i in range(1, m + 1):
        for j in range(1, n + 1):
            diag = scores[i - 1][j - 1] + _sequence_alignment_score(base_items[i - 1], target_items[j - 1])
            up = scores[i - 1][j] + gap_penalty
            left = scores[i][j - 1] + gap_penalty
            best = max(diag, up, left)
            scores[i][j] = best
            if best == diag:
                moves[i][j] = "diag"
            elif best == up:
                moves[i][j] = "up"
            else:
                moves[i][j] = "left"

    aligned: list[tuple[Optional[Block], Optional[Block]]] = []
    i, j = m, n
    while i > 0 or j > 0:
        move = moves[i][j]
        if i > 0 and j > 0 and move == "diag":
            aligned.append((base_items[i - 1], target_items[j - 1]))
            i -= 1
            j -= 1
        elif i > 0 and (j == 0 or move == "up"):
            aligned.append((base_items[i - 1], None))
            i -= 1
        else:
            aligned.append((None, target_items[j - 1]))
            j -= 1

    aligned.reverse()
    return aligned


def _align(base: list[Block], target: list[Block]) -> list[tuple[Optional[Block], Optional[Block]]]:
    pairs: list[tuple[Optional[Block], Optional[Block]]] = []
    used_b: set = set()
    used_t: set = set()

    by_key_b: dict[tuple[str, str, BlockType], list[Block]] = defaultdict(list)
    by_key_t: dict[tuple[str, str, BlockType], list[Block]] = defaultdict(list)
    for b in base:
        if b.stable_key:
            by_key_b[(_section_prefix(b.path, 3), str(b.stable_key), b.block_type)].append(b)
    for t in target:
        if t.stable_key:
            by_key_t[(_section_prefix(t.path, 3), str(t.stable_key), t.block_type)].append(t)

    for key, b_list in by_key_b.items():
        t_list = by_key_t.get(key, [])
        scored = [(_semantic_match_score(b, t), b, t) for b in b_list for t in t_list]
        for b, t in _pair_sorted_candidates(scored, used_b, used_t):
            pairs.append((b, t))

    flat_b: dict[tuple[str, BlockType], list[Block]] = defaultdict(list)
    flat_t: dict[tuple[str, BlockType], list[Block]] = defaultdict(list)
    for b in base:
        if b.stable_key and b.id not in used_b:
            flat_b[(str(b.stable_key), b.block_type)].append(b)
    for t in target:
        if t.stable_key and t.id not in used_t:
            flat_t[(str(t.stable_key), t.block_type)].append(t)

    for key, b_list in flat_b.items():
        t_list = flat_t.get(key, [])
        scored = []
        for b in b_list:
            for t in t_list:
                score = _semantic_match_score(b, t)
                threshold = 0.48 if b.block_type == BlockType.TABLE_ROW else 0.55
                if score >= threshold:
                    scored.append((score, b, t))
        for b, t in _pair_sorted_candidates(scored, used_b, used_t):
            pairs.append((b, t))

    by_path_b = {b.path: b for b in base if b.id not in used_b}
    by_path_t = {t.path: t for t in target if t.id not in used_t}
    for path, b in by_path_b.items():
        t = by_path_t.get(path)
        if not t or t.id in used_t or b.block_type != t.block_type:
            continue
        pairs.append((b, t))
        used_b.add(b.id)
        used_t.add(t.id)

    remaining_b = [b for b in base if b.id not in used_b and _anchors_of(b)]
    remaining_t = [t for t in target if t.id not in used_t and _anchors_of(t)]
    t_by_anchor: dict[str, list[Block]] = defaultdict(list)
    for t in remaining_t:
        for anchor in _anchors_of(t):
            t_by_anchor[anchor].append(t)

    scored = []
    for b in remaining_b:
        b_anchors = _anchors_of(b)
        candidates: dict[Any, Block] = {}
        for anchor in b_anchors:
            for t in t_by_anchor.get(anchor, []):
                if t.id not in used_t:
                    candidates[t.id] = t
        for t in candidates.values():
            anchor_score = jaccard(b_anchors, _anchors_of(t))
            text_score = fuzz.token_set_ratio(_norm_text(b.text), _norm_text(t.text)) / 100.0
            semantic_score = _semantic_match_score(b, t)
            score = anchor_score * 0.45 + text_score * 0.20 + semantic_score * 0.35
            if anchor_score >= 0.45 and score >= 0.50:
                scored.append((score, b, t))
    for b, t in _pair_sorted_candidates(scored, used_b, used_t):
        pairs.append((b, t))

    rem_b = [b for b in base if b.id not in used_b and b.block_type in _MATCH_TYPES]
    rem_t = [t for t in target if t.id not in used_t and t.block_type in _MATCH_TYPES]
    by_sec_b: dict[tuple[str, BlockType], list[Block]] = defaultdict(list)
    by_sec_t: dict[tuple[str, BlockType], list[Block]] = defaultdict(list)
    for b in rem_b:
        by_sec_b[(_section_prefix(b.path, 2), b.block_type)].append(b)
    for t in rem_t:
        by_sec_t[(_section_prefix(t.path, 2), t.block_type)].append(t)

    for key, b_list in by_sec_b.items():
        t_list = by_sec_t.get(key, [])
        if not t_list:
            continue

        for b, t in _align_sequence_dp(b_list, t_list):
            if not b or not t or b.id in used_b or t.id in used_t:
                continue
            score = _sequence_alignment_score(b, t)
            threshold = 0.50 if b.block_type == BlockType.TABLE_ROW else 0.58
            if score >= threshold:
                pairs.append((b, t))
                used_b.add(b.id)
                used_t.add(t.id)

    rem_b = [b for b in base if b.id not in used_b and b.block_type in _MATCH_TYPES]
    rem_t = [t for t in target if t.id not in used_t and t.block_type in _MATCH_TYPES]
    scored = []
    for b in rem_b:
        for t in rem_t:
            if t.id in used_t or b.block_type != t.block_type:
                continue
            score = _semantic_match_score(b, t)
            if b.block_type == BlockType.TABLE_ROW:
                threshold = 0.66
            elif b.block_type in {BlockType.SECTION, BlockType.HEADING}:
                threshold = 0.64
            else:
                threshold = 0.60
            if _page_sequence_affinity(b, t) >= 0.80:
                threshold -= 0.05
            if score >= threshold:
                scored.append((score, b, t))
    for b, t in _pair_sorted_candidates(scored, used_b, used_t):
        pairs.append((b, t))

    for b in base:
        if b.id not in used_b:
            pairs.append((b, None))
    for t in target:
        if t.id not in used_t:
            pairs.append((None, t))
    return pairs


def _field_diff(b: Block, t: Block) -> list[FieldDiff]:
    out: list[FieldDiff] = []
    bp = _visible_payload(b)
    tp = _visible_payload(t)
    keys = set(bp.keys()) | set(tp.keys())
    for key in sorted(keys):
        if _is_internal_field(key):
            continue
        before = bp.get(key)
        after = tp.get(key)
        if _norm_text(before) != _norm_text(after) and not _layout_or_order_equivalent(before, after):
            out.append(FieldDiff(field=str(key), before=before, after=after))
    return out


def _token_diff(a: str, b: str) -> list[TokenOp]:
    if _layout_or_order_equivalent(a, b):
        return []

    aw = (a or "").split()
    bw = (b or "").split()
    sm = difflib.SequenceMatcher(a=aw, b=bw, autojunk=False)
    out: list[TokenOp] = []
    for tag, i1, i2, j1, j2 in sm.get_opcodes():
        if tag == "equal":
            out.append(TokenOp(op="equal", text_a=" ".join(aw[i1:i2])))
        elif tag == "delete":
            out.append(TokenOp(op="delete", text_a=" ".join(aw[i1:i2])))
        elif tag == "insert":
            out.append(TokenOp(op="insert", text_b=" ".join(bw[j1:j2])))
        elif tag == "replace":
            out.extend(_refined_replace_ops(aw[i1:i2], bw[j1:j2]))

    changed_words = 0
    for op in out:
        if op.op == "equal":
            continue
        changed_words += len((op.text_a or "").split())
        changed_words += len((op.text_b or "").split())
    total_words = max(1, len(aw) + len(bw))
    if changed_words / total_words >= 0.45:
        a_sem = _semantic_text(a)
        b_sem = _semantic_text(b)
        if _same_critical_values(a, b) and fuzz.token_set_ratio(a_sem, b_sem) >= 92:
            return []
    return out


def _token_equivalent(a: str, b: str) -> bool:
    return _canonical_text(a) == _canonical_text(b) or _semantic_text(a) == _semantic_text(b)


def _append_token_op(out: list[TokenOp], op: str, text_a: str | None = None, text_b: str | None = None) -> None:
    if not text_a and not text_b:
        return
    if out and out[-1].op == op:
        if text_a:
            out[-1].text_a = " ".join(part for part in (out[-1].text_a, text_a) if part)
        if text_b:
            out[-1].text_b = " ".join(part for part in (out[-1].text_b, text_b) if part)
        return
    out.append(TokenOp(op=op, text_a=text_a, text_b=text_b))


def _refined_replace_ops(before: list[str], after: list[str]) -> list[TokenOp]:
    """
    SequenceMatcher can emit a broad replace chunk when a sentence has repeated
    words. Trim equal edges and pair same-position tokens so a one-word edit is
    not rendered as a whole-phrase replacement.
    """
    if not before and not after:
        return []

    prefix = 0
    while prefix < len(before) and prefix < len(after) and _token_equivalent(before[prefix], after[prefix]):
        prefix += 1

    suffix = 0
    while (
        suffix < len(before) - prefix
        and suffix < len(after) - prefix
        and _token_equivalent(before[len(before) - 1 - suffix], after[len(after) - 1 - suffix])
    ):
        suffix += 1

    out: list[TokenOp] = []
    if prefix:
        _append_token_op(out, "equal", text_a=" ".join(before[:prefix]))

    b_mid = before[prefix: len(before) - suffix if suffix else len(before)]
    a_mid = after[prefix: len(after) - suffix if suffix else len(after)]

    if len(b_mid) == len(a_mid):
        for b_tok, a_tok in zip(b_mid, a_mid):
            if _token_equivalent(b_tok, a_tok):
                _append_token_op(out, "equal", text_a=b_tok)
            else:
                _append_token_op(out, "replace", text_a=b_tok, text_b=a_tok)
    elif b_mid and a_mid:
        nested = difflib.SequenceMatcher(a=b_mid, b=a_mid, autojunk=False)
        for tag, i1, i2, j1, j2 in nested.get_opcodes():
            if tag == "equal":
                _append_token_op(out, "equal", text_a=" ".join(b_mid[i1:i2]))
            elif tag == "delete":
                _append_token_op(out, "delete", text_a=" ".join(b_mid[i1:i2]))
            elif tag == "insert":
                _append_token_op(out, "insert", text_b=" ".join(a_mid[j1:j2]))
            else:
                _append_token_op(out, "replace", text_a=" ".join(b_mid[i1:i2]), text_b=" ".join(a_mid[j1:j2]))
    elif b_mid:
        _append_token_op(out, "delete", text_a=" ".join(b_mid))
    elif a_mid:
        _append_token_op(out, "insert", text_b=" ".join(a_mid))

    if suffix:
        _append_token_op(out, "equal", text_a=" ".join(before[len(before) - suffix:]))
    return out


def _impact(change: ChangeType, b: Optional[Block], t: Optional[Block], field_diffs: list[FieldDiff]) -> float:
    if change == ChangeType.UNCHANGED:
        return 0.0
    block = b or t
    base_score = 0.5
    if block and block.block_type in {BlockType.TABLE_ROW, BlockType.TABLE}:
        base_score += 0.2
    if change in {ChangeType.ADDED, ChangeType.DELETED} and block and block.block_type == BlockType.SECTION:
        base_score += 0.25
    if block and block.block_type == BlockType.KV_PAIR:
        text = (block.text or "").lower()
        if any(term in text for term in ("price", "availability", "amount", "rent", "fee", "term", "date")):
            base_score += 0.2
    if block:
        anchors = _anchors_of(block)
        if any(anchor.startswith(("dollar_amount:", "percent:", "date_long:", "date_short:")) for anchor in anchors):
            base_score += 0.15
    if field_diffs:
        base_score += min(0.25, 0.06 * len(field_diffs))
    return min(1.0, base_score)


def diff_blocks(base: list[Block], target: list[Block]) -> list[BlockDiff]:
    pairs = _align(base, target)
    out: list[BlockDiff] = []

    for b, t in pairs:
        if b is None and t is not None:
            out.append(
                BlockDiff(
                    target_block_id=t.id,
                    change_type=ChangeType.ADDED,
                    similarity=0.0,
                    impact_score=_impact(ChangeType.ADDED, None, t, []),
                )
            )
            continue

        if t is None and b is not None:
            out.append(
                BlockDiff(
                    base_block_id=b.id,
                    change_type=ChangeType.DELETED,
                    similarity=0.0,
                    impact_score=_impact(ChangeType.DELETED, b, None, []),
                )
            )
            continue

        if not b or not t:
            continue

        if b.content_hash == t.content_hash or _is_layout_only_change(b, t):
            out.append(
                BlockDiff(
                    base_block_id=b.id,
                    target_block_id=t.id,
                    change_type=ChangeType.UNCHANGED,
                    similarity=1.0,
                    impact_score=0.0,
                )
            )
            continue

        field_diffs = _field_diff(b, t)
        if not field_diffs and not _has_real_world_delta(b, t):
            out.append(
                BlockDiff(
                    base_block_id=b.id,
                    target_block_id=t.id,
                    change_type=ChangeType.UNCHANGED,
                    similarity=1.0,
                    impact_score=0.0,
                )
            )
            continue

        token_diff: list[TokenOp] = []
        if b.block_type in {
            BlockType.PARAGRAPH,
            BlockType.LIST_ITEM,
            BlockType.HEADING,
            BlockType.SECTION,
            BlockType.FIGURE,
        }:
            token_diff = _token_diff(b.text or "", t.text or "")

        similarity = _semantic_match_score(b, t)
        out.append(
            BlockDiff(
                base_block_id=b.id,
                target_block_id=t.id,
                change_type=ChangeType.MODIFIED,
                similarity=similarity,
                field_diffs=field_diffs,
                token_diff=token_diff,
                impact_score=_impact(ChangeType.MODIFIED, b, t, field_diffs),
            )
        )
    return out


def diff_stats(diffs: Iterable[BlockDiff]) -> dict[str, int]:
    stats = {"ADDED": 0, "DELETED": 0, "MODIFIED": 0, "UNCHANGED": 0}
    for d in diffs:
        stats[d.change_type.value] += 1
    return stats


def compare_table_headers(
    base_blocks: list[Block],
    target_blocks: list[Block],
    base_header_query: str,
    target_header_query: Optional[str] = None,
) -> dict:
    """
    Backward-compatible table comparison helper.

    Newer API code can compare by table ID directly, but this helper remains
    useful for older frontend calls that pass header text only.
    """
    target_header_query = target_header_query or base_header_query

    def _header(block: Block) -> list[str]:
        if not isinstance(block.payload, dict):
            return []
        return [str(h or "") for h in block.payload.get("header", [])]

    def _find_table(blocks: list[Block], query: str) -> Optional[Block]:
        q = _norm_text(query)
        best = None
        best_score = 0.0
        for block in blocks:
            if block.block_type != BlockType.TABLE:
                continue
            header_text = _norm_text(" ".join(_header(block)))
            path_text = _norm_text(block.path)
            title_text = ""
            if isinstance(block.payload, dict):
                title_text = _norm_text(block.payload.get("__table_title__") or block.payload.get("title"))
            score = max(
                fuzz.partial_ratio(q, header_text) / 100.0,
                fuzz.partial_ratio(q, path_text) / 100.0,
                fuzz.partial_ratio(q, title_text) / 100.0,
            )
            if score > best_score:
                best_score = score
                best = block
        return best if best_score >= 0.45 else None

    base_table = _find_table(base_blocks, base_header_query)
    target_table = _find_table(target_blocks, target_header_query)
    if not base_table or not target_table:
        return {
            "error": "table not found",
            "base_found": bool(base_table),
            "target_found": bool(target_table),
        }

    base_rows = [
        block for block in base_blocks
        if block.parent_id == base_table.id and block.block_type == BlockType.TABLE_ROW
    ]
    target_rows = [
        block for block in target_blocks
        if block.parent_id == target_table.id and block.block_type == BlockType.TABLE_ROW
    ]

    base_header = _header(base_table)
    target_header = _header(target_table)
    header_alignment = []
    used_target = set()
    for base_index, base_col in enumerate(base_header):
        best_target_index = None
        best_score = 0.0
        for target_index, target_col in enumerate(target_header):
            if target_index in used_target:
                continue
            score = fuzz.ratio(_norm_text(base_col), _norm_text(target_col)) / 100.0
            if score > best_score:
                best_score = score
                best_target_index = target_index
        if best_target_index is not None and best_score >= 0.55:
            used_target.add(best_target_index)
            header_alignment.append(
                {
                    "base_col": base_col,
                    "target_col": target_header[best_target_index],
                    "score": round(best_score, 2),
                    "status": "matched",
                }
            )
        else:
            header_alignment.append(
                {
                    "base_col": base_col,
                    "target_col": None,
                    "score": 0.0,
                    "status": "base_only",
                }
            )
    for target_index, target_col in enumerate(target_header):
        if target_index not in used_target:
            header_alignment.append(
                {
                    "base_col": None,
                    "target_col": target_col,
                    "score": 0.0,
                    "status": "target_only",
                }
            )

    row_diffs = []
    for b, t in _align(base_rows, target_rows):
        if b is None and t is not None:
            row_diffs.append(
                {
                    "change_type": "ADDED",
                    "key": _row_key(t),
                    "after_row": _visible_payload(t),
                }
            )
        elif t is None and b is not None:
            row_diffs.append(
                {
                    "change_type": "DELETED",
                    "key": _row_key(b),
                    "before_row": _visible_payload(b),
                }
            )
        elif b and t:
            fields = _field_diff(b, t)
            if fields:
                row_diffs.append(
                    {
                        "change_type": "MODIFIED",
                        "key": _row_key(b) or _row_key(t),
                        "before_row": _visible_payload(b),
                        "after_row": _visible_payload(t),
                        "field_diffs": [
                            fd.model_dump() if hasattr(fd, "model_dump") else fd.dict()
                            for fd in fields
                        ],
                    }
                )

    return {
        "base_header": base_header,
        "target_header": target_header,
        "header_alignment": header_alignment,
        "row_diffs": row_diffs,
        "base_pages": base_table.payload.get("spans_pages", [base_table.page_number]) if isinstance(base_table.payload, dict) else [base_table.page_number],
        "target_pages": target_table.payload.get("spans_pages", [target_table.page_number]) if isinstance(target_table.payload, dict) else [target_table.page_number],
    }
