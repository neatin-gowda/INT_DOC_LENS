# Unified AI Workspace Roadmap

This product should evolve from a document comparison MVP into a single
organization AI workspace. The goal is not to keep adding standalone screens,
but to expose reusable tools, skills, document stores, and automation workflows
through one governed interface.

## Product Direction

The primary surface should feel like a cloud desktop for document intelligence:

- A persistent left navigation for workspaces, tools, job history, sources, and
  administration.
- A central work area that changes by task: compare, extract, review, generate,
  search, or manage sources.
- A right or bottom assistant panel for natural-language interaction with the
  current document, job, table, or workspace.
- A quick upload area that supports drag-and-drop for baseline/revised files or
  single-document extraction without forcing users through multiple pages.
- Role-aware views so departments see the tools, sources, and templates they are
  allowed to use.

The UI should make the simple path obvious and keep expert controls available
only when needed.

## Default User Flows

### Quick Compare

1. User drops a baseline document and a revised document.
2. The system starts a background job and shows live status.
3. The work area opens a side-by-side review with visual preview, semantic
   summary, table review, and report export.
4. The assistant can answer questions against only this run unless the user
   expands scope.

### Quick Extract

1. User drops one or more files.
2. The system extracts text, tables, images, metadata, key-values, and warnings.
3. The work area shows structured output with downloadable JSON/report options.
4. The assistant can answer questions about the extracted files.

### Ask Across Sources

1. User chooses a document collection, department source, or previous job.
2. The assistant routes the question to the right RAG store and allowed tools.
3. Responses cite source documents and expose tool calls/cost where appropriate.

### Table Review

1. User selects a baseline table and revised table by page/topic.
2. The system suggests the best match and auto-runs deterministic alignment.
3. Advanced column/row selection is hidden unless the table has nested headers,
   vertical headers, or ambiguous row labels.
4. AI review is a deliberate action, not part of the default path.

## Information Architecture

```text
AI Workspace
  Home
  Jobs
  Compare
  Extract
  Table Review
  Ask Documents
  Sources
  Templates
  Skills & Tools
  Automations
  Admin
```

The current comparison and extraction pages should become workspaces inside this
shell, not separate products.

## Tool And Skill Model

Backend capabilities should be modeled as reusable tools:

- `document.extract`
- `document.compare`
- `document.table.compare`
- `document.query`
- `document.report.generate`
- `document.summary.enhance`
- `source.search`
- `template.detect`
- `template.generate`

Each tool should have:

- A stable API contract.
- Permission requirements.
- Cost metadata.
- Input/output schemas.
- Audit events.
- Optional AI model usage.

This keeps the UI, API, automation layer, and future MCP/plugin integrations
using the same capabilities instead of duplicating business logic.

## RAG And Connector Direction

The platform should support multiple retrieval scopes:

- Current job only.
- User uploads.
- Department collection.
- Organization knowledge base.
- External connectors such as SharePoint, Blob Storage, GitHub, CRM, ERP, or
  project repositories.

Every answer should carry scope, citations, and permission checks. A user should
never be able to retrieve content through chat that they cannot open through the
normal UI.

## Governance Requirements

Production readiness requires:

- User, department, role, and tenant boundaries.
- Tool-level authorization.
- Storage-level authorization.
- Audit log for uploads, tool calls, exports, and AI calls.
- Cost tracking by user, department, tool, model, and job.
- Configurable retention and deletion policies.
- Safe error messages that never expose stack traces or infrastructure details.

## UI Principles

- One shell, many tools.
- Navigation on the left; job/status visibility always available.
- Chat is contextual, not the only interface.
- Upload should be possible from the active workspace.
- Deterministic processing should run before AI.
- AI actions should show cost and scope.
- Advanced controls stay collapsed until the system cannot decide confidently.
- Tables and previews must be readable for PDF, Word, spreadsheet, image/OCR,
  and mixed LTR/RTL documents.

## Implementation Phases

### Phase 1: Shell And Navigation

- Add a persistent workspace shell with left navigation.
- Move current Home, Jobs, Compare, Extract, Table Review, and Ask Agent into
  shell workspaces.
- Keep existing backend endpoints.
- Preserve current upload and result flows.

Initial foundation: `frontend/src/components/workspaceShell.jsx` now provides a
central collapsible left-navigation shell, command center, Ask Documents upload
and chat placeholder, and placeholder modules for Agent Studio, Tool Studio,
Workflow Runs, Knowledge & RAG, and Admin & RBAC.

### Phase 2: Unified Assistant Panel

- Add a contextual assistant panel that knows the active job/workspace.
- Route queries to current run, extraction result, or selected document source.
- Show citations, scope, and AI usage.

### Phase 3: Tool Registry

- Add a backend tool registry describing reusable capabilities and schemas.
- Expose a `GET /tools` endpoint for UI, automation, and MCP-style adapters.
- Move tool authorization/cost metadata into this registry.

Initial foundation: `backend/tool_registry.py` and `backend/routers/tools.py`
now expose the first static capability catalog at `GET /tools`.

### Phase 4: Source And RAG Layer

- Add source collections and per-department document stores.
- Connect current `query` behavior to configurable retrieval scopes.
- Add audit and permission checks around every retrieval.

### Phase 5: Templates And Generation

- Add organization templates for reports, PowerPoint generation, color palettes,
  review formats, and department-specific outputs.
- Keep generation tools separate from extraction/comparison tools.

## Near-Term Engineering Tasks

- Keep the current latest build green.
- Remove obsolete prototype files from the repo.
- Create a shell component and move navigation out of `Header`.
- Keep `App.jsx` as state orchestration only.
- Split broad helpers from `components/common.jsx` when the shell lands.
- Add tool metadata for comparison, extraction, query, table comparison, and
  reports.
