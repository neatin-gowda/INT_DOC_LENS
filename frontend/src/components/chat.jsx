import React, { useState } from "react";
import { API, COLORS } from "../config.js";
import {
  inputStyle,
  modeButtonStyle,
  presetButtonStyle,
  primaryButtonStyle,
  secondaryButtonStyle,
} from "../styles.js";
import {
  readResponseError,
  friendlyFetchError,
  AiUsageCard,
  EmptyState,
  normalizeConfidence,
  rowChangeType,
  ChangeBadge,
  trim,
  friendlyCitation,
  DEFAULT_AI_SUMMARY_PROMPT,
  AI_PROMPT_PRESETS,
  FAST_QUERY_PRESETS,
  inferColumns,
} from "./common.jsx";
import { GenericRowsTable, FieldDiffTable } from "./tables.jsx";

export function QueryPanel({ runId }) {
  const [q, setQ] = useState(DEFAULT_AI_SUMMARY_PROMPT);
  const [mode, setMode] = useState("ai");
  const [response, setResponse] = useState(null);
  const [busy, setBusy] = useState(false);
  const [downloadBusy, setDownloadBusy] = useState(false);

  const ask = async () => {
    const effectiveQuestion = q.trim() || (mode === "ai" ? DEFAULT_AI_SUMMARY_PROMPT : "");
    if (!effectiveQuestion) return;

    setBusy(true);
    setResponse(null);

    try {
      const r = await fetch(`${API}/runs/${runId}/query`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: effectiveQuestion, mode, response_language: "source" }),
      });

      if (!r.ok) throw new Error(await readResponseError(r));

      const data = await r.json();
      setResponse(data);
    } catch (err) {
      setResponse({ answer: friendlyFetchError(err), rows: [] });
    } finally {
      setBusy(false);
    }
  };

  const rows = response?.rows || [];
  const columns = response?.columns || inferColumns(rows);
  const responseConfidence = normalizeConfidence(response?.confidence);
  const canDownloadAiSummary = response?.mode === "ai" && (Boolean(response?.answer) || rows.length > 0);

  const selectMode = (nextMode) => {
    setMode(nextMode);
    setResponse(null);
    if (nextMode === "ai" && !q.trim()) {
      setQ(DEFAULT_AI_SUMMARY_PROMPT);
    }
  };

  const downloadAiSummary = async () => {
    if (!canDownloadAiSummary || downloadBusy) return;
    setDownloadBusy(true);

    try {
      const r = await fetch(`${API}/runs/${runId}/ai-summary.pdf`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: "AI Summary",
          answer: response?.answer || "",
          columns,
          rows,
          confidence: response?.confidence ?? null,
        }),
      });

      if (!r.ok) throw new Error(await readResponseError(r));

      const blob = await r.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `ai_summary_${runId}.pdf`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    } catch (err) {
      const message = friendlyFetchError(err);
      setResponse((prev) => ({
        ...(prev || {}),
        ai_error:
          message === "Not Found"
            ? "AI summary PDF export is not available on the current backend revision. Redeploy the backend with the latest api.py, then try again."
            : message,
      }));
    } finally {
      setDownloadBusy(false);
    }
  };

  return (
    <div>
      <div style={{ background: "#fbfaf6", border: "1px solid #ded6c8", borderRadius: 8, padding: 12, marginBottom: 12 }}>
        <div style={{ fontWeight: 650, marginBottom: 6 }}>Ask about the comparison</div>
        <div style={{ color: "#667085", fontSize: 13, marginBottom: 10 }}>
          Use fast query for exact evidence lookup, or AI Summarization for a business-ready answer from extracted and ranked comparison evidence.
        </div>

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 10 }}>
          <button
            type="button"
            onClick={() => selectMode("fast")}
            disabled={busy}
            style={modeButtonStyle(mode === "fast", busy)}
          >
            Natural language query
          </button>
          <button
            type="button"
            onClick={() => selectMode("ai")}
            disabled={busy}
            style={modeButtonStyle(mode === "ai", busy)}
          >
            AI Summarization
          </button>
        </div>

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 10 }}>
          {(mode === "ai" ? AI_PROMPT_PRESETS : FAST_QUERY_PRESETS).map((preset) => (
            <button
              key={preset.label}
              type="button"
              onClick={() => setQ(preset.prompt)}
              disabled={busy}
              style={presetButtonStyle(busy)}
              title={preset.prompt}
            >
              {preset.label}
            </button>
          ))}
        </div>

        {mode === "ai" && (
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 10 }}>
            <span style={{ color: "#667085", fontSize: 12 }}>
              Tip: for PCV/code review, ask for the exact baseline and revised values, for example: compare PCV 133456 with PCV 225376.
            </span>
          </div>
        )}

        <div style={{ display: "flex", gap: 8 }}>
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && ask()}
            placeholder={
              mode === "ai"
                ? DEFAULT_AI_SUMMARY_PROMPT
                : "Example: Find changes for PCV 205 or summarize key changes"
            }
            style={{ ...inputStyle, flex: 1 }}
          />
          <button onClick={ask} disabled={busy} style={primaryButtonStyle(busy)}>
            {busy ? (mode === "ai" ? "Summarizing" : "Searching") : "Ask"}
          </button>
        </div>
      </div>

      {response?.answer && (
        <div dir="auto" style={{ background: "#fffdf8", border: "1px solid #d8d0c3", borderLeft: "4px solid #2f5f4f", borderRadius: 8, padding: 12, marginBottom: 12, color: "#344054", lineHeight: 1.45 }}>
          {response.mode && (
            <div style={{ display: "flex", gap: 10, alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", marginBottom: 6 }}>
              <div style={{ color: "#667085", fontSize: 12, fontWeight: 650 }}>
                {response.mode === "ai" ? "AI Summarization" : "Natural language query"}
                {response.mode === "ai" && response.ai_called === true ? " - Successful" : ""}
                {response.mode === "ai" && response.ai_unavailable ? " - Unavailable" : ""}
                {response.mode === "ai" && typeof responseConfidence === "number" ? ` | Confidence ${Math.round(responseConfidence * 100)}%` : ""}
              </div>
              {canDownloadAiSummary && (
                <button
                  type="button"
                  onClick={downloadAiSummary}
                  disabled={downloadBusy}
                  style={secondaryButtonStyle(downloadBusy ? { opacity: 0.65, cursor: "default" } : {})}
                >
                  {downloadBusy ? "Preparing PDF" : "Download AI summary"}
                </button>
              )}
            </div>
          )}
          {response.answer}
          {response.ai_error && (
            <div style={{ marginTop: 8, color: COLORS.DELETED.text, fontSize: 12, fontWeight: 600 }}>
              {response.ai_error}
            </div>
          )}
        </div>
      )}

      {response?.usage && <AiUsageCard usage={response.usage} />}

      {response && rows.length === 0 && <EmptyState label="No supporting results were found." />}

      {rows.length > 0 && columns.length > 0 ? (
        <GenericRowsTable columns={columns} rows={rows} />
      ) : (
        rows.slice(0, 50).map((r, i) => <QueryResult key={i} r={r} />)
      )}
    </div>
  );
}

export function QueryResult({ r }) {
  const c = COLORS[r.change_type] || COLORS.MODIFIED;

  return (
    <div style={{ borderLeft: `4px solid ${c.border}`, background: "#fffdf8", padding: "10px 12px", marginBottom: 8, fontSize: 13, borderRadius: 7, boxShadow: "0 1px 1px rgba(20,20,20,.04)" }}>
      <div style={{ fontWeight: 650, marginBottom: 5 }}>
        <ChangeBadge type={rowChangeType(r)} />
        {r.stable_key && <code style={{ marginLeft: 6 }}>{r.stable_key}</code>}
        <span style={{ color: "#667085", marginLeft: 8 }}>{r.citation || `page ${r.page || "-"} - ${r.block_type || "block"}`}</span>
      </div>
      {r.before && <div style={{ color: COLORS.DELETED.text }}>Before: {trim(r.before, 260)}</div>}
      {r.after && <div style={{ color: COLORS.ADDED.text }}>After: {trim(r.after, 260)}</div>}
      {r.field_changes?.length > 0 && <FieldDiffTable rows={r.field_changes} />}
    </div>
  );
}
