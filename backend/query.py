"""
Natural-language query layer.

User examples we want to support:
  "what changed in the Sasquatch Package on Big Bend?"
  "show me all paint colors that were added"
  "compare the Wildtrak engine options"
  "list everything that's now optional that used to be standard"

Approach:
  1. Try fast deterministic routing on common patterns (keys, sections,
     known intents). This handles the bulk cheaply.
  2. For ambiguous queries, ask the LLM to emit a structured plan:
       {
         "intent": "diff" | "lookup" | "compare",
         "filters": {"stable_key": [...], "section": [...], "change_type": [...]},
         "granularity": "block" | "field" | "summary"
       }
  3. Execute the plan against the in-memory diff result OR against the
     Postgres tables in production.
"""
from __future__ import annotations

import json
import os
import re
from typing import Optional

from .models import Block, BlockDiff, ChangeType


# ---------- deterministic patterns ----------

_KEY_RX = re.compile(r"\b([A-Z0-9]{2,4}[A-Z]?)\b")

KNOWN_SECTIONS = {
    "big bend":     ["big_bend"],
    "badlands":     ["badlands"],
    "wildtrak":     ["wildtrak"],
    "outer banks":  ["outer_banks"],
    "raptor":       ["raptor"],
    "everglades":   ["everglades"],
    "heritage":     ["heritage_edition", "heritage_limited_edition", "heritage"],
    "stroppe":      ["stroppe_edition", "stroppe"],
    "black diamond": ["black_diamond"],
    "sasquatch":    ["sasquatch"],
    "base":         ["base"],
}


def parse_query(nl: str) -> dict:
    nl_low = nl.lower()

    # Extract change type
    change_types: list[str] = []
    if any(w in nl_low for w in ("add", "added", "new")):
        change_types.append("ADDED")
    if any(w in nl_low for w in ("delete", "deleted", "removed", "dropped")):
        change_types.append("DELETED")
    if any(w in nl_low for w in ("modif", "changed", "updated")):
        change_types.append("MODIFIED")
    if not change_types:
        change_types = ["ADDED", "DELETED", "MODIFIED"]

    # Extract section hints
    sections: list[str] = []
    for term, paths in KNOWN_SECTIONS.items():
        if term in nl_low:
            sections.extend(paths)

    # Extract codes
    codes: list[str] = []
    for m in _KEY_RX.finditer(nl):
        token = m.group(1)
        # Filter out trivial words
        if token in {"AND", "THE", "FOR", "ALL", "OR", "NEW", "OLD"}:
            continue
        codes.append(token)

    plan = {
        "intent": "diff",
        "filters": {
            "change_type": change_types,
            "section": sections,
            "stable_key": codes,
        },
        "granularity": "block",
    }
    return plan


def execute_plan(
    plan: dict,
    diffs: list[BlockDiff],
    base_blocks: list[Block],
    target_blocks: list[Block],
) -> list[dict]:
    base_by_id = {b.id: b for b in base_blocks}
    tgt_by_id = {b.id: b for b in target_blocks}
    f = plan.get("filters", {})
    want_changes = set(f.get("change_type") or ["ADDED", "DELETED", "MODIFIED"])
    want_sections = [s.lower() for s in f.get("section", [])]
    want_keys = [k.upper() for k in f.get("stable_key", [])]

    results: list[dict] = []
    for d in diffs:
        if d.change_type.value not in want_changes:
            continue
        b = base_by_id.get(d.base_block_id) if d.base_block_id else None
        t = tgt_by_id.get(d.target_block_id) if d.target_block_id else None
        block = b or t
        if not block:
            continue
        path_low = (block.path or "").lower()
        key_up   = (block.stable_key or "").upper()

        if want_sections and not any(s in path_low for s in want_sections):
            continue
        if want_keys and key_up not in want_keys:
            continue

        results.append({
            "change_type": d.change_type.value,
            "stable_key":  block.stable_key,
            "block_type":  block.block_type.value,
            "path":        block.path,
            "page":        block.page_number,
            "before":      (b.text if b else None),
            "after":       (t.text if t else None),
            "field_changes": [
                {"field": fd.field, "before": fd.before, "after": fd.after}
                for fd in d.field_diffs
            ],
            "impact": d.impact_score,
        })

    results.sort(key=lambda r: (-r["impact"], r["change_type"]))
    return results


# ---------- LLM-assisted plan (used when deterministic returns nothing) ----------

PLAN_PROMPT = """\
Translate the user's question into a query plan. Output strict JSON only.
Schema:
  {
    "intent": "diff",
    "filters": {
      "change_type": ["ADDED"|"DELETED"|"MODIFIED"],
      "section":     [string],
      "stable_key":  [string]
    },
    "granularity": "block"|"field"|"summary"
  }

Question: {question}
"""


def llm_plan(nl: str) -> Optional[dict]:
    endpoint = os.getenv("AZURE_OPENAI_ENDPOINT")
    api_key  = os.getenv("AZURE_OPENAI_API_KEY")
    deploy   = os.getenv("AZURE_OPENAI_DEPLOYMENT")
    if not (endpoint and api_key and deploy):
        return None
    try:
        from openai import AzureOpenAI
        client = AzureOpenAI(api_key=api_key, azure_endpoint=endpoint, api_version="2024-08-01-preview")
        resp = client.chat.completions.create(
            model=deploy,
            messages=[
                {"role": "system", "content": "Output JSON only."},
                {"role": "user",   "content": PLAN_PROMPT.format(question=nl)},
            ],
            temperature=0.0,
            response_format={"type": "json_object"},
        )
        return json.loads(resp.choices[0].message.content or "{}")
    except Exception:
        return None


def query(
    nl: str,
    diffs: list[BlockDiff],
    base_blocks: list[Block],
    target_blocks: list[Block],
) -> list[dict]:
    plan = parse_query(nl)
    rows = execute_plan(plan, diffs, base_blocks, target_blocks)
    if rows:
        return rows
    # Fall back to LLM-derived plan
    plan = llm_plan(nl) or plan
    return execute_plan(plan, diffs, base_blocks, target_blocks)
