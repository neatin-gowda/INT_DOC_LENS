import React, { useState, useEffect, useRef } from "react";
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
  EmptyState,
  normalizeConfidence,
  rowChangeType,
  ChangeBadge,
  trim,
  AI_PROMPT_PRESETS,
  FAST_QUERY_PRESETS,
  inferColumns,
} from "./common.jsx";

// Cost estimator based on prompt/completion token rates per 1M tokens
export const estimateCost = (modelName, promptTokens, completionTokens) => {
  const model = String(modelName || "").toLowerCase();
  let inputRate = 0.0;
  let outputRate = 0.0;

  if (model.includes("mini") || model.includes("gpt-4o-mini")) {
    inputRate = 0.15;
    outputRate = 0.60;
  } else if (model.includes("gpt-4") || model.includes("gpt4") || model.includes("gpt-4o")) {
    inputRate = 2.50;
    outputRate = 10.00;
  } else {
    // Default to gpt-4o rates as the standard high-end model
    inputRate = 2.50;
    outputRate = 10.00;
  }

  return ((promptTokens * inputRate) + (completionTokens * outputRate)) / 1000000;
};

// Helper to format integers with commas
const formatInt = (num) => {
  return Number(num || 0).toLocaleString();
};

// Local helper to parse page numbers from citation strings
const parsePageNumber = (val) => {
  if (typeof val !== "string") {
    if (typeof val === "number") return val;
    return null;
  }
  const match = val.match(/p\.\s*(\d+)/i) || val.match(/page\s*(\d+)/i) || val.match(/(\d+)/);
  return match ? parseInt(match[1], 10) : null;
};

