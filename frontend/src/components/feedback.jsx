import React, { useState, useEffect, useMemo } from "react";
import { API, COLORS } from "../config.js";
import {
  inputStyle,
  miniButtonStyle,
  primaryButtonStyle,
  secondaryButtonStyle,
  th,
  td,
} from "../styles.js";
import {
  readResponseError,
  friendlyFetchError,
  SoftLoading,
  EmptyState,
  AiUsageCard,
  trim,
  rowChangeType,
  ChangeBadge,
  friendlyCitation,
  impactRank,
  needsReview,
  normalizeConfidence,
  average,
  normalizeQualityProfile,
  fallbackQualityProfile,
  Confidence,
  mergeReviewRows,
  MetricCard,
} from "./common.jsx";
import { GenericRowsTable } from "./tables.jsx";

export function AccuracyImprovementTab({ runId, meta }) {
  const [quality, setQuality] = useState(() => fallbackQualityProfile(meta));
  const [error, setError] = useState("");

  useEffect(() => {
    const fallback = fallbackQualityProfile(meta);
    setQuality(fallback);
    setError("");
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 8000);

    fetch(`${API}/runs/${runId}/summary`, { signal: controller.signal })
      .then(async (r) => {
        if (!r.ok) throw new Error(await readResponseError(r));
        return r.json();
      })
      .then((data) => {
        const rows = Array.isArray(data) ? data : data.rows || data.summary || [];
        setQuality(normalizeQualityProfile(data.quality, rows, fallback));
      })
      .catch((err) => {
        if (err?.name !== "AbortError") setError(friendlyFetchError(err));
        setQuality(fallback);
      })
      .finally(() => clearTimeout(timer));

    return () => {
      clearTimeout(timer);
      controller.abort();
    };
  }, [runId, meta]);

  return (
    <>
      {error && <ErrorBox message={`Using local score fallback. ${error}`} />}
      <AccuracyImprovementPanel runId={runId} quality={quality || fallbackQualityProfile(meta)} />
    </>
  );
}

