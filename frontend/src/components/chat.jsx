import React, { useState } from "react";
import { API, COLORS } from "../config.js";
import {
  readResponseError,
  friendlyFetchError,
  EmptyState,
  rowChangeType,
  ChangeBadge,
  trim,
  FAST_QUERY_PRESETS,
  inferColumns,
} from "./common.jsx";
import { GenericRowsTable, FieldDiffTable } from "./tables.jsx";

export function QueryPanel({ runId }) {
  const [q, setQ] = useState(FAST_QUERY_PRESETS[0]?.prompt || "");
  const [response, setResponse] = useState(null);
  const [busy, setBusy] = useState(false);

  const ask = async () => {
    const question = q.trim();
    if (!question) return;

    setBusy(true);
    setResponse(null);

    try {
      const r = await fetch(`${API}/runs/${runId}/query`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question, mode: "fast", response_language: "source" }),
      });

      if (!r.ok) throw new Error(await readResponseError(r));
      setResponse(await r.json());
    } catch (err) {
      setResponse({ answer: friendlyFetchError(err), rows: [] });
    } finally {
      setBusy(false);
    }
  };

  const rows = response?.rows || [];
  const columns = response?.columns || inferColumns(rows);

  return (
    <section className="query-workbench">
      <div className="query-panel">
        <div className="workflow-kicker">Evidence query</div>
        <h2>Ask this comparison</h2>
        <div className="query-presets">
          {FAST_QUERY_PRESETS.map((preset) => (
            <button
              key={preset.label}
              type="button"
              onClick={() => setQ(preset.prompt)}
              disabled={busy}
              className="preset-chip"
              title={preset.prompt}
            >
              {preset.label}
            </button>
          ))}
        </div>
        <div className="query-input-row">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && ask()}
            placeholder="Ask for changed clauses, values, dates, pages, or table rows..."
            disabled={busy}
          />
          <button onClick={ask} disabled={busy || !q.trim()} className="primary-action compact">
            {busy ? "Searching" : "Ask"}
          </button>
        </div>
      </div>

      {response?.answer && (
        <div dir="auto" className="query-answer">
          <div className="workflow-kicker">Answer</div>
          {response.answer}
        </div>
      )}

      {response && rows.length === 0 && <EmptyState label="No supporting results were found." />}

      {rows.length > 0 && columns.length > 0 ? (
        <div className="query-results-shell">
          <GenericRowsTable columns={columns} rows={rows} />
        </div>
      ) : (
        rows.slice(0, 50).map((r, i) => <QueryResult key={i} r={r} />)
      )}
    </section>
  );
}

export function QueryResult({ r }) {
  const c = COLORS[r.change_type] || COLORS.MODIFIED;

  return (
    <div className="query-result" style={{ borderInlineStartColor: c.border }}>
      <div className="query-result-head">
        <ChangeBadge type={rowChangeType(r)} />
        {r.stable_key && <code>{r.stable_key}</code>}
        <span>{r.citation || `page ${r.page || "-"} - ${r.block_type || "block"}`}</span>
      </div>
      {r.before && <div style={{ color: COLORS.DELETED.text }}>Before: {trim(r.before, 260)}</div>}
      {r.after && <div style={{ color: COLORS.ADDED.text }}>After: {trim(r.after, 260)}</div>}
      {r.field_changes?.length > 0 && <FieldDiffTable rows={r.field_changes} />}
    </div>
  );
}