// Custom Scoped CSS Styles injected directly into the component
const ChatStyles = () => (
  <style>{`
    .query-panel-workspace {
      display: grid;
      grid-template-columns: 1fr 320px;
      gap: 20px;
      align-items: start;
    }

    @media (max-width: 1024px) {
      .query-panel-workspace {
        grid-template-columns: 1fr;
      }
    }

    .chat-container-panel {
      display: flex;
      flex-direction: column;
      gap: 14px;
      background: var(--surface-sunken);
      border: 1px solid var(--border);
      border-radius: var(--radius-lg, 16px);
      padding: 20px;
    }

    .chat-history-log {
      min-height: 480px;
      max-height: 60vh;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      gap: 16px;
      padding-right: 6px;
    }

    .chat-bubble {
      display: flex;
      flex-direction: column;
      gap: 10px;
      padding: 14px 16px;
      border-radius: 14px;
      border: 1px solid var(--border);
      background: var(--surface-raised);
      color: var(--text-primary);
      box-shadow: var(--shadow-soft);
      max-width: 90%;
      transition: all 0.2s ease-in-out;
    }

    .chat-bubble.user {
      align-self: flex-end;
      background: var(--brand-navy, #0a1f4d);
      border-color: rgba(255, 255, 255, 0.12);
      color: #ffffff;
      border-bottom-right-radius: 2px;
    }

    .theme-light .chat-bubble.user {
      background: #0f2d59;
    }

    .chat-bubble.assistant {
      align-self: flex-start;
      background: var(--surface-raised);
      border-color: var(--border);
      border-bottom-left-radius: 2px;
    }

    .chat-bubble.error {
      border-color: rgba(239, 68, 68, 0.4);
      background: rgba(239, 68, 68, 0.03);
    }

    .chat-meta {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      font-size: 11px;
      color: var(--text-secondary);
      border-bottom: 1px solid rgba(0, 0, 0, 0.05);
      padding-bottom: 6px;
      margin-bottom: 2px;
    }

    .chat-bubble.user .chat-meta {
      color: rgba(255, 255, 255, 0.7);
      border-bottom-color: rgba(255, 255, 255, 0.1);
    }

    .chat-answer-text {
      font-size: 13.5px;
      line-height: 1.55;
      white-space: pre-wrap;
    }

    .chat-table-container {
      margin-top: 12px;
      border: 1px solid var(--border);
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
      background: var(--surface-raised);
      max-width: 100%;
      overflow-x: auto;
    }

    .chat-table-element {
      width: 100%;
      border-collapse: collapse;
      font-size: 12.5px;
      text-align: left;
    }

    .chat-table-element th {
      background: var(--surface-sunken);
      color: var(--text-primary);
      font-weight: 700;
      padding: 10px 12px;
      border-bottom: 2px solid var(--border);
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .chat-table-element td {
      padding: 10px 12px;
      border-bottom: 1px solid var(--border);
      color: var(--text-primary);
      vertical-align: top;
    }

    .chat-table-element tr:last-child td {
      border-bottom: none;
    }

    .chat-table-element tr:hover {
      background: rgba(0, 0, 0, 0.02);
    }

    .diff-container {
      display: flex;
      flex-direction: column;
      gap: 5px;
      margin: 4px 0;
    }

    .diff-block {
      border-radius: 6px;
      padding: 6px 10px;
      font-size: 12px;
      line-height: 1.45;
    }

    .diff-block-deleted {
      background: rgba(239, 68, 68, 0.07);
      border-left: 3px solid #ef4444;
      color: var(--diff-deleted-text, #b91c1c);
    }

    .diff-block-added {
      background: rgba(34, 197, 94, 0.07);
      border-left: 3px solid #22c55e;
      color: var(--diff-added-text, #15803d);
    }

    .verify-page-badge {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      background: var(--brand-orange, #c45510);
      color: #ffffff !important;
      border: none;
      border-radius: 6px;
      padding: 4px 10px;
      font-size: 11px;
      font-weight: 700;
      cursor: pointer;
      white-space: nowrap;
      transition: all 0.2s ease;
    }

    .verify-page-badge:hover {
      background: #a3430c;
      transform: translateY(-1px);
    }

    .verify-page-badge:active {
      transform: translateY(0);
    }

    .evidence-layout-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px;
      margin-top: 8px;
    }

    @media (max-width: 640px) {
      .evidence-layout-grid {
        grid-template-columns: 1fr;
      }
    }

    .evidence-pane-card {
      border: 1px solid var(--border);
      border-radius: 8px;
      padding: 10px;
      font-size: 12px;
      background: var(--surface-sunken);
    }

    .pulse-loader {
      display: inline-flex;
      gap: 4px;
      align-items: center;
    }

    .pulse-dot {
      width: 6px;
      height: 6px;
      background: var(--brand-orange);
      border-radius: 50%;
      animation: pulseAnimation 1.4s infinite ease-in-out both;
    }

    .pulse-dot:nth-child(1) { animation-delay: -0.32s; }
    .pulse-dot:nth-child(2) { animation-delay: -0.16s; }

    @keyframes pulseAnimation {
      0%, 80%, 100% { transform: scale(0); }
      40% { transform: scale(1); }
    }
  `}</style>
);

// Cell-level renderer to handle rich comparisons and citations inside tables
function ChatCellRenderer({ col, val, onGoBoth }) {
  if (val === null || val === undefined) {
    return <span style={{ color: "var(--text-secondary)", fontStyle: "italic" }}>-</span>;
  }

  const strVal = String(val);

  // Check if cell is a before/after value diff block
  const hasBefore = strVal.includes("Before:");
  const hasAfter = strVal.includes("After:");
  if (hasBefore || hasAfter) {
    let before = "";
    let after = "";
    const beforeMatch = strVal.match(/Before:\s*([\s\S]*?)(?=After:|$)/i);
    const afterMatch = strVal.match(/After:\s*([\s\S]*?)$/i);

    if (beforeMatch) before = beforeMatch[1].trim();
    if (afterMatch) after = afterMatch[1].trim();

    if (!before && !after && strVal.includes("->")) {
      const parts = strVal.split("->");
      before = parts[0].trim();
      after = parts[1].trim();
    }

    return (
      <div className="diff-container">
        {before && (
          <div className="diff-block diff-block-deleted">
            <span style={{ fontSize: 9, textTransform: "uppercase", display: "block", fontWeight: 700, opacity: 0.7 }}>Baseline</span>
            {before}
          </div>
        )}
        {after && (
          <div className="diff-block diff-block-added">
            <span style={{ fontSize: 9, textTransform: "uppercase", display: "block", fontWeight: 700, opacity: 0.7 }}>Revised</span>
            {after}
          </div>
        )}
      </div>
    );
  }

  // Handle change types
  const lowerVal = strVal.toLowerCase();
  if (col.toLowerCase().includes("change_type") || ["added", "deleted", "modified", "unchanged", "match"].includes(lowerVal)) {
    let badgeType = "MODIFIED";
    if (lowerVal.includes("add")) badgeType = "ADDED";
    if (lowerVal.includes("del") || lowerVal.includes("rem")) badgeType = "DELETED";
    if (lowerVal.includes("unch") || lowerVal.includes("match")) badgeType = "UNCHANGED";
    return <ChangeBadge type={badgeType} />;
  }

  // Parse page citation links
  const pageNum = parsePageNumber(strVal);
  const isCitationCol = col.toLowerCase().includes("evidence") || col.toLowerCase().includes("citation") || col.toLowerCase().includes("page");

  if (pageNum && (isCitationCol || lowerVal.includes("page") || lowerVal.includes("p."))) {
    return (
      <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
        <span>{strVal}</span>
        {onGoBoth && (
          <button
            type="button"
            className="verify-page-badge"
            onClick={() => onGoBoth(pageNum)}
          >
            Verify Page {pageNum} →
          </button>
        )}
      </div>
    );
  }

  return <span style={{ whiteSpace: "pre-wrap" }}>{strVal}</span>;
}

