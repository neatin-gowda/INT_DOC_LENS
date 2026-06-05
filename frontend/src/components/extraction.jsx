import React, { useState, useEffect } from "react";
import { API, COLORS } from "../config.js";
import { panelStyle, primaryButtonStyle, secondaryButtonStyle, softPillStyle, miniButtonStyle } from "../styles.js";
import {
  readResponseError,
  friendlyFetchError,
  SoftLoading,
  EmptyState,
  StatChip,
  AiUsageCard,
  displayCell,
  recordSummary,
  trim,
  formatInt,
  fetchStructuredExtraction,
  hasStructuredExtractionContent,
  navButtonStyle,
} from "./common.jsx";
import { TablePreview, GenericRowsTable } from "./tables.jsx";

export function ExtractionWorkspace({ runId, meta, tab, setTab }) {
  return (
    <>
      <ExtractionStats meta={meta} />
      <ExtractionTabs tab={tab} setTab={setTab} />
      <main style={{ ...panelStyle, padding: 12 }}>
        {tab === "overview" && <ExtractionOverview runId={runId} meta={meta} />}
        {tab === "tables" && <ExtractionTables runId={runId} />}
        {tab === "text" && <ExtractionBlocks runId={runId} />}
        {tab === "json" && <ExtractionJsonPreview runId={runId} meta={meta} />}
      </main>
    </>
  );
}

export function ExtractionStats({ meta }) {
  const summary = meta.summary || {};
  return (
    <section style={{ ...panelStyle, padding: 12, display: "flex", gap: 8, marginBottom: 12, flexWrap: "wrap", alignItems: "center" }}>
      <StatChip label="Format" value={(meta.source_format || "-").toUpperCase()} />
      <StatChip label="Documents" value={meta.documents?.length || summary.document_count || 1} />
      <StatChip label="Coverage" value={typeof meta.coverage === "number" ? `${meta.coverage.toFixed(1)}%` : "-"} />
      <StatChip label="Quality" value={summary.quality || "-"} />
      <StatChip label="Tables" value={summary.table_count || 0} />
      <StatChip label="Blocks" value={Object.values(summary.block_counts || {}).reduce((a, b) => a + Number(b || 0), 0)} />
      <StatChip label="Pages" value={meta.n_pages || meta.native_pages || 0} />
      {Number(meta.ai_usage?.total_tokens || 0) > 0 && (
        <StatChip label="AI tokens" value={`${formatInt(meta.ai_usage.total_tokens)} (${formatInt(meta.ai_usage.calls || 0)} calls)`} />
      )}
    </section>
  );
}

export function ExtractionTabs({ tab, setTab }) {
  const items = [
    ["overview", "Extraction overview"],
    ["tables", "Extracted tables"],
    ["text", "Text blocks"],
    ["json", "Structured JSON"],
  ];
  return (
    <nav style={{ display: "flex", gap: 4, borderBottom: "1px solid #d8d0c3", marginBottom: 12, overflowX: "auto" }}>
      {items.map(([key, label]) => {
        const active = tab === key;
        return (
          <button
            key={key}
            onClick={() => setTab(key)}
            style={{
              padding: "10px 14px",
              background: active ? "#1f2937" : "transparent",
              color: active ? "white" : "#344054",
              border: active ? "1px solid #1f2937" : "1px solid transparent",
              borderRadius: "8px 8px 0 0",
              cursor: "pointer",
              fontWeight: 600,
              whiteSpace: "nowrap",
            }}
          >
            {label}
          </button>
        );
      })}
    </nav>
  );
}

