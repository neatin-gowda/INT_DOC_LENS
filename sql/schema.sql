-- =========================================================================
-- spec_diff schema (Postgres 15+ with pgvector)
-- Designed to store ANY supplier's structured spec document, plus diffs.
-- =========================================================================

CREATE EXTENSION IF NOT EXISTS pgvector;
CREATE EXTENSION IF NOT EXISTS pg_trgm;
CREATE EXTENSION IF NOT EXISTS uuid-ossp;

-- ---------------------------------------------------------------------
-- A "document family" = a recurring supplier publication
-- (e.g., "Ford Bronco Model Spec", "Ford F-150 Order Guide", "GM Tahoe MPF")
-- The template_profile is auto-discovered on first ingest, then reused.
-- ---------------------------------------------------------------------
CREATE TABLE document_family (
    id              UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    supplier        TEXT NOT NULL,
    family_name     TEXT NOT NULL,
    template_profile JSONB NOT NULL DEFAULT '{}'::jsonb,
    template_version INT NOT NULL DEFAULT 1,
    created_at      TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at      TIMESTAMPTZ NOT NULL DEFAULT now(),
    UNIQUE (supplier, family_name)
);

-- ---------------------------------------------------------------------
-- One row per uploaded PDF.
-- raw_pdf_blob_uri points to Azure Blob Storage.
-- page_images_prefix is the blob prefix where rendered page images live.
-- ---------------------------------------------------------------------
CREATE TABLE spec_document (
    id                  UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    family_id           UUID NOT NULL REFERENCES document_family(id),
    label               TEXT NOT NULL,             -- e.g. "2024_MPF_Model_Spec"
    version_tag         TEXT,                      -- e.g. "2024MY"
    raw_pdf_blob_uri    TEXT NOT NULL,
    page_images_prefix  TEXT NOT NULL,
    page_count          INT NOT NULL,
    sha256              CHAR(64) NOT NULL,
    extracted_at        TIMESTAMPTZ,
    coverage_pct        NUMERIC(5,2),              -- §accuracy — % of source chars assigned to a block
    uploaded_by         TEXT,
    uploaded_at         TIMESTAMPTZ NOT NULL DEFAULT now(),
    UNIQUE (family_id, sha256)
);

-- ---------------------------------------------------------------------
-- A "block" = the smallest semantically meaningful unit
-- (section heading, table row, paragraph, list item, key/value pair)
-- block_type is one of: section | heading | paragraph | table | table_row
--                      | list_item | kv_pair | figure | note
-- path is a slash-separated logical path inside the doc tree:
--   e.g. /bronco/big_bend/equipment_group/mid_package
-- stable_key is the natural identifier when one exists
--   (order code, package code, paint code) — null otherwise
-- payload is the structured body of the block
-- ---------------------------------------------------------------------
CREATE TABLE doc_block (
    id              UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    document_id     UUID NOT NULL REFERENCES spec_document(id) ON DELETE CASCADE,
    parent_id       UUID REFERENCES doc_block(id) ON DELETE CASCADE,
    block_type      TEXT NOT NULL,
    path            TEXT NOT NULL,
    stable_key      TEXT,                          -- e.g. "765" for Sasquatch
    page_number     INT NOT NULL,
    bbox            NUMERIC[],                     -- [x0,y0,x1,y1] on page
    text            TEXT,                          -- canonical text rendering
    payload         JSONB NOT NULL DEFAULT '{}'::jsonb,
    content_hash    CHAR(64) NOT NULL,             -- sha256 of normalized payload
    embedding       vector(1536),                  -- text-embedding-3-small / Azure OpenAI
    sequence        INT NOT NULL                   -- order in document
);

CREATE INDEX idx_block_doc        ON doc_block (document_id);
CREATE INDEX idx_block_path       ON doc_block (document_id, path);
CREATE INDEX idx_block_key        ON doc_block (document_id, stable_key)
                                    WHERE stable_key IS NOT NULL;
CREATE INDEX idx_block_payload_gin ON doc_block USING gin (payload jsonb_path_ops);
CREATE INDEX idx_block_text_trgm  ON doc_block USING gin (text gin_trgm_ops);
CREATE INDEX idx_block_embedding  ON doc_block USING hnsw (embedding vector_cosine_ops);

