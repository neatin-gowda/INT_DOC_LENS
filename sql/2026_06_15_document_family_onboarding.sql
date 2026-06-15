-- Document use-case onboarding profile support.
-- Safe to run multiple times against an existing Azure PostgreSQL database.

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS document_family (
    id               UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    tenant_id        TEXT NOT NULL DEFAULT 'default',
    business_unit_id TEXT NOT NULL DEFAULT 'default',
    supplier         TEXT NOT NULL,
    family_name      TEXT NOT NULL,
    domain           TEXT NOT NULL DEFAULT 'generic',
    prompt_profile   JSONB NOT NULL DEFAULT '{}'::jsonb,
    ui_profile       JSONB NOT NULL DEFAULT '{}'::jsonb,
    template_profile JSONB NOT NULL DEFAULT '{}'::jsonb,
    template_version INT NOT NULL DEFAULT 1,
    created_at       TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at       TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE document_family ADD COLUMN IF NOT EXISTS tenant_id TEXT NOT NULL DEFAULT 'default';
ALTER TABLE document_family ADD COLUMN IF NOT EXISTS business_unit_id TEXT NOT NULL DEFAULT 'default';
ALTER TABLE document_family ADD COLUMN IF NOT EXISTS domain TEXT NOT NULL DEFAULT 'generic';
ALTER TABLE document_family ADD COLUMN IF NOT EXISTS prompt_profile JSONB NOT NULL DEFAULT '{}'::jsonb;
ALTER TABLE document_family ADD COLUMN IF NOT EXISTS ui_profile JSONB NOT NULL DEFAULT '{}'::jsonb;
ALTER TABLE document_family ADD COLUMN IF NOT EXISTS template_profile JSONB NOT NULL DEFAULT '{}'::jsonb;
ALTER TABLE document_family ADD COLUMN IF NOT EXISTS template_version INT NOT NULL DEFAULT 1;
ALTER TABLE document_family ADD COLUMN IF NOT EXISTS created_at TIMESTAMPTZ NOT NULL DEFAULT now();
ALTER TABLE document_family ADD COLUMN IF NOT EXISTS updated_at TIMESTAMPTZ NOT NULL DEFAULT now();

CREATE UNIQUE INDEX IF NOT EXISTS ux_document_family_scope_name
ON document_family (tenant_id, business_unit_id, supplier, family_name);

CREATE TABLE IF NOT EXISTS spec_document (
    id                  UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    tenant_id           TEXT NOT NULL DEFAULT 'default',
    business_unit_id    TEXT NOT NULL DEFAULT 'default',
    family_id           UUID NOT NULL REFERENCES document_family(id),
    label               TEXT NOT NULL,
    version_tag         TEXT,
    raw_pdf_blob_uri    TEXT NOT NULL DEFAULT '',
    page_images_prefix  TEXT NOT NULL DEFAULT '',
    page_count          INT NOT NULL DEFAULT 0,
    sha256              CHAR(64) NOT NULL,
    extracted_at        TIMESTAMPTZ,
    coverage_pct        NUMERIC(5,2),
    uploaded_by         TEXT,
    uploaded_at         TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE UNIQUE INDEX IF NOT EXISTS ux_spec_document_family_sha
ON spec_document (family_id, sha256);

CREATE INDEX IF NOT EXISTS idx_spec_document_family
ON spec_document (family_id);
