"""
CLI runner — exercises the entire pipeline on two local PDFs, writes
all outputs to a directory, and prints stats. Useful for:
  * smoke-testing changes to extractor / differ
  * generating gold-standard outputs for regression tests
  * running the comparison without standing up the web UI

Usage:
    python -m spec_diff.run_cli --base v1.pdf --target v2.pdf --out ./out
"""
from __future__ import annotations

import argparse
import json
from pathlib import Path

from .differ import diff_blocks, diff_stats
from .extractor import coverage_pct, extract_blocks, render_pages
from .summarizer import summarize


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("--base",   required=True, help="path to old PDF")
    ap.add_argument("--target", required=True, help="path to new PDF")
    ap.add_argument("--out",    required=True, help="output directory")
    ap.add_argument("--use-llm", action="store_true", help="enable LLM summary (needs Azure OpenAI env vars)")
    args = ap.parse_args()

    out = Path(args.out)
    out.mkdir(parents=True, exist_ok=True)

    print("Rendering pages…")
    base_imgs   = render_pages(args.base,   str(out / "pages_base"))
    target_imgs = render_pages(args.target, str(out / "pages_target"))
    print(f"  base: {len(base_imgs)} pages, target: {len(target_imgs)} pages")

    print("Extracting blocks…")
    bb = extract_blocks(args.base)
    tb = extract_blocks(args.target)
    cov_b = coverage_pct(args.base,   bb)
    cov_t = coverage_pct(args.target, tb)
    print(f"  base: {len(bb)} blocks  ({cov_b:.1f}% coverage)")
    print(f"  target: {len(tb)} blocks  ({cov_t:.1f}% coverage)")

    print("Diffing…")
    diffs = diff_blocks(bb, tb)
    stats = diff_stats(diffs)
    print(f"  {stats}")

    print("Summarizing…")
    summary = summarize(diffs, bb, tb, use_llm=args.use_llm)

    base_by_id = {b.id: b for b in bb}
    tgt_by_id  = {b.id: b for b in tb}

    diff_records = []
    for d in diffs:
        b = base_by_id.get(d.base_block_id) if d.base_block_id else None
        t = tgt_by_id.get(d.target_block_id) if d.target_block_id else None
        block = b or t
        if not block: continue
        diff_records.append({
            "change_type": d.change_type.value,
            "stable_key":  block.stable_key,
            "block_type":  block.block_type.value,
            "path":        block.path,
            "page_base":   b.page_number if b else None,
            "page_target": t.page_number if t else None,
            "before":      b.text if b else None,
            "after":       t.text if t else None,
            "field_diffs": [fd.model_dump() for fd in d.field_diffs],
            "similarity":  d.similarity,
            "impact":      d.impact_score,
        })

    payload = {
        "base":   args.base,
        "target": args.target,
        "stats":  stats,
        "coverage": {"base": cov_b, "target": cov_t},
        "summary": [s.model_dump() for s in summary],
        "diffs":   diff_records,
    }
    with (out / "result.json").open("w") as f:
        json.dump(payload, f, indent=2, default=str)
    print(f"Wrote {out / 'result.json'}")


if __name__ == "__main__":
    main()
