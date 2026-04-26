"""
Summarizer — turns the raw block-level diff into the user-facing
"Feature | Change | Seek Clarification" table using an LLM.

Design notes:
  * Only HIGH-SIGNAL diffs are sent to the LLM. We define "high signal"
    as: any diff whose blocks have a stable_key (codes are stable,
    paragraphs are not) OR section-level adds/deletes OR diffs above
    impact 0.6.
  * The LLM is asked for STRICT JSON output and we validate against the
    SummaryRow schema before returning.
  * Prompt is in `prompts/summary_prompt.txt` and is versioned.
  * Falls back to deterministic "best effort" rows if no LLM is configured.

The Azure OpenAI integration is a thin wrapper — swap to OpenAI API or
any other provider by reimplementing `_call_llm`.
"""
from __future__ import annotations

import json
import os
import re
from pathlib import Path
from typing import Optional

from .models import (
    Block,
    BlockDiff,
    ChangeType,
    SummaryRow,
)


SUMMARY_PROMPT = """\
You are an expert product analyst comparing two versions of a supplier's
product specification document. You will be given a JSON list of changes
already detected between version A (older) and version B (newer).

Your job is to produce a concise table of the most important changes for
a product manager to review. The table has exactly three columns:

  feature             - the product feature, package, or item that changed
                        (use the supplier's own terminology, including
                        codes when present, e.g., "Sasquatch Package (765)")
  change              - a one-sentence factual description of the change
                        (added / removed / modified — and what specifically)
  seek_clarification  - a one-sentence question to ask the supplier IF
                        anything is ambiguous, contradictory, or appears
                        to be a delay/late-availability signal. If the
                        change is fully clear, write "None".

Rules:
  - Output STRICT JSON: a list of objects with keys exactly
    {"feature","change","seek_clarification"}. No prose, no markdown.
  - Group related row-level changes into one row when they describe the
    same product feature (e.g., "Wildtrak series deleted" rather than
    listing every Wildtrak row separately).
  - Do not invent details that are not in the input.
  - Cap the output at the most important 30 rows.
  - Be specific. "Engine offering changed" is bad. "2.7L EcoBoost V6
    (99P) is no longer available on Big Bend; only 2.3L (99H) remains"
    is good.

Input JSON:
{evidence_json}
"""


def _select_evidence(
    diffs: list[BlockDiff],
    base_blocks: list[Block],
    target_blocks: list[Block],
    max_items: int = 200,
) -> list[dict]:
    """
    Return a JSON-serializable list of high-signal changes for the LLM.
    Limits volume to keep prompt within budget.
    """
    base_by_id = {b.id: b for b in base_blocks}
    tgt_by_id = {b.id: b for b in target_blocks}

    rows: list[tuple[float, dict]] = []
    for d in diffs:
        if d.change_type == ChangeType.UNCHANGED:
            continue
        b = base_by_id.get(d.base_block_id) if d.base_block_id else None
        t = tgt_by_id.get(d.target_block_id) if d.target_block_id else None
        block = b or t
        if block is None:
            continue

        has_key = bool(block.stable_key)
        is_section = block.block_type.value == "section"
        important = has_key or is_section or d.impact_score >= 0.6

        if not important:
            continue

        rec = {
            "change_type": d.change_type.value,
            "stable_key": block.stable_key,
            "block_type": block.block_type.value,
            "path": block.path,
            "page": block.page_number,
        }
        if b:
            rec["before"] = {
                "text": (b.text or "")[:400],
                "payload": _trim_payload(b.payload),
            }
        if t:
            rec["after"] = {
                "text": (t.text or "")[:400],
                "payload": _trim_payload(t.payload),
            }
        if d.field_diffs:
            rec["field_changes"] = [
                {"field": fd.field, "before": str(fd.before)[:120], "after": str(fd.after)[:120]}
                for fd in d.field_diffs[:6]
            ]
        rows.append((d.impact_score, rec))

    rows.sort(key=lambda kv: -kv[0])
    return [r for _, r in rows[:max_items]]


