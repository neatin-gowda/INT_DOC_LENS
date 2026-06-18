import React, { useEffect, useMemo, useRef, useState } from "react";
import { Send, Sparkles } from "lucide-react";
import { API } from "../config.js";
import {
  ChangeBadge,
  friendlyFetchError,
  inferColumns,
  readResponseError,
  rowChangeType,
  trim,
} from "./common.jsx";
import { FieldDiffTable } from "./tables.jsx";

const MAX_STORED_MESSAGES = 30;
const ANSWER_PREVIEW_LIMIT = 1200;

const formatInt = (value) => Number(value || 0).toLocaleString();

function estimateCost(modelName, promptTokens, completionTokens) {
  const model = String(modelName || "").toLowerCase();
  const largeModel = model.includes("gpt-4") && !model.includes("mini");
  const inputRate = largeModel ? 2.5 : 0.15;
  const outputRate = largeModel ? 10 : 0.6;
  return ((Number(promptTokens || 0) * inputRate) + (Number(completionTokens || 0) * outputRate)) / 1000000;
}

function chatStorageKey(runId) {
  return `doculens_compare_chat_${runId}`;
}

function readStoredMessages(runId) {
  if (typeof window === "undefined" || !runId) return [];
  try {
    const raw = window.sessionStorage.getItem(chatStorageKey(runId));
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function writeStoredMessages(runId, messages) {
  if (typeof window === "undefined" || !runId) return;
  try {
    const compact = messages.slice(-MAX_STORED_MESSAGES).map((message) => ({
      id: message.id,
      role: message.role,
      text: message.text,
      rows: Array.isArray(message.rows) ? message.rows.slice(0, 20) : [],
      columns: Array.isArray(message.columns) ? message.columns.slice(0, 8) : [],
      mode: message.mode || "fast",
      model: message.model || null,
      usage: message.usage || null,
      confidence: message.confidence ?? null,
      warning: message.warning || "",
      timestamp: message.timestamp || "",
      isError: Boolean(message.isError),
    }));
    window.sessionStorage.setItem(chatStorageKey(runId), JSON.stringify(compact));
  } catch {
    // Conversation persistence is best effort.
  }
}

function availableChatModels(aiHealth) {
  const models = Array.isArray(aiHealth?.models) ? aiHealth.models : [];
  if (models.length) return models.filter((model) => model.kind === "chat" && model.configured !== false);
  if (aiHealth?.deployment) {
    return [{
      id: aiHealth.deployment,
      label: aiHealth.deployment,
      kind: "chat",
      configured: aiHealth.configured,
    }];
  }
  return [];
}

export function QueryPanel({ runId }) {
  const [question, setQuestion] = useState("");
  const [mode, setMode] = useState("fast");
  const [modelName, setModelName] = useState("");
  const [aiHealth, setAiHealth] = useState(null);
  const [messages, setMessages] = useState([]);
  const [expandedSources, setExpandedSources] = useState({});
  const [busy, setBusy] = useState(false);
  const [workingStep, setWorkingStep] = useState("");
  const chatEndRef = useRef(null);
  const skipNextPersistRef = useRef(false);
  const availableModels = useMemo(() => availableChatModels(aiHealth), [aiHealth]);

  useEffect(() => {
    let cancelled = false;
    const loadModels = async () => {
      try {
        const resp = await fetch(`${API}/ai-health`);
        if (!resp.ok) throw new Error(await readResponseError(resp));
        const data = await resp.json();
        if (cancelled) return;
        setAiHealth(data);
        const first = availableChatModels(data)[0];
        if (first?.id) setModelName((current) => current || first.id);
      } catch {
        if (!cancelled) setAiHealth({ ok: false, models: [], message: "AI model status is unavailable." });
      }
    };
    loadModels();
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    skipNextPersistRef.current = true;
    setMessages(readStoredMessages(runId));
    setExpandedSources({});
  }, [runId]);

  useEffect(() => {
    if (skipNextPersistRef.current) {
      skipNextPersistRef.current = false;
      return;
    }
    writeStoredMessages(runId, messages);
  }, [runId, messages]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [messages, busy, workingStep]);

  useEffect(() => {
    if (!busy) {
      setWorkingStep("");
      return undefined;
    }

    const steps = mode === "ai"
      ? ["Searching comparison evidence", "Reading relevant changes", "Writing a grounded answer"]
      : ["Searching comparison evidence", "Ranking relevant changes", "Preparing the answer"];
    let index = 0;
    setWorkingStep(steps[index]);
    const timer = window.setInterval(() => {
      index = Math.min(index + 1, steps.length - 1);
      setWorkingStep(steps[index]);
    }, 1500);
    return () => window.clearInterval(timer);
  }, [busy, mode]);

  const ask = async () => {
    const text = question.trim();
    if (!text || busy || !runId) return;

    const timestamp = new Date().toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
    setMessages((previous) => [...previous, {
      id: `user-${Date.now()}`,
      role: "user",
      text,
      timestamp,
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
          history: messages
            .filter((message) => message.role === "user" || message.role === "assistant")
            .slice(-8)
            .map((message) => ({ role: message.role, text: message.text })),
        }),
      });
      if (!resp.ok) throw new Error(await readResponseError(resp));

      const data = await resp.json();
      setMessages((previous) => [...previous, {
        id: `answer-${Date.now()}`,
        role: "assistant",
        text: data.answer || `I found ${data.rows?.length || 0} relevant changes.`,
        rows: data.rows || [],
        columns: data.columns || inferColumns(data.rows || []),
        mode: data.mode || mode,
        model: data.ai_deployment || (mode === "ai" ? modelName : null),
        usage: (data.mode || mode) === "ai" ? data.usage : null,
        confidence: data.confidence,
        warning: data.ai_error || (data.ai_unavailable ? "AI was unavailable, so this answer uses extracted comparison evidence." : ""),
        timestamp: new Date().toLocaleTimeString([], { hour: "numeric", minute: "2-digit" }),
      }]);
    } catch (error) {
      setMessages((previous) => [...previous, {
        id: `answer-${Date.now()}`,
        role: "assistant",
        text: friendlyFetchError(error),
        rows: [],
        timestamp: new Date().toLocaleTimeString([], { hour: "numeric", minute: "2-digit" }),
        isError: true,
      }]);
    } finally {
      setBusy(false);
    }
  };

  const clearConversation = () => {
    setMessages([]);
    setExpandedSources({});
    if (typeof window !== "undefined" && runId) {
      window.sessionStorage.removeItem(chatStorageKey(runId));
    }
  };

  return (
    <section className="comparison-chat">
      <div className="comparison-chat-toolbar">
        <span>{messages.length ? "Conversation saved with this comparison" : "Ask anything about this comparison"}</span>
        {messages.length > 0 && (
          <button type="button" onClick={clearConversation} disabled={busy}>
            Clear
          </button>
        )}
      </div>

      <div className="comparison-chat-thread">
        {messages.length === 0 && (
          <div className="comparison-chat-empty">
            <Sparkles aria-hidden="true" />
            <h4>What would you like to know?</h4>
            <p>Ask for a summary, a specific value, a changed table row, or the source page.</p>
          </div>
        )}

        {messages.map((message) => (
          <ChatMessage
            key={message.id}
            message={message}
            sourcesOpen={Boolean(expandedSources[message.id])}
            onToggleSources={() => setExpandedSources((previous) => ({
              ...previous,
              [message.id]: !previous[message.id],
            }))}
          />
        ))}

        {busy && (
          <div className="comparison-chat-message assistant thinking">
            <div className="comparison-chat-avatar"><Sparkles aria-hidden="true" /></div>
            <div className="comparison-chat-response">
              <div className="comparison-chat-thinking">
                <span /><span /><span />
                <em>{workingStep || "Thinking"}</em>
              </div>
            </div>
          </div>
        )}
        <div ref={chatEndRef} />
      </div>

      <div className="comparison-chat-composer">
        <textarea
          value={question}
          onChange={(event) => setQuestion(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter" && !event.shiftKey) {
              event.preventDefault();
              ask();
            }
          }}
          placeholder="Message this comparison"
          disabled={busy}
          rows={1}
        />
        <div className="comparison-chat-controls">
          <div className="comparison-chat-mode">
            <select value={mode} onChange={(event) => setMode(event.target.value)} disabled={busy}>
              <option value="fast">Evidence search</option>
              <option value="ai">AI chat</option>
            </select>
            {mode === "ai" && (
              <select value={modelName} onChange={(event) => setModelName(event.target.value)} disabled={busy}>
                {availableModels.length ? availableModels.map((model) => (
                  <option key={model.id} value={model.id}>{model.label || model.id}</option>
                )) : (
                  <option value="">No AI model configured</option>
                )}
              </select>
            )}
          </div>
          <button
            type="button"
            className="comparison-chat-send"
            onClick={ask}
            disabled={busy || !question.trim() || (mode === "ai" && !modelName)}
            aria-label="Send message"
            title="Send message"
          >
            <Send aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}