export function ExtractionOverview({ runId, meta }) {
  const summary = meta.summary || {};
  const ai = meta.ai_analysis;
  const aiResult = ai?.result || null;

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap", marginBottom: 12 }}>
        <div>
          <h2 style={{ margin: 0, fontSize: 18, fontWeight: 650 }} dir="auto">{meta.label || "Extracted document"}</h2>
          <p style={{ margin: "6px 0 0", color: "#667085", fontSize: 13 }} dir="auto">{summary.message || "Extraction complete."}</p>
        </div>
        <button onClick={() => { window.location.href = `${API}/extract-runs/${runId}/json`; }} style={primaryButtonStyle(false)}>
          Download JSON
        </button>
      </div>

      <div className="report-metrics" style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: 10, marginBottom: 12 }}>
        <MetricCard label="Extraction coverage" value={typeof meta.coverage === "number" ? `${meta.coverage.toFixed(1)}%` : "-"} />
        <MetricCard label="Tables detected" value={summary.table_count || 0} />
        <MetricCard label="Table rows" value={summary.table_row_count || 0} />
        <MetricCard label="Image/OCR blocks" value={summary.figure_count || 0} />
      </div>

      <div style={{ ...panelStyle, padding: 14, boxShadow: "none", marginBottom: 12 }}>
        <div style={{ fontWeight: 650, marginBottom: 8 }}>Block breakdown</div>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {Object.entries(summary.block_counts || {}).map(([key, value]) => (
            <StatChip key={key} label={key.replace("_", " ")} value={value} />
          ))}
          {Object.keys(summary.block_counts || {}).length === 0 && <span style={{ color: "#667085" }}>No block statistics available.</span>}
        </div>
      </div>

      {ai && (
        <div style={{ ...panelStyle, padding: 14, boxShadow: "none" }}>
          <div style={{ fontWeight: 650, marginBottom: 8 }}>
            AI-assisted analysis {ai.available ? "- available" : "- unavailable"}
          </div>
          {!ai.available && <div style={{ color: COLORS.DELETED.text }} dir="auto">{normalizeErrorMessage(ai.error) || "AI analysis was not generated."}</div>}
          {aiResult && (
            <div style={{ color: "#344054", lineHeight: 1.5 }}>
              <p style={{ marginTop: 0 }} dir="auto">{aiResult.executive_summary || "AI analysis completed."}</p>
              {Array.isArray(aiResult.key_items) && aiResult.key_items.length > 0 && (
                <GenericRowsTable
                  columns={["Item"]}
                  rows={aiResult.key_items.slice(0, 20).map((item) => ({ Item: typeof item === "string" ? item : JSON.stringify(item) }))}
                />
              )}
            </div>
          )}
        </div>
      )}

      <AiUsageCard usage={meta.ai_usage} />
    </div>
  );
}

// Local helper to render MetricCard if it is not exported or we can define it
function MetricCard({ label, value }) {
  return (
    <div style={{ background: "#fbfaf6", border: "1px solid #ded6c8", borderRadius: 8, padding: 12 }}>
      <div style={{ fontSize: 12, color: "#667085", fontWeight: 600 }}>{label}</div>
      <div style={{ marginTop: 4, fontSize: 22, color: "#1f2937", fontWeight: 650 }}>{value}</div>
    </div>
  );
}

export function ExtractionTables({ runId }) {
  const [state, setState] = useState({ loading: true, error: "", tables: [] });

  useEffect(() => {
    let cancelled = false;
    setState({ loading: true, error: "", tables: [] });
    fetch(`${API}/extract-runs/${runId}/tables?include_rows=true`)
      .then(async (resp) => {
        if (!resp.ok) throw new Error(await readResponseError(resp));
        return resp.json();
      })
      .then((data) => {
        if (!cancelled) setState({ loading: false, error: "", tables: data.tables || [] });
      })
      .catch((err) => {
        if (!cancelled) setState({ loading: false, error: friendlyFetchError(err), tables: [] });
      });
    return () => { cancelled = true; };
  }, [runId]);

  if (state.loading) return <SoftLoading label="Loading extracted tables..." />;
  if (state.error) return <ErrorBox message={state.error} />;
  if (!state.tables.length) return <EmptyState label="No tables were detected in this document." />;

  return (
    <div style={{ display: "grid", gap: 12 }}>
      {state.tables.map((table) => (
        <div key={table.id} style={{ ...panelStyle, padding: 12, boxShadow: "none" }}>
          <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap", marginBottom: 8 }}>
            <div>
              <div style={{ fontWeight: 650 }} dir="auto">{table.display_name || table.title || "Detected table"}</div>
              <div style={{ color: "#667085", fontSize: 13, marginTop: 3 }} dir="auto">
                {table.page_label} · {table.n_columns} columns · {table.n_rows} rows · header quality {Math.round((table.header_quality || 0) * 100)}%
                {table.extraction_confidence ? ` · extraction ${Math.round(table.extraction_confidence * 100)}%` : ""}
              </div>
            </div>
            <code>{String(table.id || "").slice(0, 8)}</code>
          </div>
          {Array.isArray(table.quality_warnings) && table.quality_warnings.length > 0 && (
            <div style={{ color: "#8a5a00", fontSize: 13, marginBottom: 8 }} dir="auto">
              Review note: {table.quality_warnings.slice(0, 2).join(" ")}
            </div>
          )}
          <div style={{ color: "#475467", fontSize: 13, marginBottom: 8 }} dir="auto">
            Columns: {(table.columns || []).slice(0, 12).join(" | ") || "No columns detected"}
          </div>
          <TablePreview columns={table.columns || []} rows={table.rows || table.row_preview || []} />
        </div>
      ))}
    </div>
  );
}