def _trim_payload(payload: dict) -> dict:
    out: dict = {}
    for k, v in payload.items():
        if isinstance(v, str):
            out[k] = v[:200]
        elif isinstance(v, list):
            out[k] = [str(x)[:200] for x in v[:8]]
        else:
            out[k] = v
    return out


# ---------- LLM call ----------

def _call_llm(prompt: str) -> str:
    """
    Calls Azure OpenAI if configured, otherwise raises NotConfigured.
    Required env vars:
      AZURE_OPENAI_ENDPOINT
      AZURE_OPENAI_API_KEY
      AZURE_OPENAI_DEPLOYMENT (the chat deployment name)
    """
    endpoint = os.getenv("AZURE_OPENAI_ENDPOINT")
    api_key  = os.getenv("AZURE_OPENAI_API_KEY")
    deploy   = os.getenv("AZURE_OPENAI_DEPLOYMENT")
    if not (endpoint and api_key and deploy):
        raise RuntimeError("Azure OpenAI not configured (set AZURE_OPENAI_*).")

    from openai import AzureOpenAI
    client = AzureOpenAI(
        api_key=api_key,
        azure_endpoint=endpoint,
        api_version="2024-08-01-preview",
    )
    resp = client.chat.completions.create(
        model=deploy,
        messages=[
            {"role": "system", "content": "You output strict JSON only."},
            {"role": "user",   "content": prompt},
        ],
        temperature=0.1,
        response_format={"type": "json_object"},
    )
    return resp.choices[0].message.content or "[]"


# ---------- main entry ----------

def summarize(
    diffs: list[BlockDiff],
    base_blocks: list[Block],
    target_blocks: list[Block],
    use_llm: bool = True,
) -> list[SummaryRow]:
    evidence = _select_evidence(diffs, base_blocks, target_blocks)

    if use_llm:
        try:
            prompt = SUMMARY_PROMPT.format(
                evidence_json=json.dumps(evidence, indent=2, default=str)
            )
            raw = _call_llm(prompt)
            data = json.loads(raw)
            # The model may wrap the array in {"rows": [...]} — accept both
            if isinstance(data, dict):
                for k in ("rows", "summary", "changes"):
                    if k in data and isinstance(data[k], list):
                        data = data[k]
                        break
            if not isinstance(data, list):
                raise ValueError("expected JSON list")
            return [SummaryRow(**r) for r in data]
        except Exception as exc:
            # fall through to deterministic fallback
            print(f"[summarizer] LLM path failed ({exc}); falling back to heuristic.")

    return _heuristic_summary(evidence)


def _heuristic_summary(evidence: list[dict]) -> list[SummaryRow]:
    """
    Deterministic fallback when no LLM is available.
    Produces one row per stable_key-bearing change, plus section adds/deletes.
    """
    rows: list[SummaryRow] = []
    for ev in evidence[:30]:
        ct = ev["change_type"]
        key = ev.get("stable_key") or ""
        before = ev.get("before", {}).get("text", "")
        after  = ev.get("after",  {}).get("text", "")
        if ct == "ADDED":
            feature = (after.splitlines()[0] if after else key) or "Unidentified addition"
            change  = f"Added in new version{(' (' + key + ')') if key else ''}."
            clarify = "Confirm intended availability and any prerequisite packages."
        elif ct == "DELETED":
            feature = (before.splitlines()[0] if before else key) or "Unidentified removal"
            change  = f"Removed from new version{(' (' + key + ')') if key else ''}."
            clarify = "Confirm whether removal is permanent and identify replacement, if any."
        else:
            feature = (after.splitlines()[0] if after else (before.splitlines()[0] if before else key)) or "Modified item"
            change  = "Content changed between versions."
            fcs = ev.get("field_changes") or []
            if fcs:
                change = "; ".join(f"{fc['field']}: {fc['before']!s} -> {fc['after']!s}" for fc in fcs[:2])
            clarify = "None"
        rows.append(SummaryRow(feature=feature, change=change, seek_clarification=clarify))
    return rows