export function AccuracyImprovementPanel({ runId, quality }) {
  const systemScore = quality?.system_score ?? "";
  const inferredDocumentType = quality?.document_type || "";
  const recommended = Boolean(quality?.ai_recommended);
  const focusItems = quality?.focus_items || [];
  const [form, setForm] = useState({
    reviewer_name: "",
    document_type: inferredDocumentType,
    user_score: systemScore === "" ? "" : systemScore,
    missing_areas: "",
    comments: "",
    wants_ai_enhancement: true,
  });
  const [selectedFocus, setSelectedFocus] = useState([]);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState(null);

  useEffect(() => {
    setForm({
      reviewer_name: "",
      document_type: inferredDocumentType,
      user_score: systemScore === "" ? "" : systemScore,
      missing_areas: "",
      comments: "",
      wants_ai_enhancement: true,
    });
    setSelectedFocus([]);
    setError("");
    setResult(null);
  }, [runId]);

  useEffect(() => {
    setForm((prev) => ({
      ...prev,
      user_score: systemScore === "" ? "" : systemScore,
      document_type: prev.document_type || inferredDocumentType,
    }));
  }, [systemScore, inferredDocumentType]);

  const update = (field, value) => setForm((prev) => ({ ...prev, [field]: value }));
  const rows = result?.rows || [];
  const columns = result?.columns || inferColumns(rows);
  const focusLabel = (item) => {
    const page = item.page_target || item.page_base;
    const conf = typeof item.confidence === "number" ? ` · ${Math.round(item.confidence * 100)}%` : "";
    return `${item.feature || "Review item"}${page ? ` · page ${page}` : ""}${conf}`;
  };
  const setMissingAreasFromFocus = (items) => {
    const text = items.map(focusLabel).join("\n");
    setSelectedFocus(items);
    setForm((prev) => ({ ...prev, missing_areas: text }));
  };
  const toggleFocus = (item) => {
    const key = focusLabel(item);
    const exists = selectedFocus.some((selected) => focusLabel(selected) === key);
    const next = exists
      ? selectedFocus.filter((selected) => focusLabel(selected) !== key)
      : [...selectedFocus, item];
    setMissingAreasFromFocus(next);
  };

  const submit = async (event) => {
    event.preventDefault();
    if (!form.reviewer_name.trim()) {
      setError("Reviewer name is required.");
      return;
    }
    if (!form.document_type.trim()) {
      setError("Document type is required.");
      return;
    }
    if (!form.missing_areas.trim() && selectedFocus.length === 0) {
      setError("Please describe the area that looked incorrect or choose a low-score focus area.");
      return;
    }
    if (!form.comments.trim()) {
      setError("Reviewer comments are required.");
      return;
    }
    setBusy(true);
    setError("");
    setResult(null);

    const payload = {
      ...form,
      reviewer_name: form.reviewer_name.trim(),
      document_type: form.document_type.trim(),
      user_score: Number(form.user_score),
      missing_areas: form.missing_areas.trim() || selectedFocus.map(focusLabel).join("\n"),
      comments: form.comments.trim(),
      selected_focus: selectedFocus,
      wants_ai_enhancement: Boolean(form.wants_ai_enhancement),
    };

    try {
      const endpoint = payload.wants_ai_enhancement ? "enhance-summary" : "feedback";
      const body = payload.wants_ai_enhancement ? { feedback: payload, threshold: 0.9, response_language: "source" } : payload;
      const r = await fetch(`${API}/runs/${runId}/${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (!r.ok) throw new Error(await readResponseError(r));
      const data = await r.json();
      setResult(payload.wants_ai_enhancement ? data : { answer: "Feedback saved for this review session.", rows: [], usage: null });
    } catch (err) {
      setError(friendlyFetchError(err));
    } finally {
      setBusy(false);
    }
  };

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
    <form onSubmit={submit} style={{ background: "#fffdf8", border: "1px solid #ded6c8", borderRadius: 8, padding: 12 }}>
      <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap", marginBottom: 10 }}>
        <div>
          <div style={{ fontWeight: 650, color: "#344054" }}>Accuracy improvement</div>
          <div style={{ color: "#667085", fontSize: 13, marginTop: 3 }}>
            Classical review score is {systemScore === "" ? "-" : systemScore}%. Add feedback before using advanced AI on focused areas.
          </div>
        </div>
        <span style={{ border: `1px solid ${recommended ? COLORS.MODIFIED.border : COLORS.ADDED.border}`, color: recommended ? COLORS.MODIFIED.text : COLORS.ADDED.text, background: recommended ? COLORS.MODIFIED.chip : COLORS.ADDED.chip, borderRadius: 999, padding: "6px 10px", fontWeight: 650, fontSize: 13 }}>
          {recommended ? "AI review recommended" : "Classical score looks good"}
        </span>
      </div>

      {focusItems.length > 0 && (
        <div style={{ background: "#fbfaf6", border: "1px solid #e0d8ca", borderRadius: 8, padding: 10, marginBottom: 10 }}>
          <div style={{ display: "flex", justifyContent: "space-between", gap: 10, alignItems: "center", flexWrap: "wrap", marginBottom: 8 }}>
            <div style={{ color: "#344054", fontWeight: 650, fontSize: 13 }}>Low-score focus areas</div>
            <button type="button" onClick={() => setMissingAreasFromFocus(focusItems)} style={miniButtonStyle}>Select all below 90%</button>
          </div>
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
            {focusItems.slice(0, 18).map((item) => {
              const label = focusLabel(item);
              const active = selectedFocus.some((selected) => focusLabel(selected) === label);
              return (
                <button
                  key={label}
                  type="button"
                  onClick={() => toggleFocus(item)}
                  title={label}
                  style={{
                    border: `1px solid ${active ? COLORS.MODIFIED.border : "#d8d0c3"}`,
                    background: active ? COLORS.MODIFIED.chip : "#fffdf8",
                    color: active ? COLORS.MODIFIED.text : "#344054",
                    borderRadius: 999,
                    padding: "4px 8px",
                    fontSize: 12,
                    cursor: "pointer",
                    maxWidth: 280,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {trim(label, 52)}
                </button>
              );
            })}
          </div>
        </div>
      )}

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 10, marginBottom: 10 }}>
        <input required aria-label="Reviewer name" value={form.reviewer_name} onChange={(e) => update("reviewer_name", e.target.value)} placeholder="Reviewer name *" style={inputStyle} />
        <input required aria-label="Document type" value={form.document_type} onChange={(e) => update("document_type", e.target.value)} placeholder="Document type *" style={inputStyle} />
        <input readOnly value={form.user_score} placeholder="Classical score" style={{ ...inputStyle, background: "#f2eee6", color: "#667085" }} />
      </div>

      <div style={{ marginBottom: 10 }}>
        <textarea required value={form.missing_areas} onChange={(e) => update("missing_areas", e.target.value)} placeholder="Areas that looked incorrect or missing" rows={3} style={{ ...inputStyle, resize: "vertical" }} />
      </div>

      <textarea required value={form.comments} onChange={(e) => update("comments", e.target.value)} placeholder="Reviewer comments for this session" rows={3} style={{ ...inputStyle, resize: "vertical", marginBottom: 10 }} />

      <label style={{ display: "flex", alignItems: "center", gap: 8, color: "#475467", fontSize: 13, marginBottom: 10 }}>
        <input type="checkbox" checked={form.wants_ai_enhancement} onChange={(e) => update("wants_ai_enhancement", e.target.checked)} />
        Use advanced AI on the weak or flagged areas after saving this feedback
      </label>

      {error && <ErrorBox message={error} />}

      <button type="submit" disabled={busy} style={primaryButtonStyle(busy, { height: 38 })}>
        {busy ? "Submitting" : form.wants_ai_enhancement ? "Submit feedback and improve" : "Save feedback"}
      </button>

      {result?.answer && (
        <div style={{ marginTop: 12, background: "#fbfaf6", border: "1px solid #d8d0c3", borderRadius: 8, padding: 12, color: "#344054", lineHeight: 1.45 }}>
          {result.answer}
        </div>
      )}
      {result?.usage && <AiUsageCard usage={result.usage} />}
      {rows.length > 0 && columns.length > 0 && (
        <div style={{ marginTop: 12 }}>
          <GenericRowsTable columns={columns} rows={rows} />
        </div>
      )}
    </form>
  );
}

export function ReviewReport({ runId }) {
  const [rows, setRows] = useState(null);
  const [filter, setFilter] = useState("ALL");
  const [error, setError] = useState("");

  useEffect(() => {
    setRows(null);
    setError("");

    Promise.all([
      fetch(`${API}/runs/${runId}/summary`).then(async (r) => {
        if (!r.ok) throw new Error(await readResponseError(r));
        return r.json();
      }),
      fetch(`${API}/runs/${runId}/diff?limit=500`).then(async (r) => {
        if (!r.ok) return { diffs: [] };
        return r.json();
      }),
    ])
      .then(([summaryData, diffData]) => {
        const summaryRows = Array.isArray(summaryData) ? summaryData : summaryData.rows || summaryData.summary || [];
        setRows(mergeReviewRows(summaryRows, diffData.diffs || []));
      })
      .catch((err) => setError(friendlyFetchError(err)));
  }, [runId]);

  const filteredRows = useMemo(() => {
    const list = rows || [];
    if (filter === "ALL") return list;
    if (filter === "REVIEW") return list.filter((r) => needsReview(r));
    return list.filter((r) => rowChangeType(r) === filter);
  }, [rows, filter]);

  const avgConfidence = average((rows || []).map((r) => normalizeConfidence(r.confidence)).filter((v) => typeof v === "number"));
  const reviewCount = (rows || []).filter(needsReview).length;
  const filterCounts = useMemo(() => {
    const list = rows || [];
    return {
      ALL: list.length,
      ADDED: list.filter((r) => rowChangeType(r) === "ADDED").length,
      DELETED: list.filter((r) => rowChangeType(r) === "DELETED").length,
      MODIFIED: list.filter((r) => rowChangeType(r) === "MODIFIED").length,
      REVIEW: list.filter(needsReview).length,
    };
  }, [rows]);
  const keyInsights = useMemo(() => {
    const list = (rows || []).filter((row) => row.change || row.description || row.before || row.after);
    const priority = [...list].sort((a, b) => {
      const ai = impactRank(a.impact) + (needsReview(a) ? 2 : 0) + (normalizeConfidence(a.confidence) || 0);
      const bi = impactRank(b.impact) + (needsReview(b) ? 2 : 0) + (normalizeConfidence(b.confidence) || 0);
      return bi - ai;
    });
    return priority.slice(0, 6);
  }, [rows]);

  const filterLabelLocal = (f) => {
    if (f === "ALL") return "All changes";
    if (f === "REVIEW") return "Needs review";
    if (f === "ADDED") return "Added";
    if (f === "DELETED") return "Deleted";
    if (f === "MODIFIED") return "Modified";
    return f.toLowerCase();
  };

  const filterButtonStyleLocal = (active) => ({
    border: `1px solid ${active ? "#1f2937" : "#c9c0b0"}`,
    background: active ? "#1f2937" : "#fffdf8",
    color: active ? "white" : "#344054",
    borderRadius: 999,
    padding: "7px 11px",
    cursor: "pointer",
    fontWeight: 600,
  });

  if (error) return <ErrorBox message={error} />;
  if (!rows) return <SoftLoading label="Building review report" />;

  return (
    <div>
      <div className="report-metrics" style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: 10, marginBottom: 14 }}>
        <MetricCard label="Review items" value={rows.length} />
        <MetricCard label="Needs review" value={reviewCount} />
        <MetricCard label="Avg confidence" value={avgConfidence == null ? "-" : `${Math.round(avgConfidence * 100)}%`} />
        <MetricCard label="Report" value="PDF ready" />
      </div>

      {keyInsights.length > 0 && (
        <div style={{ background: "#fbfaf6", border: "1px solid #ded6c8", borderRadius: 8, padding: 12, marginBottom: 12 }}>
          <div style={{ fontWeight: 650, color: "#344054", marginBottom: 8 }}>Important changes</div>
          <div style={{ display: "grid", gap: 8 }}>
            {keyInsights.map((row, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 8, alignItems: "start" }}>
                <ChangeBadge type={rowChangeType(row)} />
                <div>
                  <span style={{ fontWeight: 650 }}>{trim(row.feature || row.item || row.area || "Document item", 120)}: </span>
                  <span>{trim(row.change || row.description || row.before || row.after || "Change detected.", 260)}</span>
                  {row.citation && <span style={{ color: "#667085" }}> ({friendlyCitation(row.citation)})</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 12 }}>
        {["ALL", "ADDED", "DELETED", "MODIFIED", "REVIEW"].map((key) => (
          <button key={key} onClick={() => setFilter(key)} style={filterButtonStyleLocal(filter === key)}>
            {filterLabelLocal(key)} {filterCounts[key] ?? 0}
          </button>
        ))}
      </div>

      {filteredRows.length === 0 ? (
        <EmptyState label="No review items match this filter." />
      ) : (
        <div className="dl-scrollbar" style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13, minWidth: 980 }}>
            <thead>
              <tr style={{ background: "#1f2937", color: "white" }}>
                <th style={th}>Area / Item</th>
                <th style={th}>Change</th>
                <th style={th}>Evidence</th>
                <th style={th}>Confidence</th>
                <th style={th}>Review</th>
              </tr>
            </thead>
            <tbody>
              {filteredRows.map((row, i) => (
                <tr key={i}>
                  <td style={{ ...td, width: "24%" }}>
                    <strong style={{ fontWeight: 650 }}>{row.feature || row.area || row.item || row.path || "Document change"}</strong>
                    <div style={{ color: "#667085", marginTop: 6 }}>{trim(row.before || row.after || row.text || "", 180)}</div>
                  </td>
                  <td style={{ ...td, width: "22%" }}>
                    <ChangeBadge type={rowChangeType(row)} />
                    <div style={{ marginTop: 7 }}>{trim(row.change || row.description || "", 240)}</div>
                  </td>
                  <td style={{ ...td, width: "28%" }}>
                    <div>{friendlyCitation(row.citation || row.evidence || "-")}</div>
                    {row.before && <div style={{ color: COLORS.DELETED.text, marginTop: 7 }}>Before: {trim(row.before, 180)}</div>}
                    {row.after && <div style={{ color: COLORS.ADDED.text, marginTop: 4 }}>After: {trim(row.after, 180)}</div>}
                  </td>
                  <td style={{ ...td, width: "11%" }}>
                    <Confidence value={normalizeConfidence(row.confidence)} />
                    {row.impact && <div style={{ color: "#667085", marginTop: 4 }}>{row.impact}</div>}
                  </td>
                  <td style={{ ...td, width: "15%", color: needsReview(row) ? COLORS.DELETED.text : "#475467", fontWeight: needsReview(row) ? 650 : 400 }}>
                    {row.seek_clarification || row.review || row.recommendation || (needsReview(row) ? "Review recommended." : "No action suggested.")}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

function ErrorBox({ message }) {
  return (
    <div style={{ marginTop: 16, border: "1px solid #f0b4b4", background: "#fff5f5", color: "#9f1d1d", borderRadius: 8, padding: 13, fontSize: 14, fontWeight: 600, lineHeight: 1.45 }}>
      {message}
    </div>
  );
}
