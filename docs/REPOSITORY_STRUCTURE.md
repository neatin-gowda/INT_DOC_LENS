# Repository Structure

This repository is organized around the document-intelligence pipeline, not
around a single file format. PDF, Word, image, spreadsheet, and CSV/TSV inputs
should all flow through the same high-level stages:

```text
upload -> source normalization -> format extraction -> semantic enrichment
       -> comparison/query/reporting -> persistence/API/UI
```

## Top-Level Layout

```text
backend/                 Python API and document-processing pipeline
frontend/                Vite + React Static Web App
infra/                   Azure Bicep for Container Apps, Static Web Apps, Postgres, Blob, ACR
sql/                     Postgres schema for jobs, documents, blocks, tables, diffs, feedback
docs/                    Architecture, AI workspace roadmap, deployment, reusability, and repo-structure notes
samples/                 Example pipeline outputs for regression/reference
.github/workflows/       CI/CD workflow definitions
```

## Backend Layout

```text
backend/
  api.py                 FastAPI app setup, middleware, health, and job listing.
  api_schemas.py         FastAPI request/response models.
  api_helpers.py         Shared route helpers, run state, native-page shaping, and DB health.
  models.py              Canonical domain models: Block, BlockDiff, SummaryRow, etc.

  ingestion/
    source_documents.py  Upload/source handling and parser orchestration.
    parsers/             Format-specific DOCX, Excel/XLSB, CSV/TSV, OCR, and conversion helpers.

  extraction/
    pdf_extractor.py     PDF block extraction, page rendering, OCR fallback, anchor tagging.
    table_extractor.py   Table detection strategies for PDF pages.
    table_stitcher.py    Cross-page table stitching.
    runner.py            Deterministic enrichment over extracted blocks.
    schema.py            Local semantic classifiers, value typing, template fingerprinting.
    quality.py           Extraction quality scoring.
    registry.py          Available local/optional extraction providers.
    providers/           Provider metadata and future provider boundaries.

  comparison/
    diff_engine.py       Anchor-aware block/field/token diffing.

  services/
    table_tools.py       Table discovery, viewing, row matching, and selected-column comparison helpers.

  tool_registry.py       Reusable tool metadata for UI, automation, and future MCP-style adapters.

  routers/
    comparison.py        Compare upload, run metadata, diff, pages, overlays, and native views.
    extraction.py        Single-document extraction runs, blocks, tables, images, and JSON output.
    feedback.py          Reviewer feedback and summary enhancement.
    queries.py           Natural-language question endpoint.
    reports.py           PDF report and AI summary PDF endpoints.
    tables.py            Table list, table view, selected-table comparison, and table report.
    tools.py             Tool discovery endpoint.

  jobs/
    queue.py             Database-backed worker queue for ACA scale-out safety.

  persistence.py         Database writes for documents, blocks, diffs, feedback, tables.
  db.py                  Database connection pool helper.
  query.py               Natural-language question handling over comparison output.
  summarizer.py          Deterministic and Azure OpenAI-backed review summaries.
  report.py              PDF report generation.
  job_store.py           Durable or local job state adapter.
```

## Active Entrypoints

- Backend API: `backend.api:app`
- Backend container: `Dockerfile`
- CLI smoke test: `python -m backend.run_cli --base old.pdf --target new.pdf --out ./out`
- Frontend app: `frontend/src/App.jsx`
- Frontend build: `cd frontend && npm run build`
- Azure deploy: `.github/workflows/azure-full-deploy.yml`

## Production Path

The active comparison path is:

- `backend/ingestion/source_documents.py` and `backend/ingestion/parsers/` for multi-format source handling.
- `backend/extraction/pdf_extractor.py` for PDF/page/block extraction.
- `backend/extraction/table_extractor.py` and `backend/extraction/table_stitcher.py` for table handling.
- `backend/comparison/diff_engine.py` for anchor-aware semantic diffing.
- `backend/services/table_tools.py` for table discovery, previews, and selected-column comparison.
- `backend/summarizer.py` for deterministic or Azure OpenAI-backed review summaries.
- `backend/query.py` for natural-language questions over comparison results.

## Naming Rules

- Avoid version suffixes like `_v2` for active code. Use the domain name instead:
  `comparison/diff_engine.py`, `extraction/pdf_extractor.py`.
- Keep format-specific code under `backend/extraction/` or `backend/ingestion/`.
- Keep business interpretation and semantic shaping separate from raw extraction.
- Keep API request/response models close to routers while domain models stay in `models.py`.
- Keep optional provider integrations behind provider modules instead of mixing them into API handlers.

## Current Refactor Targets

The main production boundaries are now in place. The remaining improvements are
smaller and should stay focused:

- `backend/api_helpers.py`: move native-page rendering helpers into a dedicated service when the viewer evolves again.
- `backend/services/table_tools.py`: keep improving table intelligence here instead of leaking table heuristics into routers.
- `frontend/src/components/common.jsx`: split broad display helpers from extraction normalization helpers if it keeps growing.
- `frontend/src/components/tables.jsx`: keep the default workflow simple and place nested-header/manual-column tuning behind advanced controls.

Older prototype copies of the extractor, differ, and frontend app were removed so the repository has one obvious implementation path.
