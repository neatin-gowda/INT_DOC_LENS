import React, { useMemo, useState } from "react";
import { MODEL_PLACEHOLDERS } from "../../config/models.js";
import { ModelPicker } from "./ModelPicker.jsx";
import "./chat.css";

export function ChatPage() {
  const defaultModel = useMemo(() => MODEL_PLACEHOLDERS.find((model) => model.default) || MODEL_PLACEHOLDERS[0], []);
  const [modelId, setModelId] = useState(defaultModel.id);
  const [draft, setDraft] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Choose a model, attach skills when they are available, and start a conversation.",
      model: defaultModel.id,
    },
  ]);

  const activeModel = MODEL_PLACEHOLDERS.find((model) => model.id === modelId) || defaultModel;
  const configured = Boolean(activeModel.endpoint);

  const send = () => {
    const text = draft.trim();
    if (!text) return;
    setDraft("");
    setMessages((items) => [
      ...items,
      { role: "user", content: text },
      {
        role: "assistant",
        content: configured
          ? "Streaming will begin once the chat endpoint is connected."
          : `${activeModel.label} is not configured yet. Add the deployment endpoint in the model catalog to enable streaming.`,
        model: activeModel.id,
      },
    ]);
  };

  return (
    <section className="chat-page">
      <aside className="conversation-list">
        <div className="conversation-list-title">Recent conversations</div>
        <button type="button" className="conversation-item active">New conversation</button>
        <button type="button" className="conversation-item">Document review notes</button>
        <button type="button" className="conversation-item">Policy summary</button>
        <button type="button" className="conversation-link">View all</button>
      </aside>

      <main className="general-chat">
        <div className="message-list">
          {messages.map((message, index) => (
            <div key={`${message.role}-${index}`} className={`general-message ${message.role}`}>
              <div className="message-content">{message.content}</div>
              {message.role === "assistant" && (
                <div className="message-meta">
                  {MODEL_PLACEHOLDERS.find((model) => model.id === message.model)?.label || activeModel.label}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="composer">
          <div className="skill-strip">
            <button type="button" className="secondary-action">Attach document</button>
            <button type="button" className="secondary-action">+ Skills</button>
          </div>
          <textarea
            value={draft}
            onChange={(event) => setDraft(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter" && !event.shiftKey) {
                event.preventDefault();
                send();
              }
            }}
            placeholder="Message Altrai"
            rows={2}
          />
          <div className="composer-footer">
            <ModelPicker value={modelId} onChange={setModelId} />
            <button type="button" className="primary-action" onClick={send} disabled={!draft.trim()}>
              Send
            </button>
          </div>
        </div>
      </main>
    </section>
  );
}