export function ExtractionBlocks({ runId }) {
  const [state, setState] = useState({ loading: true, error: "", blocks: [] });

  useEffect(() => {
    let cancelled = false;
    setState({ loading: true, error: "", blocks: [] });
    fetch(`${API}/extract-runs/${runId}/blocks?limit=1000`)
      .then(async (resp) => {
        if (!resp.ok) throw new Error(await readResponseError(resp));
        return resp.json();
      })
      .then((data) => {
        if (!cancelled) setState({ loading: false, error: "", blocks: data.blocks || [] });
      })
      .catch((err) => {
        if (!cancelled) setState({ loading: false, error: friendlyFetchError(err), blocks: [] });
      });
    return () => { cancelled = true; };
  }, [runId]);

  if (state.loading) return <SoftLoading label="Loading extracted text blocks..." />;
  if (state.error) return <ErrorBox message={state.error} />;

  const rows = state.blocks
    .filter((block) => block.text || block.type === "table")
    .slice(0, 500)
    .map((block) => ({
      Page: block.page_number,
      Type: block.type,
      Path: block.path,
      Text: trim(block.text || JSON.stringify(block.payload || {}), 700),
    }));

  return rows.length ? (
    <GenericRowsTable columns={["Page", "Type", "Path", "Text"]} rows={rows} />
  ) : (
    <EmptyState label="No extracted text blocks were returned." />
  );
}

