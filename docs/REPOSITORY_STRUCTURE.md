# Repository Structure

This repository is split into the runtime surfaces that ship the MVP:

```text
backend/              FastAPI API, ingestion, extraction, diffing, summaries, query, reports
backend/extraction/   Provider registry and extraction-quality helpers
frontend/             Vite + React Static Web App
infra/                Azure Bicep for Container Apps, Static Web Apps, Postgres, Blob, ACR
sql/                  Postgres schema for jobs, documents, blocks, tables, diffs, feedback
docs/                 Architecture, deployment, reusability, and repo-structure notes
samples/              Example pipeline outputs for regression/reference
.github/workflows/    CI/CD workflow definitions
```

## Active Entrypoints

- Backend API: `backend.api:app`
- Backend container: `Dockerfile`
- CLI smoke test: `python -m backend.run_cli --base old.pdf --target new.pdf --out ./out`
- Frontend app: `frontend/src/App.jsx`
- Frontend build: `cd frontend && npm run build`
- Azure deploy: `.github/workflows/azure-full-deploy.yml`

## Production Path

The active comparison path uses:

- `backend/document_ingest.py` for multi-format source handling.
- `backend/extractor_v2.py` for PDF/page/block extraction.
- `backend/table_extractor.py` and `backend/table_stitcher.py` for table handling.
- `backend/differ_v2.py` for anchor-aware semantic diffing.
- `backend/summarizer.py` for deterministic or Azure OpenAI-backed review summaries.
- `backend/query.py` for natural-language questions over comparison results.

Older prototype copies of the extractor, differ, and frontend app were removed so the repository has one obvious implementation path.
