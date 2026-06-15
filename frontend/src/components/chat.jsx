import React, { useMemo, useState } from "react";
import { API } from "../config.js";
import {
  ChangeBadge,
  EmptyState,
  friendlyFetchError,
  inferColumns,
  readResponseError,
  rowChangeType,
  trim,
} from "./common.jsx";
import { FieldDiffTable, GenericRowsTable } from "./tables.jsx";

const formatInt = (value) => Number(value || 0).toLocaleString();

function estimateCost(modelName, promptTokens, completionTokens) {
  const model = String(modelName || "").toLowerCase();
  const largeModel = model.includes("gpt-4") && !model.includes("mini");
  const inputRate = largeModel ? 2.5 : 0.15;
  const outputRate = largeModel ? 10 : 0.6;
  return ((Number(promptTokens || 0) * inputRate) + (Number(completionTokens || 0) * outputRate)) / 1000000;
}

export function QueryPanel({ runId }) {
  const [question, setQuestion] = useState("");
  const [mode, setMode] = useState("fast");
  const [modelName, setModelName] = useState("gpt-4o");
  const [messages, setMessages] = useState([]);
  const [expandedEvidence, setExpandedEvidence] = useState({});
  const [busy, setBusy] = useState(false);

  const sessionStats = useMemo(() => messages.reduce((acc, message) => {
    const usage = message.usage;
    if (!usage) return acc;
    acc.prompt += Number(usage.prompt_tokens || 0);
    acc.completion += Number(usage.completion_tokens || 0);
    acc.total += Number(usage.total_tokens || 0);
    acc.calls += 1;
    acc.cost += estimateCost(message.model, usage.prompt_tokens, usage.completion_tokens);
    return acc;
  }, { prompt: 0, completion: 0, total: 0, calls: 0, cost: 0 }), [messages]);

  const ask = async () => {
    const text = question.trim();
    if (!text || busy || !runId) return;

    const userId = `user-${Date.now()}`;
    const answerId = `answer-${Date.now()}`;
    setMessages((prev) => [...prev, {
      id: userId,
      role: "user",
      text,
      timestamp: new Date().toLocaleTimeString(),
    }]);
    setQuestion("");
    setBusy(true);

    try {
      const resp = await fetch(`${API}/runs/${runId}/query`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          question: text,
          mode,
          response_language: "source",
          model_name: mode === "ai" ? modelName : null,
        }),
      });
      if (!resp.ok) throw new Error(await readResponseError(resp));

      const data = await resp.json();
      setMessages((prev) => [...prev, {
        id: answerId,
        role: "assistant",
        text: data.answer || `I found ${data.rows?.length || 0} matching changes.`,
        rows: data.rows || [],
        columns: data.columns || inferColumns(data.rows || []),
        mode: data.mode || mode,
        model: mode === "ai" ? modelName : null,
        usage: data.usage,
        confidence: data.confidence,
        warning: data.ai_error || (data.ai_unavailable ? "AI response was unavailable; showing grounded evidence results." : ""),
        timestamp: new Date().toLocaleTimeString(),
      }]);
    } catch (err) {
      setMessages((prev) => [...prev, {
        id: answerId,
        role: "assistant",
        text: friendlyFetchError(err),
        rows: [],
        timestamp: new Date().toLocaleTimeString(),
        isError: true,
      }]);
    } finally {
      setBusy(false);
    }
  };

  return (
    <section className="query-workbench">
      {messages.length === 0 ? (
        <EmptyState label="Ask what changed, why it matters, or where the evidence appears in the compared documents." />
      ) : (
        <div className="query-chat-log">
          {messages.map((message) => (
            <article key={message.id} className={`query-message ${message.role}${message.isError ? " error" : ""}`}>
              <div className="query-message-meta">
                <span>{message.role === "user" ? "You" : message.mode === "ai" ? `AI answer${message.model ? ` - ${message.model}` : ""}` : "Natural language query"}</span>
                <span>{message.timestamp}</span>
              </div>
              <div className="query-message-text" dir="auto">{message.text}</div>
              {message.warning && <div className="query-warning">{message.warning}</div>}
              {message.usage && (
                <div className="query-usage">
                  <span>{formatInt(message.usage.total_tokens)} tokens</span>
                  <span>{formatInt(message.usage.prompt_tokens)} input / {formatInt(message.usage.completion_tokens)} output</span>
                </div>
              )}
              {message.rows?.length > 0 && (
                <div className="query-evidence">
                  <button
                    type="button"
                    className="key-audit-toggle"
                    onClick={() => setExpandedEvidence((prev) => ({ ...prev, [message.id]: !prev[message.id] }))}
                  >
                    {expandedEvidence[message.id] ? "Hide evidence" : `Show evidence (${message.rows.length})`}
                  </button>
                  {expandedEvidence[message.id] && (
                    <div className="query-results-shell">
                      {message.columns?.length ? (
                        <GenericRowsTable columns={message.columns} rows={message.rows} />
                      ) : (
                        message.rows.slice(0, 50).map((row, index) => <QueryResult key={index} row={row} />)
                      )}
                    </div>
                  )}
                </div>
              )}
            </article>
          ))}
        </div>
      )}

      {sessionStats.total > 0 && (
        <div className="query-usage-strip">
          <span>{formatInt(sessionStats.total)} tokens across {sessionStats.calls} AI call{sessionStats.calls === 1 ? "" : "s"}</span>
          <strong>${sessionStats.cost.toFixed(5)}</strong>
        </div>
      )}

      <div className="query-composer">
        <textarea
          value={question}
          onChange={(event) => setQuestion(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter" && !event.shiftKey) {
              event.preventDefault();
              ask();
            }
          }}
          placeholder="Ask about changed clauses, tables, dates, values, deleted text, or page evidence..."
          disabled={busy}
          rows={3}
        />
        <div className="query-composer-actions">
          <label>
            <span>Mode</span>
            <select value={mode} onChange={(event) => setMode(event.target.value)} disabled={busy}>
              <option value="fast">NL query</option>
              <option value="ai">AI chat</option>
            </select>
          </label>
          {mode === "ai" && (
            <label>
              <span>Model</span>
              <select value={modelName} onChange={(event) => setModelName(event.target.value)} disabled={busy}>
                <option value="gpt-4o">gpt-4o</option>
                <option value="gpt-4o-mini">gpt-4o-mini</option>
                <option value="phi-4-mini">phi-4-mini</option>
              </select>
            </label>
          )}
          <button type="button" className="primary-action compact" onClick={ask} disabled={busy || !question.trim()}>
            {busy ? "Working" : mode === "ai" ? "Ask AI" : "Ask"}
          </button>
        </div>
      </div>
    </section>
  );
}

export function QueryResult({ row }) {
  return (
    <div className="query-result">
      <div className="query-result-head">
        <ChangeBadge type={rowChangeType(row)} />
        {row.stable_key && <code>{row.stable_key}</code>}
        <span>{row.citation || `page ${row.page || "-"}`}</span>
      </div>
      {row.before && <div dir="auto"><strong>Before:</strong> {trim(row.before, 260)}</div>}
      {row.after && <div dir="auto"><strong>After:</strong> {trim(row.after, 260)}</div>}
      {row.field_changes?.length > 0 && <FieldDiffTable rows={row.field_changes} />}
    </div>
  );
}
