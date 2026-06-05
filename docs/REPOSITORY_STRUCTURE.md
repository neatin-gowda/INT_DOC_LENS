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
docs/                    Architecture, deployment, reusability, and repo-structure notes
samples/                 Example pipeline outputs for regression/reference
.github/workflows/       CI/CD workflow definitions
```

## Backend Layout

```text
backend/
  api.py                 FastAPI surface. This is still too large and should keep shrinking.
  api_schemas.py         FastAPI request/response models.
  models.py              Canonical domain models: Block, BlockDiff, SummaryRow, etc.

  ingestion/
    source_documents.py  Upload/source handling, conversion to PDF, native DOCX/XLSX/CSV extraction.

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

  persistence.py         Database writes for documents, blocks, diffs, feedback, tables.
  db.py                  Database connection helper.
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

- `backend/ingestion/source_documents.py` for multi-format source handling.
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

These files are still intentionally called out because they are too large for
comfortable maintenance:

- `backend/api.py`: currently owns API routes, job orchestration, native-page shaping, feedback, and reports. Split into routers next.
- `frontend/src/App.jsx`: currently owns most UI components and helper functions. Split by workspace (`jobs`, `upload`, `extraction`, `comparison`, `tables`, `reports`) next.
- `backend/ingestion/source_documents.py`: owns conversion plus native DOCX/spreadsheet/image extraction. Split provider implementations after route/service extraction.

Older prototype copies of the extractor, differ, and frontend app were removed so the repository has one obvious implementation path.
