# Altrai

Altrai is a unified enterprise AI workspace for governed chat, document intelligence, reusable skills, tools, plugins, and role-scoped business workflows.

The current implementation focuses on the Document Intelligence capability: comparing two versions of a supplier specification PDF and answering "what changed?"

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
  api.py               FastAPI app setup, middleware, health, and job listing
  routers/             Modular API endpoints by workflow
  api_schemas.py       FastAPI request/response models
  ingestion/source_documents.py   Multi-format source orchestration
  ingestion/parsers/   DOCX, Excel/XLSB, CSV/TSV, OCR, and conversion helpers
  extraction/pdf_extractor.py      PDF/page/block extraction
  extraction/table_extractor.py   Robust table extraction
  extraction/table_stitcher.py    Cross-page table stitching
  comparison/diff_engine.py         Anchor-aware diff engine
  services/table_tools.py           Table previews and selected-column comparison
  tool_registry.py      Reusable tool metadata
  jobs/queue.py        Database-backed worker queue for scale-out containers
  summarizer.py        LLM or deterministic summary table
  query.py             NL query interpreter
  models.py            Canonical Pydantic models
  run_cli.py           Offline CLI smoke-test runner
  extraction/          Provider registry and quality helpers
sql/
  schema.sql           Postgres + pgvector schema
frontend/
  src/App.jsx          React app shell and workflow state
  src/components/      Upload, jobs, viewer, tables, chat, feedback, extraction
infra/
  main.bicep           Azure infrastructure
docs/
  ARCHITECTURE.md      Full design doc — read this
  AI_WORKSPACE_ROADMAP.md Unified AI workspace direction
  AZURE_GITHUB_DEPLOYMENT.md  GitHub Actions deploy
  REPOSITORY_STRUCTURE.md     Active repo map
samples/
  ford_bronco_run.json Sample output from running on the two attached PDFs
requirements.txt
Dockerfile
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

# Frontend
cd frontend
npm install
npm run dev
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
