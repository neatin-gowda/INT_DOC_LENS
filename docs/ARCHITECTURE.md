# Spec-Diff: Reusable Supplier Document Comparison Platform

## Problem statement

Suppliers (e.g., Ford) release product/model spec PDFs each year. We need to:

1. Ingest two versions of the same document family.
2. Surface every change — additions, deletions, modifications — with **zero content missed**.
3. Render a side-by-side visual diff (red/yellow/green, like GitHub).
4. Allow ad-hoc querying ("what changed in the Sasquatch Package on Big Bend?").
5. Produce a structured summary: `Feature | Change | Seek Clarification`.
6. Work on **any** supplier template, not just Ford Bronco. Template structure is unknown in advance.
7. Persist every upload + extraction so future comparisons can reference past baselines.

## Key design decisions (and why)

### 1. Three-layer extraction, not one
A single extraction pass cannot satisfy both "render the PDF visually" and "answer SQL queries against it." We split:

- **Layer A — Page render**: Pages converted to images for the side-by-side viewer. Pixel-precise; never the source of truth for content.
- **Layer B — Text spans with coordinates**: Every word + its bounding box on every page. Source for the visual highlight overlay (which words changed, where).
- **Layer C — Semantic blocks**: Logical units (sections, tables, list items, equipment-group rows). This is what gets diffed semantically and stored for querying.

Layer C is the hard part and where most platforms fail.

### 2. Stable identifiers > line numbers
Line-by-line text diff (`difflib`) on these PDFs produces noise — content reflows year to year. The fix: identify **stable keys** in the document and align by key, not by position.

For Ford Bronco specifically:
- **Series** name (`Big Bend™`, `Badlands™`, `Wildtrak™`) — stable.
- **Order codes** — stable: `765` = Sasquatch, `99H` = 2.3L engine, `43L` = Carbonized Gray Hard Top, `44T` = 10-Speed Auto. These appear in 2024 and 2025 and mean the same thing.
- **Package codes** — stable: `221A`, `321A`, `374A`.
- **Paint codes** — stable: `EA`, `G4`, `DB`.

These form the join keys for entity-level diffing. The extractor learns them automatically (see §4 — Schema discovery), but the *concept* of "every row in a structured doc has a key, find it" is the reusable principle.

### 3. JSON document model, not rigid SQL tables
Different suppliers produce different templates. Defining a fixed schema for each is unsustainable. Instead:

- Every extracted document becomes a **tree of typed blocks** (`Section`, `Table`, `KeyValueList`, `Paragraph`, `Figure`).
- Each block has a `path` (e.g., `bronco/big_bend/equipment_group/mid_package`) and a `content_hash`.
- Stored as JSON in Postgres `JSONB` (or Cosmos DB if Azure preference).
- Queries use JSON path operators + a thin SQL projection layer for the most common access patterns (the `comparison_diff` table).

This is the "schema-on-read" pattern. Cost: slightly slower ad-hoc queries vs. native columns. Benefit: zero schema migrations when a new supplier template arrives.

### 4. Schema discovery — automatic, not hand-coded
For each new supplier/document family, the system runs a short **discovery pass** on the first upload:

1. Detect repeating heading patterns (font size, style, position) → section hierarchy.
2. Detect tables (pdfplumber or unstructured.io) and infer header row.
3. Detect key-value patterns (`Note:`, `Order Code:`, bullet lists with codes).
4. LLM is asked once per document family: "Given these candidate structural patterns and 3 sample sections, which fields look like stable identifiers?" — output is a small JSON config saved as the **template profile**.
5. The template profile is reused on subsequent uploads of the same family — fast and deterministic. It can be re-validated/updated if the document signature drifts.

Template profiles are stored in the DB and versioned. A user can edit them via a small admin UI if the auto-discovery gets it wrong.

### 5. Diff is computed at multiple granularities, simultaneously
- **Block diff** — for each block path that exists in either version: `ADDED` / `DELETED` / `MODIFIED` / `UNCHANGED`.
- **Field diff** — within `MODIFIED` blocks, which sub-fields changed (e.g., row `765 / Big Bend / Standard Package`: column `Availability` changed from `O` to no longer present).
- **Token diff** — for `MODIFIED` paragraphs, the GitHub-style word-level diff used for the visual overlay.

All three are computed and stored. The UI picks the granularity it needs.

### 6. LLM is used selectively, not as a hammer
LLMs are unreliable for: bulk extraction (hallucinations), exact code matching, table structure. They are excellent for: ambiguous semantic alignment, summarization, NL→query.

We use the LLM at exactly four points:
- **Schema discovery** (once per template family).
- **Fuzzy block alignment** when deterministic key-matching gives multiple candidates (rare).
- **Summary generation** (`Feature / Change / Seek Clarification`).
- **NL query → JSON path/SQL** (the chat interface).

Everything else is deterministic Python. This keeps the system auditable, cheap, and reproducible.