export function ExtractionJsonPreview({ runId, meta }) {
  const [state, setState] = useState({ loading: true, error: "", data: null });

  useEffect(() => {
    let cancelled = false;
    setState({ loading: true, error: "", data: null });
    fetchStructuredExtraction(runId)
      .then((data) => {
        if (!cancelled) setState({ loading: false, error: "", data });
      })
      .catch((err) => {
        if (!cancelled) setState({ loading: false, error: friendlyFetchError(err), data: null });
      });
    return () => { cancelled = true; };
  }, [runId]);

  if (state.loading) return <SoftLoading label="Building structured JSON preview..." />;
  if (state.error) return <ErrorBox message={state.error} />;

  const data = state.data || {};
  const tables = data.tables || [];
  const pages = data.pages || [];
  const content = data.content || pages.flatMap((pageItem) => pageItem.content || []);
  const documentSummary = data.document_summary || {};
  const quality = documentSummary.extraction_quality || {};
  const inferredRecords = content
    .map((item) => item.inferred_record)
    .filter(Boolean);

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <div style={{ ...panelStyle, padding: 12, boxShadow: "none" }}>
        <div style={{ display: "flex", justifyContent: "space-between", gap: 12, alignItems: "flex-start", flexWrap: "wrap" }}>
          <div>
            <div style={{ fontWeight: 650, marginBottom: 8 }} dir="auto">Business extraction summary</div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", color: "#344054", fontSize: 13 }}>
              <span style={softPillStyle}>Document: {documentSummary.label || meta.label || "uploaded file"}</span>
              <span style={softPillStyle}>Type: {documentSummary.source_type || meta.source_format || "document"}</span>
              <span style={softPillStyle}>Template: {documentSummary.detected_template || "generic document"}</span>
              <span style={softPillStyle}>Quality: {quality.grade || "not rated"}</span>
              {Number.isFinite(quality.score) && <span style={softPillStyle}>Score: {Math.round(quality.score * 100)}%</span>}
              {documentSummary.detected_language && <span style={softPillStyle}>Script: {documentSummary.detected_language}</span>}
            </div>
          </div>
          <button onClick={() => { window.location.href = `${API}/extract-runs/${runId}/json`; }} style={secondaryButtonStyle()}>
            Download clean JSON
          </button>
        </div>
        {Array.isArray(quality.warnings) && quality.warnings.length > 0 && (
          <div style={{ color: "#8a5a00", fontSize: 13, marginTop: 8, lineHeight: 1.4 }} dir="auto">
            {quality.warnings.slice(0, 3).map((w) => w.message || w).join(" ")}
          </div>
        )}
      </div>

      <div style={{ ...panelStyle, padding: 12, boxShadow: "none" }}>
        <div style={{ display: "flex", justifyContent: "space-between", gap: 10, alignItems: "center", marginBottom: 8 }}>
          <div>
            <div style={{ fontWeight: 650 }}>Document-order extracted text</div>
            <div style={{ color: "#667085", fontSize: 13, marginTop: 3 }}>
              {content.length} text block(s), {inferredRecords.length} inferred record(s), {tables.length} table(s), {pages.length} page(s)
            </div>
          </div>
        </div>

        {content.length > 0 ? (
          <GenericRowsTable
            columns={["Page", "Type", "Path", "Text", "Inferred record"]}
            rows={content.slice(0, 500).map((item) => ({
              Page: item.page,
              Type: item.type,
              Path: item.path,
              Text: trim(item.text, 900),
              "Inferred record": item.inferred_record ? recordSummary(item.inferred_record.values) : "",
            }))}
          />
        ) : (
          <EmptyState label="No ordered text content was returned. Check the Text blocks tab." />
        )}
      </div>

      {inferredRecords.length > 0 && (
        <div style={{ ...panelStyle, padding: 12, boxShadow: "none" }}>
          <div style={{ fontWeight: 650, marginBottom: 8 }}>Inferred business records</div>
          <GenericRowsTable
            columns={["Page", "Values", "Source text", "Citation"]}
            rows={inferredRecords.slice(0, 120).map((record) => ({
              Page: record.page,
              Values: recordSummary(record.values),
              "Source text": trim(record.source_text, 700),
              Citation: record.citation,
            }))}
          />
        </div>
      )}

      {tables.length > 0 && (
        <div style={{ ...panelStyle, padding: 12, boxShadow: "none" }}>
          <div style={{ fontWeight: 650, marginBottom: 8 }}>Extracted tables</div>
          <GenericRowsTable
            columns={["title", "page", "area", "row_count", "columns"]}
            rows={tables.slice(0, 30).map((table) => ({
              title: table.title,
              page: table.page,
              area: table.area,
              row_count: table.row_count,
              columns: (table.columns || []).join(" | "),
            }))}
          />
        </div>
      )}

      <div style={{ ...panelStyle, padding: 12, boxShadow: "none" }}>
        <div style={{ fontWeight: 650, marginBottom: 8 }}>Clean JSON preview</div>
        <pre className="dl-scrollbar" style={{ margin: 0, maxHeight: 360, overflow: "auto", background: "#fbfaf6", border: "1px solid #e0d8ca", borderRadius: 8, padding: 12, fontSize: 12, lineHeight: 1.45, whiteSpace: "pre-wrap" }}>
          {JSON.stringify(
            {
              document_summary: data.document_summary,
              content: content.slice(0, 30),
              tables: tables.slice(0, 10),
            },
            null,
            2,
          )}
        </pre>
      </div>
    </div>
  );
}

export function ExtractionPreview({ runId, meta }) {
  const [page, setPage] = useState(1);
  const total = meta.n_pages || 1;

  return (
    <div>
      <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 10 }}>
        <button disabled={page <= 1} onClick={() => setPage(Math.max(1, page - 1))} style={navButtonStyle(page <= 1)}>Prev</button>
        <strong>Page {page} / {total}</strong>
        <button disabled={page >= total} onClick={() => setPage(Math.min(total, page + 1))} style={navButtonStyle(page >= total)}>Next</button>
      </div>
      <div className="doc-frame" style={{ display: "flex", justifyContent: "center", padding: 10 }}>
        <img
          alt={`Extracted preview page ${page}`}
          src={`${API}/extract-runs/${runId}/pages/${page}`}
          style={{ maxWidth: "100%", height: "auto", display: "block" }}
        />
      </div>
    </div>
  );
}