-- ---------------------------------------------------------------------
-- A comparison_run = one diff between two documents of the same family.
-- ---------------------------------------------------------------------
CREATE TABLE comparison_run (
    id              UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    family_id       UUID NOT NULL REFERENCES document_family(id),
    base_doc_id     UUID NOT NULL REFERENCES spec_document(id),
    target_doc_id   UUID NOT NULL REFERENCES spec_document(id),
    status          TEXT NOT NULL DEFAULT 'pending', -- pending|running|complete|failed
    summary_json    JSONB,                           -- the Feature/Change/Clarify table
    stats           JSONB,                           -- counts: added/deleted/modified/unchanged
    started_at      TIMESTAMPTZ NOT NULL DEFAULT now(),
    finished_at     TIMESTAMPTZ,
    error           TEXT,
    UNIQUE (base_doc_id, target_doc_id)
);

-- ---------------------------------------------------------------------
-- One row per block-pair decision in a comparison_run.
-- change_type: ADDED | DELETED | MODIFIED | UNCHANGED
-- For ADDED, base_block_id is null. For DELETED, target_block_id is null.
-- field_diffs is an array of {path, before, after} for table cells / kv pairs.
-- token_diff is a JSON list of {op: equal|insert|delete|replace, text} for prose.
-- ---------------------------------------------------------------------
CREATE TABLE block_diff (
    id              BIGSERIAL PRIMARY KEY,
    run_id          UUID NOT NULL REFERENCES comparison_run(id) ON DELETE CASCADE,
    base_block_id   UUID REFERENCES doc_block(id),
    target_block_id UUID REFERENCES doc_block(id),
    change_type     TEXT NOT NULL,
    similarity      NUMERIC(4,3),                   -- 0..1, only relevant for MODIFIED
    field_diffs     JSONB,
    token_diff      JSONB,
    impact_score    NUMERIC(4,3),                   -- 0..1, used to rank for summary
    CHECK (change_type IN ('ADDED','DELETED','MODIFIED','UNCHANGED'))
);

CREATE INDEX idx_diff_run         ON block_diff (run_id);
CREATE INDEX idx_diff_run_change  ON block_diff (run_id, change_type);
CREATE INDEX idx_diff_field_gin   ON block_diff USING gin (field_diffs jsonb_path_ops);

-- ---------------------------------------------------------------------
-- Page-level visual diff cache (used by side-by-side viewer).
-- regions are an array of {page, bbox, change_type} the UI can overlay.
-- ---------------------------------------------------------------------
CREATE TABLE page_diff (
    id              BIGSERIAL PRIMARY KEY,
    run_id          UUID NOT NULL REFERENCES comparison_run(id) ON DELETE CASCADE,
    side            CHAR(1) NOT NULL,               -- 'L' (base) or 'R' (target)
    page_number     INT NOT NULL,
    regions         JSONB NOT NULL,
    UNIQUE (run_id, side, page_number)
);

-- ---------------------------------------------------------------------
-- Saved NL queries (history + reusable) and their resolved interpretations.
-- ---------------------------------------------------------------------
CREATE TABLE nl_query_log (
    id              BIGSERIAL PRIMARY KEY,
    run_id          UUID REFERENCES comparison_run(id),
    user_id         TEXT,
    nl_text         TEXT NOT NULL,
    resolved_plan   JSONB NOT NULL,                 -- {paths:[], filters:{}, granularity:""}
    result_count    INT,
    created_at      TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- ---------------------------------------------------------------------
-- Convenience views
-- ---------------------------------------------------------------------
CREATE VIEW v_diff_summary AS
SELECT
    r.id              AS run_id,
    r.family_id,
    r.base_doc_id,
    r.target_doc_id,
    SUM((change_type = 'ADDED')::int)     AS n_added,
    SUM((change_type = 'DELETED')::int)   AS n_deleted,
    SUM((change_type = 'MODIFIED')::int)  AS n_modified,
    SUM((change_type = 'UNCHANGED')::int) AS n_unchanged
FROM comparison_run r
LEFT JOIN block_diff d ON d.run_id = r.id
GROUP BY r.id;