// Structured Table component returned from the AI model
function ChatStructuredTable({ columns, rows, onGoBoth }) {
  if (!rows || !rows.length) return null;
  const cols = columns && columns.length ? columns : Object.keys(rows[0]);

  return (
    <div className="chat-table-container">
      <table className="chat-table-element">
        <thead>
          <tr>
            {cols.map((col) => (
              <th key={col}>{col.replace(/_/g, " ")}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rIdx) => (
            <tr key={rIdx}>
              {cols.map((col) => (
                <td key={col}>
                  <ChatCellRenderer col={col} val={row[col]} onGoBoth={onGoBoth} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Side-by-Side detailed Evidence Card (NL Query / Fast search results)
function ChatEvidenceCard({ r, onGoBoth }) {
  const citePage = r.page_base || r.page_target || r.page;
  const changeType = r.change_type || rowChangeType(r);

  return (
    <div style={{
      background: "var(--surface-raised)",
      border: "1px solid var(--border)",
      borderRadius: "12px",
      padding: "14px",
      display: "flex",
      flexDirection: "column",
      gap: "12px",
      boxShadow: "0 2px 4px rgba(0,0,0,0.02)"
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <ChangeBadge type={changeType} />
          {r.stable_key && (
            <code style={{ fontSize: "11px", fontWeight: "700", background: "var(--surface-sunken)", padding: "2px 6px", border: "1px solid var(--border)", borderRadius: "4px" }}>
              {r.stable_key}
            </code>
          )}
          <span style={{ fontSize: "12.5px", fontWeight: "600", color: "var(--text-secondary)" }}>
            {r.area || r.block_type || "Change"}
          </span>
        </div>
        {r.confidence && (
          <span style={{
            fontSize: "11px",
            background: "rgba(201,111,26,0.1)",
            color: "var(--brand-orange)",
            padding: "2px 6px",
            borderRadius: "4px",
            fontWeight: "650"
          }}>
            {Math.round(normalizeConfidence(r.confidence) * 100)}% Match
          </span>
        )}
      </div>

      {(r.before || r.after) && (
        <div className="evidence-layout-grid">
          {r.before ? (
            <div className="evidence-pane-card" style={{ borderLeft: "3px solid #ef4444" }}>
              <span style={{ fontSize: "9px", textTransform: "uppercase", display: "block", fontWeight: "700", color: "#b91c1c", marginBottom: "4px", opacity: 0.8 }}>Baseline</span>
              <p style={{ margin: 0, lineHeight: "1.45" }}>{r.before}</p>
            </div>
          ) : (
            <div className="evidence-pane-card" style={{ borderStyle: "dashed", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--text-secondary)", fontStyle: "italic" }}>
              Not present in baseline
            </div>
          )}

          {r.after ? (
            <div className="evidence-pane-card" style={{ borderLeft: "3px solid #22c55e" }}>
              <span style={{ fontSize: "9px", textTransform: "uppercase", display: "block", fontWeight: "700", color: "#15803d", marginBottom: "4px", opacity: 0.8 }}>Revised</span>
              <p style={{ margin: 0, lineHeight: "1.45" }}>{r.after}</p>
            </div>
          ) : (
            <div className="evidence-pane-card" style={{ borderStyle: "dashed", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--text-secondary)", fontStyle: "italic" }}>
              Removed from revised
            </div>
          )}
        </div>
      )}

      {r.field_changes && r.field_changes.length > 0 && (
        <div style={{ border: "1px solid var(--border)", borderRadius: "8px", overflow: "hidden", marginTop: "4px" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "11px" }}>
            <thead>
              <tr style={{ background: "var(--surface-sunken)", borderBottom: "1px solid var(--border)" }}>
                <th style={{ padding: "6px 8px", fontWeight: "750", color: "var(--text-primary)" }}>Column / Field</th>
                <th style={{ padding: "6px 8px", fontWeight: "750", color: "var(--text-primary)" }}>Before</th>
                <th style={{ padding: "6px 8px", fontWeight: "750", color: "var(--text-primary)" }}>After</th>
              </tr>
            </thead>
            <tbody>
              {r.field_changes.map((fc, idx) => (
                <tr key={idx} style={{ borderBottom: idx === r.field_changes.length - 1 ? "none" : "1px solid var(--border)" }}>
                  <td style={{ padding: "6px 8px", fontWeight: "600", color: "var(--text-primary)" }}>{fc.field}</td>
                  <td style={{ padding: "6px 8px", color: "var(--diff-deleted-text)", background: "rgba(239, 68, 68, 0.02)" }}>{fc.before || "-"}</td>
                  <td style={{ padding: "6px 8px", color: "var(--diff-added-text)", background: "rgba(34, 197, 94, 0.02)" }}>{fc.after || "-"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "4px" }}>
        <small style={{ color: "var(--text-secondary)", fontSize: "11px" }}>
          {r.citation || `page ${citePage || "-"}`}
        </small>
        {onGoBoth && citePage && (
          <button
            type="button"
            className="verify-page-badge"
            onClick={() => onGoBoth(citePage)}
          >
            Verify Page {citePage} →
          </button>
        )}
      </div>
    </div>
  );
}

// Pulsing Thinking indicator for AI response generation
const ThinkingIndicator = () => (
  <div className="chat-bubble assistant" style={{ padding: "14px 16px" }}>
    <div className="chat-meta">
      <span>AI Agent</span>
    </div>
    <div className="pulse-loader">
      <span style={{ fontSize: "13px", color: "var(--text-secondary)", fontWeight: "550" }}>Synthesizing comparison insights</span>
      <div className="pulse-dot"></div>
      <div className="pulse-dot"></div>
      <div className="pulse-dot"></div>
    </div>
  </div>
);

export function QueryPanel({ runId, onGoBoth }) {
  const [q, setQ] = useState("");
  const [mode, setMode] = useState("fast"); // Default is Natural Language Query
  const [modelSelect, setModelSelect] = useState("");
  const [customModel, setCustomModel] = useState("");
  
  // Persist conversation history in sessionStorage per run
  const [messages, setMessages] = useState(() => {
    try {
      const saved = sessionStorage.getItem(`doculens_chat_messages_${runId}`);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [busy, setBusy] = useState(false);
  const [expandedEvidence, setExpandedEvidence] = useState({});

  const [activeModel, setActiveModel] = useState("");
  const [availableModels, setAvailableModels] = useState([]);

  const chatEndRef = useRef(null);

  // Sync messages back to sessionStorage
  useEffect(() => {
    try {
      sessionStorage.setItem(`doculens_chat_messages_${runId}`, JSON.stringify(messages));
    } catch (e) {
      console.error(e);
    }
  }, [messages, runId]);

  // Load configured model from health check
  useEffect(() => {
    fetch(`${API}/ai-health`)
      .then((r) => r.json())
      .then((data) => {
        if (data.configured && data.deployment) {
          setActiveModel(data.deployment);
          setAvailableModels([data.deployment]);
          setModelSelect(data.deployment);
        } else {
          setActiveModel("Deterministic Only");
        }
      })
      .catch(() => {
        setActiveModel("Deterministic Only");
      });
  }, []);

  // Auto scroll to chat bottom
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, busy, expandedEvidence]);

  const selectedModel = modelSelect === "custom" ? customModel.trim() || "custom-slm" : modelSelect || activeModel || "gpt-4o";

  const ask = async () => {
    const questionText = q.trim();
    if (!questionText) return;

    const userMessageId = `msg-user-${Date.now()}`;
    const aiMessageId = `msg-ai-${Date.now()}`;

    const userMsg = {
      id: userMessageId,
      sender: "user",
      text: questionText,
      timestamp: new Date().toLocaleTimeString(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setQ("");
    setBusy(true);

    try {
      const r = await fetch(`${API}/runs/${runId}/query`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          question: questionText,
          mode: mode,
          response_language: "source",
          model_name: mode === "ai" ? selectedModel : null,
        }),
      });

      if (!r.ok) throw new Error(await readResponseError(r));

      const data = await r.json();

      const aiMsg = {
        id: aiMessageId,
        sender: "ai",
        text: data.answer || `I found ${data.rows?.length || 0} matching changes.`,
        mode: data.mode || mode,
        model: mode === "ai" ? selectedModel : null,
        rows: data.rows || [],
        columns: data.columns || [],
        confidence: data.confidence,
        usage: data.usage,
        ai_called: data.ai_called,
        ai_unavailable: data.ai_unavailable,
        ai_error: data.ai_error,
        timestamp: new Date().toLocaleTimeString(),
      };

      setMessages((prev) => [...prev, aiMsg]);
    } catch (err) {
      const errorMsg = {
        id: aiMessageId,
        sender: "ai",
        text: friendlyFetchError(err),
        mode: mode,
        rows: [],
        timestamp: new Date().toLocaleTimeString(),
        isError: true,
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setBusy(false);
    }
  };

  const clearHistory = () => {
    setMessages([]);
    setExpandedEvidence({});
  };

  const toggleEvidence = (msgId) => {
    setExpandedEvidence((prev) => ({
      ...prev,
      [msgId]: !prev[msgId]
    }));
  };

  // Calculate cumulative usage stats for the session
  const sessionStats = messages.reduce(
    (acc, msg) => {
      if (msg.sender === "ai" && msg.usage) {
        acc.prompt += Number(msg.usage.prompt_tokens || 0);
        acc.completion += Number(msg.usage.completion_tokens || 0);
        acc.total += Number(msg.usage.total_tokens || 0);
        acc.calls += 1;
        acc.cost += estimateCost(msg.model, msg.usage.prompt_tokens, msg.usage.completion_tokens);
      }
      return acc;
    },
    { prompt: 0, completion: 0, total: 0, calls: 0, cost: 0.0 }
  );

  return (
    <div className="query-panel-workspace">
      <ChatStyles />
      
      {/* Left Column: Chat Log and Input */}
      <div className="chat-container-panel">
        <div className="chat-history-log">
          {messages.length === 0 ? (
            <EmptyState label="No queries submitted. Choose a preset or type below to start the conversation." />
          ) : (
            messages.map((msg) => {
              const isUser = msg.sender === "user";
              const isAi = msg.mode === "ai";
              
              return (
                <div
                  key={msg.id}
                  className={`chat-bubble ${isUser ? "user" : "assistant"}${msg.isError ? " error" : ""}`}
                >
                  <div className="chat-meta">
                    <span style={{ fontWeight: "700" }}>
                      {isUser ? "You" : (isAi ? "AI Summarization Agent" : "Deterministic Search")}
                    </span>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      {!isUser && msg.confidence && (
                        <span style={{
                          background: "rgba(201,111,26,0.1)",
                          color: "var(--brand-orange)",
                          padding: "1px 5px",
                          borderRadius: "4px",
                          fontWeight: "700",
                          fontSize: "10px"
                        }}>
                          {Math.round(normalizeConfidence(msg.confidence) * 100)}% Confidence
                        </span>
                      )}
                      <span>{msg.timestamp}</span>
                    </div>
                  </div>

                  <div className="chat-answer-text">
                    {msg.text}
                  </div>

                  {msg.ai_error && <div className="query-warning">Warning: {msg.ai_error}</div>}

                  {/* Render Structured Table if present */}
                  {msg.rows && msg.rows.length > 0 && (msg.columns && msg.columns.length > 0) && (
                    <ChatStructuredTable
                      columns={msg.columns}
                      rows={msg.rows}
                      onGoBoth={onGoBoth}
                    />
                  )}

                  {/* Render Supporting Evidence (NL query diff rows or as collapsible fallback) */}
                  {msg.rows && msg.rows.length > 0 && (!msg.columns || msg.columns.length === 0) && (
                    <div className="query-evidence">
                      <button
                        type="button"
                        className="key-audit-toggle"
                        onClick={() => toggleEvidence(msg.id)}
                      >
                        {expandedEvidence[msg.id] ? "Hide comparison evidence" : `Show comparison evidence (${msg.rows.length} rows)`}
                      </button>

                      {expandedEvidence[msg.id] && (
                        <div className="key-audit-list" style={{ marginTop: 8 }}>
                          {msg.rows.map((r, i) => (
                            <ChatEvidenceCard key={i} r={r} onGoBoth={onGoBoth} />
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  {!isUser && msg.usage && (
                    <div className="query-usage">
                      <span>
                        Model: <code>{msg.model || "default"}</code> · {formatInt(msg.usage.total_tokens)} tokens ({formatInt(msg.usage.prompt_tokens)} in / {formatInt(msg.usage.completion_tokens)} out)
                      </span>
                    </div>
                  )}
                </div>
              );
            })
          )}
          {busy && <ThinkingIndicator />}
          <div ref={chatEndRef} />
        </div>

        {/* Input box */}
        <div style={{ display: "flex", gap: 10, marginTop: 4 }}>
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && ask()}
            placeholder={
              mode === "ai"
                ? `Ask Agent utilizing active model...`
                : "Search baseline vs revised differences... e.g. PCV 205 changes"
            }
            style={{ ...inputStyle, flex: 1 }}
          />
          <button onClick={ask} disabled={busy} style={primaryButtonStyle(busy)}>
            {busy ? "Thinking..." : "Ask"}
          </button>
        </div>
      </div>

      {/* Right Column: Sidebar Stats and Controls */}
      <div style={{ display: "grid", gap: 16 }}>
        
        {/* Connection status card */}
        <div className="profile-card" style={{ padding: 14 }}>
          <h4 style={{ margin: "0 0 10px", fontSize: 13, fontWeight: 700, color: "var(--text-primary)" }}>Connection Status</h4>
          <p style={{ margin: 0, fontSize: 12.5 }}>
            <strong>Query Mode:</strong>
            <span style={{ fontSize: 12, display: "block", marginTop: 2, color: "var(--text-secondary)" }}>
              {mode === "ai" ? "Advanced AI Chat" : "Natural Language Query"}
            </span>
          </p>
          <p style={{ margin: "10px 0 0", fontSize: 12.5 }}>
            <strong>Active AI Model:</strong>
            <span style={{ fontSize: 11, fontFamily: "monospace", display: "block", marginTop: 2, color: "var(--brand-orange)" }}>
              {activeModel || "Deterministic (Local Fallback)"}
            </span>
          </p>
        </div>

        {/* Mode Toggle & Selector */}
        <div className="profile-card" style={{ padding: 14 }}>
          <h4 style={{ margin: "0 0 10px", fontSize: 13, fontWeight: 700, color: "var(--text-primary)" }}>Query Engine</h4>
          
          <div className="query-mode-toggle" style={{ width: "100%", justifyContent: "stretch", marginBottom: 6 }}>
            <button
              type="button"
              className={mode === "fast" ? "active" : ""}
              onClick={() => setMode("fast")}
              disabled={busy}
              style={{ flex: 1 }}
            >
              NL Query
            </button>
            <button
              type="button"
              className={mode === "ai" ? "active" : ""}
              onClick={() => setMode("ai")}
              disabled={busy}
              style={{ flex: 1 }}
            >
              AI Chat
            </button>
          </div>

          {mode === "ai" && (
            <div className="query-model-row" style={{ marginTop: 12 }}>
              <label style={{ fontSize: 11, fontWeight: 650, color: "var(--text-secondary)" }}>Select AI Model:</label>
              <select
                value={modelSelect}
                onChange={(e) => setModelSelect(e.target.value)}
                disabled={busy}
                style={{ width: "100%", padding: "8px 10px", fontSize: 12, borderRadius: 8 }}
              >
                {availableModels.map(m => (
                  <option key={m} value={m}>{m} (Active Deploy)</option>
                ))}
                {!availableModels.includes("gpt-4o") && <option value="gpt-4o">gpt-4o (Azure OpenAI)</option>}
                <option value="phi-3-mini">phi-3-mini (Local SLM)</option>
                <option value="custom">custom (Specify)</option>
              </select>
            </div>
          )}

          {mode === "ai" && modelSelect === "custom" && (
            <div style={{ marginTop: 8 }}>
              <input
                value={customModel}
                onChange={(e) => setCustomModel(e.target.value)}
                placeholder="Custom deployment name..."
                style={{ ...inputStyle, width: "100%", fontSize: 11, padding: "6px 8px" }}
              />
            </div>
          )}
        </div>

        {/* Presets Card */}
        <div className="profile-card" style={{ padding: 14 }}>
          <h4 style={{ margin: "0 0 10px", fontSize: 13, fontWeight: 700, color: "var(--text-primary)" }}>Quick Preset Actions</h4>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {(mode === "ai" ? AI_PROMPT_PRESETS : FAST_QUERY_PRESETS).map((preset) => (
              <button
                key={preset.label}
                type="button"
                onClick={() => setQ(preset.prompt)}
                disabled={busy}
                style={{
                  textAlign: "left",
                  background: "var(--surface-sunken)",
                  border: "1px solid var(--border)",
                  borderRadius: 8,
                  padding: "8px 10px",
                  fontSize: 12,
                  cursor: "pointer",
                  color: "var(--text-primary)",
                  fontWeight: 600,
                  transition: "background 0.2s"
                }}
                title={preset.prompt}
              >
                {preset.label}
              </button>
            ))}
          </div>
        </div>

        {/* Cumulative Stats Card */}
        {sessionStats.total > 0 && (
          <div className="profile-card" style={{ padding: 14, background: "var(--surface-raised)" }}>
            <h4 style={{ margin: "0 0 8px", fontSize: 13, fontWeight: 700, color: "var(--text-primary)" }}>Cost & Usage Tracker</h4>
            <div className="query-usage-strip" style={{ flexDirection: "column", alignItems: "stretch", padding: 10, gap: 6 }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span>Total Calls:</span>
                <strong>{sessionStats.calls}</strong>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span>Total Tokens:</span>
                <strong>{formatInt(sessionStats.total)}</strong>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", marginTop: 4, paddingTop: 6, borderTop: "1px dashed var(--border)" }}>
                <span>Est. Cost:</span>
                <strong style={{ color: "var(--brand-orange)" }}>${sessionStats.cost.toFixed(5)}</strong>
              </div>
            </div>
          </div>
        )}

        {/* Clear History */}
        {messages.length > 0 && (
          <button
            type="button"
            onClick={clearHistory}
            style={{
              padding: "8px 12px",
              borderRadius: 8,
              border: "1px solid var(--border)",
              background: "var(--surface-raised)",
              color: "var(--text-secondary)",
              fontSize: 12,
              fontWeight: 650,
              cursor: "pointer",
              transition: "all 0.2s"
            }}
          >
            Clear Conversation History
          </button>
        )}
      </div>
    </div>
  );
}

// Keep export QueryResult so we don't break any external imports
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
      {r.field_changes?.length > 0 && <table style={{ width: "100%", marginTop: 5 }}><tbody>
        {r.field_changes.map((fc, i) => (
          <tr key={i}><td><strong>{fc.field}</strong></td><td>{fc.before}</td><td>{fc.after}</td></tr>
        ))}
      </tbody></table>}
    </div>
  );
}