export function BusinessStructurePreview({ documents }) {
  return (
    <div style={{ display: "grid", gap: 10 }}>
      {documents.slice(0, 4).map((doc) => (
        <div key={doc.document_index || doc.label} style={{ border: "1px solid #e0d8ca", borderRadius: 8, background: "#fffdf8", padding: 10 }}>
          <div style={{ fontWeight: 650, marginBottom: 8 }} dir="auto">
            {doc.label || `Document ${doc.document_index || ""}`}
          </div>
          <div style={{ display: "grid", gap: 8 }}>
            {(doc.sections || []).slice(0, 8).map((section, idx) => (
              <BusinessSectionCard key={`${section.path || section.title}-${idx}`} section={section} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export function BusinessSectionCard({ section }) {
  const fields = section.fields || [];
  const inlineRecords = section.inline_records || [];
  const tables = section.tables || [];
  const content = section.content || [];

  function inferColumns(rows) {
    if (!rows?.length) return [];
    const keys = new Set();
    rows.slice(0, 20).forEach((row) => {
      if (row && typeof row === "object" && !Array.isArray(row)) {
        Object.keys(row).forEach((k) => {
          if (k !== "payload" && k !== "raw") keys.add(k);
        });
      }
    });
    return Array.from(keys).slice(0, 12);
  }

  return (
    <details open={false} style={{ border: "1px solid #e9dfd0", borderRadius: 7, background: "#fbfaf6", padding: 9 }}>
      <summary style={{ cursor: "pointer", fontWeight: 650, color: "#344054" }}>
        {section.title || "Section"} <span style={{ color: "#667085", fontWeight: 500 }}>p.{section.page || "-"}</span>
      </summary>
      <div style={{ marginTop: 9, display: "grid", gap: 8 }}>
        {fields.length > 0 && (
          <div>
            <div style={{ fontSize: 12, color: "#667085", fontWeight: 650, marginBottom: 4 }}>Extracted fields</div>
            <GenericRowsTable columns={["field", "value", "page"]} rows={fields.slice(0, 12)} />
          </div>
        )}

        {inlineRecords.length > 0 && (
          <div>
            <div style={{ fontSize: 12, color: "#667085", fontWeight: 650, marginBottom: 4 }}>Inline records</div>
            <GenericRowsTable
              columns={inferColumns(inlineRecords.map((r) => r.values || r))}
              rows={inlineRecords.slice(0, 10).map((r) => r.values || r)}
            />
          </div>
        )}

        {tables.length > 0 && (
          <div>
            <div style={{ fontSize: 12, color: "#667085", fontWeight: 650, marginBottom: 4 }}>Related tables</div>
            {tables.slice(0, 4).map((table, idx) => (
              <div key={`${table.title}-${idx}`} style={{ marginBottom: 8 }}>
                <div style={{ fontSize: 12, color: "#344054", fontWeight: 650, marginBottom: 4 }}>
                  {table.title || "Detected table"} · {table.row_count || 0} rows
                </div>
                <TablePreview columns={table.columns || []} rows={table.sample_rows || []} />
              </div>
            ))}
          </div>
        )}

        {content.length > 0 && (
          <div>
            <div style={{ fontSize: 12, color: "#667085", fontWeight: 650, marginBottom: 4 }}>Related content</div>
            <ul style={{ margin: 0, paddingLeft: 18, color: "#344054", fontSize: 13, lineHeight: 1.45 }}>
              {content.slice(0, 8).map((item, idx) => (
                <li key={idx} dir="auto">{trim(item.text, 220)}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </details>
  );
}

function ErrorBox({ message }) {
  return (
    <div style={{ marginTop: 16, border: "1px solid #f0b4b4", background: "#fff5f5", color: "#9f1d1d", borderRadius: 8, padding: 13, fontSize: 14, fontWeight: 600, lineHeight: 1.45 }}>
      {message}
    </div>
  );
}
