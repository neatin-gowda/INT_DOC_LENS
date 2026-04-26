"""
Schema discovery — runs ONCE per supplier document family on the first upload,
then the resulting TemplateProfile is reused for every subsequent upload.

It looks at:
  * heading patterns (regex of frequently-occurring uppercase phrases)
  * stable-key candidates (cells that look like product codes)
  * recurring table headers (signatures we'll see again)

Optionally, an LLM is invoked once to validate the auto-detected
patterns and add semantic labels (e.g., "this code column appears to be
'order code'"). The LLM step is optional — without it, we still get a
working profile; with it, we get nicer field names.
"""
from __future__ import annotations

import json
import os
import re
from collections import Counter, defaultdict

from .extractor import _collect_lines, _extract_tables, _body_font_size, _is_heading
from .models import TemplateProfile


CODE_PATTERNS = [
    {"name": "order_code_3char",   "regex": r"^[0-9]{3}$"},                 # 765, 153, 863
    {"name": "order_code_3alpha",  "regex": r"^[0-9]{2}[A-Z]$"},             # 99H, 44T, 91V, 43L
    {"name": "package_code",       "regex": r"^[0-9]{3}[A-Z]$"},             # 221A, 374A, 564A
    {"name": "paint_code",         "regex": r"^[A-Z][A-Z0-9]$"},             # EA, G4, DB
    {"name": "body_code",          "regex": r"^[A-Z][0-9][A-Z]$"},           # E7A, E0R, E4D
]


def discover(pdf_path: str, supplier: str, family_name: str, use_llm: bool = False) -> TemplateProfile:
    lines = _collect_lines(pdf_path)
    body = _body_font_size(lines)

    # Heading patterns
    headings = [ln.text for ln in lines if _is_heading(ln, body)]
    heading_counter = Counter(headings)
    common_headings = [h for h, c in heading_counter.most_common(50) if len(h) >= 3]
    section_patterns = list({_to_loose_regex(h) for h in common_headings[:25]})

    # Sample table headers — used to recognize this template later
    tables_by_page = _extract_tables(pdf_path)
    header_signatures: list[dict] = []
    seen = set()
    for tbls in tables_by_page.values():
        for tbl in tbls:
            sig = "|".join(h.lower() for h in tbl["header"] if h)
            if sig and sig not in seen:
                seen.add(sig)
                header_signatures.append({
                    "header": tbl["header"],
                    "n_columns": len(tbl["header"]),
                })

    # Test which code patterns occur
    cells: list[str] = []
    for tbls in tables_by_page.values():
        for tbl in tbls:
            for row in tbl["rows"]:
                cells.extend(c.strip() for c in row if c)

    active_patterns: list[dict] = []
    for pat in CODE_PATTERNS:
        rx = re.compile(pat["regex"])
        hits = sum(1 for c in cells if rx.fullmatch(c))
        if hits >= 3:
            active_patterns.append({**pat, "scope_path": "/", "evidence_count": str(hits)})

    profile = TemplateProfile(
        supplier=supplier,
        family_name=family_name,
        section_heading_patterns=section_patterns,
        stable_key_patterns=active_patterns,
        table_signatures=header_signatures[:30],
        notes=f"auto-discovered from {pdf_path}",
    )

    if use_llm:
        profile = _llm_refine(profile)

    return profile


def _to_loose_regex(s: str) -> str:
    """Turn a literal heading into a regex that tolerates trademark / spacing variation."""
    s = re.escape(s)
    s = s.replace(r"\ ", r"\s+")
    s = s.replace(r"™", r"™?").replace(r"®", r"®?")
    return f"^{s}$"


def _llm_refine(profile: TemplateProfile) -> TemplateProfile:
    endpoint = os.getenv("AZURE_OPENAI_ENDPOINT")
    api_key  = os.getenv("AZURE_OPENAI_API_KEY")
    deploy   = os.getenv("AZURE_OPENAI_DEPLOYMENT")
    if not (endpoint and api_key and deploy):
        return profile
    try:
        from openai import AzureOpenAI
        client = AzureOpenAI(api_key=api_key, azure_endpoint=endpoint, api_version="2024-08-01-preview")
        prompt = (
            "You are calibrating a structured-document parser for a recurring supplier "
            "publication. Given the auto-detected patterns below, suggest semantic labels "
            "and prune any obvious false positives. Output JSON with keys "
            "{'stable_key_patterns':[...], 'section_heading_patterns':[...], 'notes':str}.\n\n"
            f"Auto-detected:\n{profile.model_dump_json(indent=2)}"
        )
        resp = client.chat.completions.create(
            model=deploy,
            messages=[{"role":"system","content":"Output JSON only."},{"role":"user","content":prompt}],
            temperature=0.0,
            response_format={"type": "json_object"},
        )
        data = json.loads(resp.choices[0].message.content or "{}")
        if "stable_key_patterns" in data:
            profile.stable_key_patterns = data["stable_key_patterns"]
        if "section_heading_patterns" in data:
            profile.section_heading_patterns = data["section_heading_patterns"]
        if "notes" in data:
            profile.notes = data["notes"]
    except Exception as exc:
        profile.notes += f" (LLM refine failed: {exc})"
    return profile