function ChatMessage({ message, sourcesOpen, onToggleSources }) {
  const isUser = message.role === "user";
  const sourceRows = Array.isArray(message.rows) ? message.rows : [];
  const usage = message.usage;
  const [fullAnswer, setFullAnswer] = useState(false);
  const estimatedCost = usage
    ? estimateCost(message.model, usage.prompt_tokens, usage.completion_tokens)
    : 0;
  const answerIsLong = String(message.text || "").length > ANSWER_PREVIEW_LIMIT;
  const visibleAnswer = answerIsLong && !fullAnswer
    ? `${String(message.text || "").slice(0, ANSWER_PREVIEW_LIMIT).trimEnd()}...`
    : message.text;

  if (isUser) {
    return (
      <div className="comparison-chat-message user">
        <div className="comparison-chat-user-bubble" dir="auto">{message.text}</div>
      </div>
    );
  }

  return (
    <div className={`comparison-chat-message assistant${message.isError ? " error" : ""}`}>
      <div className="comparison-chat-avatar"><Sparkles aria-hidden="true" /></div>
      <div className="comparison-chat-response">
        <div className="comparison-chat-answer" dir="auto">{visibleAnswer}</div>
        {message.warning && <p className="comparison-chat-warning">{message.warning}</p>}

        <div className="comparison-chat-actions">
          {answerIsLong && (
            <button type="button" onClick={() => setFullAnswer((current) => !current)}>
              {fullAnswer ? "Show less" : "Show full response"}
            </button>
          )}
          {sourceRows.length > 0 && (
            <button type="button" onClick={onToggleSources}>
              {sourcesOpen ? "Hide sources" : `${sourceRows.length} source${sourceRows.length === 1 ? "" : "s"}`}
            </button>
          )}
          {(message.model || usage) && (
            <details className="comparison-chat-details">
              <summary>Details</summary>
              <div>
                {message.model && <span>Model: {message.model}</span>}
                {usage && (
                  <span>
                    {formatInt(usage.total_tokens)} tokens · approximately ${estimatedCost.toFixed(5)}
                  </span>
                )}
              </div>
            </details>
          )}
        </div>

        {sourcesOpen && (
          <div className="comparison-chat-sources">
            {sourceRows.slice(0, 8).map((row, index) => (
              <SourceCard key={`${row.stable_key || row.citation || index}`} row={row} index={index} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function SourceCard({ row, index }) {
  const title = row.feature || row.item || row.area || row.stable_key || `Source ${index + 1}`;
  const text = row.change || row.description || row.after || row.before || row.definition || "";

  return (
    <article className="comparison-chat-source">
      <div>
        <strong dir="auto">{trim(title, 100)}</strong>
        {row.citation && <span>{row.citation}</span>}
      </div>
      {text && <p dir="auto">{trim(typeof text === "string" ? text : JSON.stringify(text), 260)}</p>}
      {(row.before || row.after || row.field_changes?.length > 0) && (
        <details>
          <summary>View change</summary>
          <div className="comparison-chat-source-change">
            <ChangeBadge type={rowChangeType(row)} />
            {row.before && <div dir="auto"><strong>Before:</strong> {trim(row.before, 260)}</div>}
            {row.after && <div dir="auto"><strong>After:</strong> {trim(row.after, 260)}</div>}
            {row.field_changes?.length > 0 && <FieldDiffTable rows={row.field_changes} />}
          </div>
        </details>
      )}
    </article>
  );
}
