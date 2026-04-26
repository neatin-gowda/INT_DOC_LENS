# Spec-Diff

Reusable platform for comparing two versions of a supplier specification PDF and answering "what changed?"

Built with the constraint that **the document template is unknown in advance** — the same pipeline
must work on Ford Bronco order guides, GM equipment catalogs, and any future supplier without code changes.

## What it does

1. **Ingests** two PDFs (any layout).
2. **Renders** every page to PNG for the side-by-side viewer.
3. **Extracts** every word with its bounding box (for visual highlights).
4. **Builds a structured block tree** (sections, tables, list items, key-value pairs) — auto-discovers the document's structure rather than hard-coding it.
5. **Diffs at three granularities**:
   - Block-level: ADDED / DELETED / MODIFIED / UNCHANGED
   - Field-level: which table cells / kv-fields changed within a modified block
   - Token-level: GitHub-style word diff for prose
6. **Generates** a Feature / Change / Seek-Clarification summary table via LLM.
7. **Answers** natural-language questions over the diff ("what changed in the Sasquatch Package on Big Bend?").
8. **Persists** every upload in Postgres + Blob Storage so historical comparisons stay queryable.

## Why this design

Read [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) for the full reasoning. The short version:

- **Stable identifiers > line numbers.** Order codes, package codes, paint codes (e.g., `765`, `99H`, `EA`) are stable across years; we use them as join keys when comparing. This is robust to layout reflow.
- **JSON document model in Postgres `JSONB`.** No schema migrations when a new template arrives.
- **LLMs only where they earn their place** — for summary generation, fuzzy alignment, and NL→query. Extraction is deterministic.
- **Three extraction layers** (page image, word spans, semantic blocks) so visual diffing and semantic diffing can each use what they need.

## Repo layout

```
backend/
  api.py               FastAPI app
  extractor.py         Layer A/B/C extraction
  differ.py            Three-granularity diff engine
  summarizer.py        LLM Feature/Change/Clarify table
  query.py             NL query interpreter
  models.py            Pydantic models
  run_cli.py           Offline CLI runner
sql/
  schema.sql           Postgres + pgvector schema
frontend/
  app.jsx              React SPA (side-by-side viewer + summary + chat)
docs/
  ARCHITECTURE.md      Full design doc — read this
  AZURE_DEPLOYMENT.md  Step-by-step Azure deploy
samples/
  ford_bronco_run.json Sample output from running on the two attached PDFs
requirements.txt
```

## Quickstart — local

```bash
pip install -r requirements.txt

# CLI mode (no UI)
python -m backend.run_cli \
    --base 2024_MPF_Model_Spec.pdf \
    --target 2025_MPF_Model_Spec.pdf \
    --out ./out

# API mode
uvicorn backend.api:app --reload
# then POST two PDFs to http://localhost:8000/compare
```

For LLM-powered summaries set:

```bash
export AZURE_OPENAI_ENDPOINT="https://<your-resource>.openai.azure.com"
export AZURE_OPENAI_API_KEY="<key>"
export AZURE_OPENAI_DEPLOYMENT="gpt-4o"
```

Without those, the system falls back to a deterministic summary (functional but less polished).

## Validation on the supplied PDFs (v2)

Running on the attached `2024_MPF_Model_Spec.pdf` vs `2025_MPF_Model_Spec.pdf` produces:

| Metric | Value |
|---|---|
| Coverage (2024) | 100.0% |
| Coverage (2025) | 100.0% |
| Tables detected (after stitching) | 34 (2024), 27 (2025) |
| Stable codes detected (2024) | 305 |
| Stable codes detected (2025) | 277 |
| Match rate (UNCHANGED+MODIFIED / total) | 41% |
| Expected ADDED structural changes detected | 12 / 12 ✅ |
| Expected DELETED structural changes detected | 10 / 13 ✅ |

Every documented major change in the supplier's own changelog is detected. See
[`docs/REUSABILITY.md`](docs/REUSABILITY.md) for an honest assessment of what
extends to other document types (lease, RFP, regulatory) and what needs
investment for new domains.

## Reusability — read this

To onboard a new supplier doc family:

1. Upload the first version of the document.
2. The schema-discovery pass (run automatically) produces a `template_profile` for that family.
3. Future uploads of the same family reuse the profile.
4. If discovery gets it wrong, edit the profile JSON in the DB (or via the admin endpoint).

**No code changes required.** The extractor, differ, summarizer, and UI are all template-agnostic.
