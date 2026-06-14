# Unified AI Workspace Roadmap

This product should evolve from a document comparison MVP into a single
organization AI workspace. The goal is not to keep adding standalone screens,
but to expose reusable tools, skills, document stores, and automation workflows
through one governed interface.

## Product Direction

The near-term surface should be an AI-powered document-intelligence workspace:

- A persistent left navigation for Compare, Extract, Ask Document, Work
  History, and future AI Agents.
- A central work area that changes by task: document comparison, single-document
  extraction, grounded document question answering, or historical job review.
- A quick upload area that supports drag-and-drop for baseline/revised files or
  single-document extraction without forcing users through multiple pages.
- Future role-aware views so departments see only the agents, tools, sources,
  and templates they are allowed to use.

The UI should make the simple path obvious and keep expert controls available
only when needed.

## Default User Flows

### Quick Compare

1. User drops a baseline document and a revised document.
2. The system starts a background job and shows live status.
3. The work area opens a side-by-side review with visual preview, semantic
   summary, and evidence-backed overlays.
4. Table and report endpoints remain reusable API capabilities, but they are not
   primary navigation items until the default comparison flow is excellent.

### Quick Extract

1. User drops one or more files.
2. The system extracts text, tables, images, metadata, key-values, and warnings.
3. The work area shows structured output with downloadable JSON/report options.
4. Ask Document can answer grounded questions about completed extraction runs.

### Ask Document

1. User uploads one document or opens a completed extraction job.
2. The system queries the deterministic extraction store first.
3. Responses cite source pages, tables, rows, cells, or spans where available.
4. LLM streaming can be layered on later, but the default answer remains
   grounded in extracted evidence.

### Advanced Table Review

1. User selects a baseline table and revised table by page/topic.
2. The system suggests the best match and auto-runs deterministic alignment.
3. Advanced column/row selection is hidden unless the table has nested headers,
   vertical headers, or ambiguous row labels.
4. AI/vision review is triggered autonomously for low-confidence extraction
   cases, not exposed as a user-facing "improve accuracy" button.

## Information Architecture

```text
AI Workspace
  AI Document Intelligence
    Compare
    Extract
    Ask Document
    Work History
  AI Agents
    Coming Soon
  Admin and Governance (future)
    Capabilities
    Models
    Knowledge Bases
    RBAC
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
never be able to retrieve content through Ask Document that they cannot open
through the normal UI.

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
- Ask Document is contextual and grounded; there is no standalone generic chat
  workspace in the near-term product.
- Upload should be possible from the active workspace.
- Deterministic processing should run before AI.
- AI actions should run autonomously only when configured and should persist
  cost, scope, model, and confidence metadata.
- Advanced controls stay collapsed until the system cannot decide confidently.
- Tables and previews must be readable for PDF, Word, spreadsheet, image/OCR,
  and mixed LTR/RTL documents.

## Document AI Accuracy Workflow

The near-term product should stay document-workspace-first. Knowledge bases,
models, MCP connectors, and autonomous agents remain platform capabilities, but
they should not distract from the core document experience until comparison,
extraction, preview, citation, and grounded Q&A are excellent.

The default document workflow should be deterministic before it is generative:

1. Extract text, layout blocks, tables, key-values, images, warnings, and page
   coordinates with the classical pipeline.
2. Store every extracted element with page, bounding region, parser confidence,
   source format, and semantic path.
3. Let users query and compare the deterministic evidence store without an LLM.
4. When accuracy needs improvement, run an optional AI pass only over selected
   pages, citations, tables, or low-confidence spans.
5. For scanned or layout-heavy pages, render the page or crop to an image and
   send the focused image/span to a configured vision-language model.
6. Stitch the refined output back into the extracted element model, preserving
   the original evidence, AI-refined value, confidence score, model id, prompt
   profile, and reviewer status.
7. Capture token usage for each AI call: input tokens, output tokens, model,
   tool name, run id, element id, user id, department, latency, and cost bucket.

Every Ask Document answer should cite the exact page, table, row, cell, or
span that supported it. When a user clicks a citation, the preview should open
that document page and highlight the referenced region. This keeps Q&A useful
without turning it into an ungrounded assistant.

## Implementation Phases

### Phase 1: Shell And Navigation

- Add a persistent workspace shell with left navigation.
- Move Compare, Extract, Ask Document, and Work History into shell workspaces.
- Keep AI Agents visible only as a coming-soon area until backend orchestration,
  RBAC, and tool registration are ready.
- Keep existing backend endpoints.
- Preserve current upload and result flows.

Initial foundation: `frontend/src/components/workspaceShell.jsx` now provides a
central collapsible left-navigation shell, Work History, Ask Document, and a
future AI Agents placeholder.

Ask Documents now uploads files through the existing extraction pipeline and can
query completed extraction runs through `POST /extract-runs/{run_id}/query`.

### Phase 2: Grounded Ask Document

- Route questions to the current extraction run.
- Show citations, scope, and deterministic evidence.
- Later, stream LLM responses over the same citation contract when Azure OpenAI
  is configured.

### Phase 3: Tool Registry

- Add a backend tool registry describing reusable capabilities and schemas.
- Expose a `GET /tools` endpoint for UI, automation, and MCP-style adapters.
- Move tool authorization/cost metadata into this registry.

Initial foundation: `backend/tool_registry.py` and `backend/routers/tools.py`
now expose the first role-filtered capability catalog at `GET /tools`.

Job cleanup foundation: `DELETE /jobs/{run_id}` removes accessible jobs from
the durable job store and current in-memory run cache.

### Phase 4: Source And RAG Layer

- Add source collections and per-department document stores.
- Connect current `query` behavior to configurable retrieval scopes.
- Add audit and permission checks around every retrieval.
- Register AI Agents, skills, MCP connectors, and automations against the same
  tool registry before exposing them in the UI.

### Phase 5: Templates And Generation

- Add organization templates for reports, PowerPoint generation, color palettes,
  review formats, and department-specific outputs.
- Keep generation tools separate from extraction/comparison tools.

## Near-Term Engineering Tasks

- Keep the current latest build green.
- Remove obsolete prototype files from the repo.
- Create a shell component and move navigation out of `Header`.
- Keep `App.jsx` as state orchestration only.
- Keep generic chat, table review, and report-builder screens out of primary
  navigation until the document workflows need them.
- Add tool metadata for comparison, extraction, query, table comparison, and
  reports.
