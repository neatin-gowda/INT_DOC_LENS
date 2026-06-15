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
  EmptyState,
  normalizeConfidence,
  rowChangeType,
  ChangeBadge,
  trim,
  AI_PROMPT_PRESETS,
  FAST_QUERY_PRESETS,
  inferColumns,
} from "./common.jsx";
import { GenericRowsTable, FieldDiffTable } from "./tables.jsx";

// Helper to format integers with commas
const formatInt = (num) => {
  return Number(num || 0).toLocaleString();
};

// Cost estimator based on prompt/completion token rates per 1M tokens
export const estimateCost = (modelName, promptTokens, completionTokens) => {
  const model = String(modelName || "").toLowerCase();
  let inputRate = 0.0;
  let outputRate = 0.0;

  if (model.includes("mini") || model.includes("gpt-4o-mini")) {
    inputRate = 0.15;
    outputRate = 0.60;
  } else if (model.includes("gpt-4") || model.includes("gpt4")) {
    inputRate = 2.50;
    outputRate = 10.00;
  } else {
    // Other models default to gpt-4o-mini rate as a cost-effective standard
    inputRate = 0.15;
    outputRate = 0.60;
  }

  return ((promptTokens * inputRate) + (completionTokens * outputRate)) / 1000000;
};

export function QueryPanel({ runId }) {
  const [q, setQ] = useState("");
  const [mode, setMode] = useState("ai"); // 'ai' or 'fast'
  const [modelSelect, setModelSelect] = useState("gpt-4o-mini");
  const [customModel, setCustomModel] = useState("");
  const [messages, setMessages] = useState([]);
  const [busy, setBusy] = useState(false);
  const [expandedEvidence, setExpandedEvidence] = useState({}); // msgId -> boolean

  const selectedModel = modelSelect === "custom" ? customModel.trim() || "custom-slm" : modelSelect;

  const ask = async () => {
    const questionText = q.trim();
    if (!questionText) return;

    const userMessageId = `msg-user-${Date.now()}`;
    const aiMessageId = `msg-ai-${Date.now()}`;

    // Append user message immediately
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
        columns: data.columns || inferColumns(data.rows || []),
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

  // Calculate accumulated session stats
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
    <div>
      {/* Control panel: mode selection and SLM choice */}
      <div style={{ background: "#fbfaf6", border: "1px solid #ded6c8", borderRadius: 8, padding: 12, marginBottom: 12 }}>
        <div style={{ fontWeight: 650, marginBottom: 6 }}>Ask about the comparison</div>
        
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center", marginBottom: 12 }}>
          {/* Mode toggle buttons */}
          <div style={{ display: "flex", gap: 6 }}>
            <button
              type="button"
              onClick={() => setMode("fast")}
              disabled={busy}
              style={modeButtonStyle(mode === "fast", busy)}
            >
              NL Query (Fast & Non-AI)
            </button>
            <button
              type="button"
              onClick={() => setMode("ai")}
              disabled={busy}
              style={modeButtonStyle(mode === "ai", busy)}
            >
              Advanced AI Chat
            </button>
          </div>

          {/* Model selector dropdown (AI mode only) */}
          {mode === "ai" && (
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <span style={{ fontSize: 12, color: "#475467", fontWeight: 600 }}>Model:</span>
              <select
                value={modelSelect}
                onChange={(e) => setModelSelect(e.target.value)}
                disabled={busy}
                style={{
                  padding: "5px 8px",
                  borderRadius: 6,
                  border: "1px solid #ded6c8",
                  background: "#fff",
                  fontSize: 12,
                  outline: "none",
                  cursor: "pointer"
                }}
              >
                <option value="gpt-4o-mini">gpt-4o-mini (Lightweight & Cost-effective)</option>
                <option value="gpt-4o">gpt-4o (Advanced Reasoning)</option>
                <option value="phi-3-mini">phi-3-mini (Local SLM)</option>
                <option value="custom">custom (Specify below)</option>
              </select>
            </div>
          )}
        </div>

        {/* Custom model name text input */}
        {mode === "ai" && modelSelect === "custom" && (
          <div style={{ marginBottom: 10 }}>
            <input
              value={customModel}
              onChange={(e) => setCustomModel(e.target.value)}
              placeholder="Enter custom model deployment name..."
              style={{ ...inputStyle, width: "100%", maxWidth: 300, padding: "4px 8px", fontSize: 12 }}
            />
          </div>
        )}

        {/* Presets */}
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 12 }}>
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

        {/* Input box */}
        <div style={{ display: "flex", gap: 8 }}>
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && ask()}
            placeholder={
              mode === "ai"
                ? "Ask the AI agent..."
                : "Search details... e.g. changes for PCV 205"
            }
            style={{ ...inputStyle, flex: 1 }}
          />
          <button onClick={ask} disabled={busy} style={primaryButtonStyle(busy)}>
            {busy ? "Thinking..." : "Ask"}
          </button>
        </div>
      </div>

      {/* Running session token cost header */}
      {sessionStats.total > 0 && (
        <div style={{
          display: "flex", 
          justifyContent: "space-between", 
          alignItems: "center", 
          background: "#f2efe9", 
          border: "1px solid #d8d0c3", 
          borderRadius: 8, 
          padding: "8px 12px", 
          marginBottom: 12, 
          fontSize: 12, 
          color: "#344054"
        }}>
          <div>
            <strong>Session Total AI Usage:</strong> {formatInt(sessionStats.total)} tokens ({sessionStats.calls} calls) · {formatInt(sessionStats.prompt)} input / {formatInt(sessionStats.completion)} output
          </div>
          <div style={{ fontWeight: 650, color: "#2f5f4f" }}>
            Est. Cost: ${sessionStats.cost.toFixed(5)}
          </div>
        </div>
      )}

      {/* Conversation message history log */}
      <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 12 }}>
        {messages.map((msg) => {
          const isUser = msg.sender === "user";
          const bubbleBg = isUser ? "#2f5f4f" : "#fffdf8";
          const bubbleColor = isUser ? "#ffffff" : "#344054";
          const alignSelf = isUser ? "flex-end" : "flex-start";
          const borderSide = isUser ? "none" : "4px solid #2f5f4f";
          const shadow = "0 1px 2px rgba(20,20,20,.05)";
          
          return (
            <div
              key={msg.id}
              style={{
                alignSelf: alignSelf,
                maxWidth: "85%",
                background: bubbleBg,
                color: bubbleColor,
                borderLeft: borderSide,
                border: isUser ? "none" : "1px solid #d8d0c3",
                borderRadius: 8,
                padding: "12px 14px",
                boxShadow: shadow,
                lineHeight: 1.45,
                fontSize: 13,
                wordBreak: "break-word"
              }}
            >
              {/* Message metadata row */}
              <div style={{ 
                display: "flex", 
                justifyContent: "space-between", 
                gap: 15, 
                fontSize: 10.5, 
                color: isUser ? "#a3c2b7" : "#667085", 
                marginBottom: 6,
                fontWeight: 650
              }}>
                <span>{isUser ? "You" : (msg.mode === "ai" ? "AI Summarization Agent" : "Deterministic Search")}</span>
                <span>{msg.timestamp}</span>
              </div>

              {/* Message text body */}
              <div dir="auto" style={{ whiteSpace: "pre-wrap" }}>
                {msg.text}
              </div>

              {/* Token utilization cost details for this message */}
              {msg.sender === "ai" && msg.usage && (
                <div style={{ 
                  marginTop: 8, 
                  paddingTop: 6, 
                  borderTop: "1px dashed #ded6c8", 
                  fontSize: 10.5, 
                  color: "#667085",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center"
                }}>
                  <span>
                    Model: <code>{msg.model || "default"}</code> · {formatInt(msg.usage.total_tokens)} tokens ({formatInt(msg.usage.prompt_tokens)} in / {formatInt(msg.usage.completion_tokens)} out)
                  </span>
                  <span style={{ fontWeight: 650, color: "#2f5f4f" }}>
                    Est. Cost: ${estimateCost(msg.model, msg.usage.prompt_tokens, msg.usage.completion_tokens).toFixed(5)}
                  </span>
                </div>
              )}

              {/* AI errors or warnings */}
              {msg.ai_error && (
                <div style={{ marginTop: 8, color: COLORS.DELETED.text, fontSize: 11, fontWeight: 650 }}>
                  Warning: {msg.ai_error}
                </div>
              )}

              {/* Supporting evidence dropdown accordion */}
              {msg.rows && msg.rows.length > 0 && (
                <div style={{ marginTop: 8 }}>
                  <button
                    type="button"
                    onClick={() => toggleEvidence(msg.id)}
                    style={{
                      background: "none",
                      border: "none",
                      color: "#2f5f4f",
                      fontSize: 11.5,
                      fontWeight: 650,
                      cursor: "pointer",
                      padding: 0,
                      textDecoration: "underline"
                    }}
                  >
                    {expandedEvidence[msg.id] ? "Hide supporting evidence" : `Show supporting evidence (${msg.rows.length} rows)`}
                  </button>

                  {expandedEvidence[msg.id] && (
                    <div style={{ marginTop: 8, background: "#faf8f2", padding: 8, borderRadius: 6, border: "1px solid #ded6c8", overflowX: "auto" }}>
                      {msg.columns && msg.columns.length > 0 ? (
                        <GenericRowsTable columns={msg.columns} rows={msg.rows} />
                      ) : (
                        msg.rows.slice(0, 50).map((r, i) => <QueryResult key={i} r={r} />)
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Bottom controls: clear history button */}
      {messages.length > 0 && (
        <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 12 }}>
          <button
            type="button"
            onClick={clearHistory}
            style={{
              padding: "4px 10px",
              borderRadius: 6,
              border: "1px solid #d8d0c3",
              background: "#fff",
              color: "#667085",
              fontSize: 11.5,
              cursor: "pointer"
            }}
          >
            Clear chat history
          </button>
        </div>
      )}

      {messages.length === 0 && (
        <EmptyState label="No queries submitted. Ask a preset question or type below to start the conversation." />
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