### 7. "Seek Clarification" column is not magic
The third column in the summary is generated by prompting the LLM to flag changes that:
- Lack stated rationale in the new doc.
- Conflict with patterns in older docs (e.g., feature was deleted but it's in the headline graphics).
- Reference late-availability or TBD items.
- Show ambiguous wording ("now optional" without saying what package previously included it).

The prompt is in `backend/prompts/clarification_prompt.txt` and is tunable.

## Component map

```
        Upload (v1.pdf, v2.pdf)
                │
                ▼
   ┌──────────────────────────────────────┐
   │  Ingestion service                    │
   │  - PDF → page images (Layer A)        │
   │  - PDF → text spans + bbox (Layer B)  │
   │  - PDF → block tree   (Layer C)       │
   └──────────────────────────────────────┘
                │
                ▼
   ┌──────────────────────────────────────┐
   │  Schema discovery (once per family)   │
   │  → template_profile in DB             │
   └──────────────────────────────────────┘
                │
                ▼
   ┌──────────────────────────────────────┐
   │  Diff engine                          │
   │  - Key-aligned block diff             │
   │  - Field-level diff in tables         │
   │  - Token-level diff in paragraphs     │
   │  - Persists to comparison_runs +      │
   │    block_diffs in Postgres            │
   └──────────────────────────────────────┘
                │
                ▼
   ┌──────────────────────────────────────┐
   │  Summarization service (LLM)          │
   │  - Pulls high-impact diffs            │
   │  - Generates Feature/Change/Clarify   │
   └──────────────────────────────────────┘
                │
                ▼
   ┌──────────────────────────────────────┐
   │  API (FastAPI)                        │
   │  /upload  /compare  /diff/{run_id}    │
   │  /summary /query  /pages/{doc}/{n}    │
   └──────────────────────────────────────┘
                │
                ▼
   ┌──────────────────────────────────────┐
   │  Web UI (React)                       │
   │  - Side-by-side PDF viewer            │
   │  - Word-level highlight overlay       │
   │  - Summary table                      │
   │  - Chat box for NL queries            │
   └──────────────────────────────────────┘
```

## Azure deployment topology

| Concern | Service |
|---|---|
| Compute (FastAPI) | Azure Container Apps (or App Service) |
| Page rendering jobs | Azure Container Apps Job, queue-triggered |
| Document storage (raw PDFs + page images) | Azure Blob Storage |
| Structured store (blocks, diffs, templates) | Azure Database for PostgreSQL — Flexible Server (uses JSONB heavily) |
| LLM | Azure OpenAI (GPT-4o or equivalent) |
| Vector embeddings (for fuzzy matching, NL query routing) | pgvector extension on the same Postgres |
| Job queue | Azure Service Bus (or Postgres-based queue for simplicity) |
| Auth | Azure AD / Entra ID |
| CI/CD | GitHub Actions → ACR → Container Apps |

Why pgvector on the same Postgres rather than a separate vector DB: the embedding count for spec docs is small (10s of thousands per family), there's no need for a dedicated service, and co-locating with the relational data simplifies joins ("find blocks similar to X *that also belong to series Y*").

## Why this is reusable

- **Nothing in the diff engine is Ford-specific.** It only knows about: blocks, paths, optional stable keys, content hashes.
- **Schema discovery** runs the same way for any new template.
- **The summary prompt** is the same prompt — only the input data shape changes.
- **The UI** is generic: it renders whatever block tree comes out of extraction.

The only Ford-specific artifact in the whole system is the *learned template profile* for `ford_bronco_order_guide`, which is a JSON file in the database. A new supplier creates a new template profile entry; no code changes.

## Accuracy & coverage guarantees

To meet "do not miss any content":

1. **Coverage check**: After block extraction, sum of all block character counts must equal total PDF text length within ±0.5%. Pages that fail this are flagged for re-extraction with a different strategy (rasterize + vision LLM as fallback for the failed pages only).
2. **Round-trip check**: Reconstructed text from the block tree is shown to the user as a preview — if anything is missing visually, it's caught before the diff runs.
3. **Diff totality check**: Every block in v1 is either matched, marked DELETED, or in the unmatched bucket (which raises a warning). Same for v2 / ADDED. No silent drops.
4. **Bbox-anchored visual diff**: Even if semantic extraction misses something, the page-image diff catches it. The UI shows both — they cross-validate.

## What's in this repo

```
backend/
  extractor.py          # Layer A/B/C extraction
  schema_discovery.py   # Auto-detect template structure
  differ.py             # Three-granularity diff engine
  summarizer.py         # LLM-driven summary table
  query.py              # NL → JSONB path / SQL
  api.py                # FastAPI app
  models.py             # Pydantic models for blocks, diffs
sql/
  schema.sql            # Postgres + pgvector schema
frontend/
  app.jsx               # Single-page React app
docs/
  ARCHITECTURE.md       # this file
  AZURE_DEPLOYMENT.md   # deployment runbook
  PROMPTS.md            # all LLM prompts, versioned
samples/
  ford_bronco_run.json  # output of running the pipeline on the two attached PDFs
```
