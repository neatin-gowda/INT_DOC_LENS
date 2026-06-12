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
import { FieldDiffTable } from "./tables.jsx";

export function QueryPanel({ runId }) {
  const [q, setQ] = useState("");
  const [messages, setMessages] = useState([]);
  const [busy, setBusy] = useState(false);

  const ask = async (overrideQuestion = "") => {
    const question = String(overrideQuestion || q).trim();
    if (!question || busy) return;

    setBusy(true);
    setQ("");
    setMessages((prev) => [...prev, { role: "user", text: question }]);

    try {
      const r = await fetch(`${API}/runs/${runId}/query`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question, mode: "fast", response_language: "source" }),
      });

      if (!r.ok) throw new Error(await readResponseError(r));
      const data = await r.json();
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: data.answer || "I found matching evidence.",
          rows: data.rows || [],
          columns: data.columns || inferColumns(data.rows || []),
        },
      ]);
    } catch (err) {
      setMessages((prev) => [...prev, { role: "assistant", text: friendlyFetchError(err), rows: [] }]);
    } finally {
      setBusy(false);
    }
  };

  const hasMessages = messages.length > 0;

  return (
    <section className="chat-workbench">
      <div className="chat-thread" aria-live="polite">
        {!hasMessages && (
          <div className="chat-empty">
            <div className="workflow-kicker">Natural-language evidence</div>
            <h2>Ask this comparison</h2>
            <p>Search clauses, numbers, dates, removals, page evidence, and table changes from the completed comparison.</p>
          </div>
        )}

        {messages.map((message, index) => (
          <ChatMessage key={`${message.role}-${index}`} message={message} />
        ))}

        {busy && (
          <div className="chat-bubble assistant thinking">
            <span>Searching comparison evidence...</span>
          </div>
        )}
      </div>

      <div className="chat-composer">
        <div className="query-presets">
          {FAST_QUERY_PRESETS.map((preset) => (
            <button
              key={preset.label}
              type="button"
              onClick={() => ask(preset.prompt)}
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
            placeholder="Ask a question about this comparison..."
            disabled={busy}
          />
          <button onClick={() => ask()} disabled={busy || !q.trim()} className="primary-action compact">
            {busy ? "Searching" : "Send"}
          </button>
        </div>
      </div>
    </section>
  );
}

function ChatMessage({ message }) {
  if (message.role === "user") {
    return (
      <div className="chat-row user">
        <div className="chat-bubble user" dir="auto">{message.text}</div>
      </div>
    );
  }

  const rows = message.rows || [];

  return (
    <div className="chat-row assistant">
      <div className="chat-bubble assistant" dir="auto">
        <div>{message.text}</div>
        {rows.length > 0 ? (
          <EvidenceBlock rows={rows} columns={message.columns || inferColumns(rows)} />
        ) : (
          <EmptyState label="No supporting results were found." />
        )}
      </div>
    </div>
  );
}

function EvidenceBlock({ rows, columns }) {
  const [open, setOpen] = useState(false);
  const visible = open ? rows.slice(0, 25) : rows.slice(0, 4);

  return (
    <div className="evidence-block">
      <div className="evidence-head">
        <button type="button" className="ghost-action compact" onClick={() => setOpen((value) => !value)}>
          {open ? "Hide evidence" : `Show evidence (${rows.length})`}
        </button>
        <button type="button" className="ghost-action compact" onClick={() => downloadCsv(rows, columns)}>
          Export CSV
        </button>
      </div>
      {open && (
        <div className="evidence-list">
          {visible.map((row, index) => <EvidenceCard key={index} row={row} />)}
        </div>
      )}
    </div>
  );
}

function EvidenceCard({ row }) {
  const changeType = rowChangeType(row);
  const color = COLORS[changeType] || COLORS.MODIFIED;
  const title = row.stable_key || row.Path || row.path || row.citation || row.Citation || "Evidence";
  const text = row.Text || row.text || row.after || row.before || row.summary || "";

  return (
    <article className="evidence-card" style={{ borderInlineStartColor: color.border }}>
      <div className="evidence-card-head">
        <ChangeBadge type={changeType} />
        <span dir="auto">{trim(title, 96)}</span>
      </div>
      {row.Page && <div className="evidence-meta">Page {row.Page}</div>}
      {text && <p dir="auto">{trim(text, 360)}</p>}
      {row.before && <div className="evidence-before" dir="auto">Before: {trim(row.before, 220)}</div>}
      {row.after && <div className="evidence-after" dir="auto">After: {trim(row.after, 220)}</div>}
      {row.field_changes?.length > 0 && <FieldDiffTable rows={row.field_changes} />}
    </article>
  );
}

function downloadCsv(rows, columns) {
  const cols = columns?.length ? columns : inferColumns(rows);
  const escape = (value) => `"${String(value ?? "").replace(/"/g, '""')}"`;
  const csv = [cols.map(escape).join(","), ...rows.map((row) => cols.map((col) => escape(row[col])).join(","))].join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "comparison_evidence.csv";
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}
