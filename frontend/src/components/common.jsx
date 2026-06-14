import React from "react";
import { API, BRAND, COLORS } from "../config.js";
import {
  miniButtonStyle,
  primaryButtonStyle,
  secondaryButtonStyle,
  softPillStyle,
  panelStyle,
  th,
  td,
} from "../styles.js";

// Presets
export const DEFAULT_AI_SUMMARY_PROMPT = "Summarize key changes as a table with columns Feature, Change, Seek Clarification. Use only the extracted comparison evidence.";

export const AI_PROMPT_PRESETS = [
  {
    label: "Key changes table",
    prompt: DEFAULT_AI_SUMMARY_PROMPT,
  },
  {
    label: "Executive summary",
    prompt: "Write a concise executive summary of the most important document changes. Group related changes and include evidence references where useful.",
  },
  {
    label: "High-risk changes",
    prompt: "Identify high-risk changes such as dates, prices, obligations, requirements, removals, availability, or table cell changes. Explain why each item may need review.",
  },
  {
    label: "Clarification list",
    prompt: "List the changes that should be checked with the relevant owner or team. For each item, explain the exact clarification question to ask.",
  },
];

export const FAST_QUERY_PRESETS = [
  {
    label: "Evidence summary",
    prompt: "Summarize the key changes with citations",
  },
  {
    label: "Removed content",
    prompt: "List content that was deleted or removed with page evidence",
  },
  {
    label: "Table changes",
    prompt: "Show table row and cell changes",
  },
  {
    label: "Numbers and dates",
    prompt: "Show changes involving numbers, dates, prices, percentages, or codes",
  },
];

// Utility Helpers
export function sanitizeErrorMessage(msg) {
  if (!msg) return "";
  const str = String(msg);
  if (
    str.includes("Traceback (most recent call last)") ||
    str.includes("Internal Server Error") ||
    str.includes("psycopg") ||
    str.includes("OperationalError") ||
    str.includes("File \"") ||
    str.length > 500
  ) {
    return "An unexpected internal server error occurred. Please try again or check server logs.";
  }
  return str.replace(/\/Users\/[a-zA-Z0-9_-]+\//g, ".../");
}

export async function readResponseError(resp) {
  try {
    const text = await resp.text();
    if (!text) return `Request failed with status ${resp.status}`;

    try {
      const parsed = JSON.parse(text);
      return sanitizeErrorMessage(normalizeErrorMessage(parsed.detail || parsed.error || parsed.message || parsed));
    } catch {
      if (text.trim().startsWith("<!DOCTYPE html>") || text.includes("<html") || text.length > 200) {
        return `Server error (${resp.status}). Please check backend logs.`;
      }
      return sanitizeErrorMessage(text);
    }
  } catch {
    return `Request failed with status ${resp.status}`;
  }
}

export function friendlyFetchError(err) {
  const message = normalizeErrorMessage(err);
  if (message.toLowerCase().includes("failed to fetch")) {
    return "The app could not reach the comparison service. Please confirm the backend is running and the API URL is correct.";
  }
  return message || "Something went wrong while processing the documents.";
}

export async function fetchStructuredExtraction(runId) {
  const structuredResp = await fetch(`${API}/extract-runs/${runId}/structured-json`);
  if (structuredResp.ok) {
    const structured = normalizeStructuredExtractionPayload(await structuredResp.json());
    if (hasStructuredExtractionContent(structured)) return structured;

    const fallback = await fetchExtractionBlocksAndTables(runId, structured);
    if (hasStructuredExtractionContent(fallback)) return fallback;
    return structured;
  }

  const jsonResp = await fetch(`${API}/extract-runs/${runId}/json`);
  if (!jsonResp.ok) throw new Error(await readResponseError(structuredResp));

  const payload = await jsonResp.json();
  const normalized = normalizeStructuredExtractionPayload(payload);
  if (hasStructuredExtractionContent(normalized)) return normalized;
  return fetchExtractionBlocksAndTables(runId, normalized);
}

export function hasStructuredExtractionContent(payload) {
  return Boolean(
    payload
    && ((payload.content || []).length > 0
      || (payload.tables || []).length > 0
      || (payload.pages || []).some((page) => (page.content || []).length > 0 || (page.tables || []).length > 0))
  );
}

export async function fetchExtractionBlocksAndTables(runId, basePayload = {}) {
  const [blocksResult, tablesResult] = await Promise.allSettled([
    fetch(`${API}/extract-runs/${runId}/blocks?limit=2000`).then(async (resp) => {
      if (!resp.ok) throw new Error(await readResponseError(resp));
      return resp.json();
    }),
    fetch(`${API}/extract-runs/${runId}/tables?include_rows=true`).then(async (resp) => {
      if (!resp.ok) throw new Error(await readResponseError(resp));
      return resp.json();
    }),
  ]);

  const blocks = blocksResult.status === "fulfilled" ? (blocksResult.value.blocks || []) : [];
  const tables = tablesResult.status === "fulfilled" ? (tablesResult.value.tables || []) : [];

  return normalizeStructuredExtractionPayload({
    ...basePayload,
    blocks,
    tables: tables.length ? tables : basePayload.tables || [],
  });
}

export function normalizeStructuredExtractionPayload(payload) {
  if (payload?.structured_json) return payload.structured_json;
  if ((payload?.document_summary || payload?.content || payload?.pages) && hasStructuredExtractionContent(payload)) return payload;

  const blocks = payload?.blocks || [];
  const tables = payload?.tables || [];
  const semanticFields = [];

  blocks.forEach((block) => {
    const text = block.text || block.payload?.text || "";
    const match = String(text).match(/^\s*([^:：]{2,80})\s*[:：]\s*(.{1,300})$/);
    if (match) {
      semanticFields.push({
        field: match[1].trim(),
        value: match[2].trim(),
        page: block.page_number,
        source: block.type,
        citation: `p.${block.page_number || "-"} - ${block.path || "document"}`,
      });
    }

    inferTextAttributes(text).forEach((item) => {
      semanticFields.push({
        ...item,
        page: block.page_number,
        source: block.type,
        citation: `p.${block.page_number || "-"} - ${block.path || "document"}`,
      });
    });
  });

  tables.slice(0, 40).forEach((table) => {
    (table.rows || []).slice(0, 50).forEach((row) => {
      Object.entries(row || {}).forEach(([key, value]) => {
        if (!value || String(key).startsWith("__")) return;
        semanticFields.push({
          field: key,
          value,
          page: table.page_first || table.page_number,
          source: "table",
          table: table.display_name || table.title,
          citation: `${table.page_label || "page"} - ${table.title || "table"}`,
        });
      });
    });
  });

  const content = blocks
    .filter((b) => ["paragraph", "list_item", "kv_pair", "figure", "section", "heading"].includes(b.type))
    .map((block) => {
      const text = block.text || block.payload?.text || "";
      const item = {
        page: block.page_number,
        order: block.sequence || 0,
        type: block.type,
        path: block.path,
        text,
        citation: `p.${block.page_number || "-"} - ${block.path || "document"}`,
      };
      const keyValues = [];
      const match = String(text).match(/^\s*([^:：]{2,80})\s*[:：]\s*(.{1,300})$/);
      if (match) keyValues.push({ name: match[1].trim(), value: match[2].trim() });
      if (keyValues.length) item.key_values = keyValues;
      return item;
    })
    .filter((item) => String(item.text || "").trim());

  const pages = [];
  const pageMap = new Map();
  content.forEach((item) => {
    const pageNo = item.page || 1;
    if (!pageMap.has(pageNo)) pageMap.set(pageNo, { page: pageNo, citation: `p.${pageNo}`, content: [], tables: [] });
    pageMap.get(pageNo).content.push(item);
  });
  tables.forEach((table) => {
    const pageNo = table.page_first || table.page_number || 1;
    if (!pageMap.has(pageNo)) pageMap.set(pageNo, { page: pageNo, citation: `p.${pageNo}`, content: [], tables: [] });
    pageMap.get(pageNo).tables.push(table);
  });
  Array.from(pageMap.keys()).sort((a, b) => a - b).forEach((key) => pages.push(pageMap.get(key)));

  return {
    document_summary: payload?.document_summary || {
      label: payload?.summary?.label || payload?.label || "Extracted document",
      source_type: payload?.summary?.source_format || payload?.source_format || "document",
      extraction_quality: {
        grade: payload?.summary?.quality || "not rated",
        coverage: payload?.coverage,
      },
      counts: {
        text_blocks: content.length,
        tables: tables.length,
        pages: pages.length,
      },
    },
    semantic_fields: semanticFields.slice(0, 220),
    business_structure: buildBusinessStructureFromBlocks(blocks, tables, semanticFields),
    sections: blocks.filter((b) => ["section", "heading"].includes(b.type)).slice(0, 200),
    tables,
    pages,
    content,
  };
}

export function buildBusinessStructureFromBlocks(blocks, tables, semanticFields) {
  const docs = [{ document_index: 1, label: "Extracted document", sections: [] }];
  let current = null;

  blocks
    .slice()
    .sort((a, b) => (a.page_number || 1) - (b.page_number || 1) || (a.sequence || 0) - (b.sequence || 0))
    .forEach((block) => {
      if (["section", "heading"].includes(block.type)) {
        current = {
          title: block.text || block.path || `Page ${block.page_number || 1}`,
          page: block.page_number || 1,
          path: block.path,
          content: [],
          fields: [],
          inline_records: [],
          tables: [],
        };
        docs[0].sections.push(current);
        return;
      }

      if (!current || current.page !== (block.page_number || 1)) {
        current = {
          title: `Page ${block.page_number || 1}`,
          page: block.page_number || 1,
          path: `/page_${block.page_number || 1}`,
          content: [],
          fields: [],
          inline_records: [],
          tables: [],
        };
        docs[0].sections.push(current);
      }

      if (["paragraph", "list_item", "kv_pair", "figure"].includes(block.type)) {
        const text = block.text || block.payload?.text || "";
        const itemFields = semanticFields.filter((f) => f.page === block.page_number && f.citation?.includes(block.path || "__no_path__"));
        const inline = inlineRecordFromText(text);
        current.content.push({ type: block.type, page: block.page_number, path: block.path, text, fields: itemFields });
        current.fields.push(...itemFields);
        if (inline) current.inline_records.push({ ...inline, page: block.page_number, citation: `p.${block.page_number || "-"} - ${block.path || "document"}` });
      }
    });

  tables.forEach((table) => {
    const page = table.page_first || table.page_number || 1;
    let section = docs[0].sections.find((s) => s.page === page);
    if (!section) {
      section = { title: `Page ${page}`, page, path: `/page_${page}`, content: [], fields: [], inline_records: [], tables: [] };
      docs[0].sections.push(section);
    }
    section.tables.push({
      title: table.display_name || table.title || "Detected table",
      page_label: table.page_label,
      columns: table.columns || [],
      row_count: table.n_rows || 0,
      sample_rows: (table.rows || table.row_preview || []).slice(0, 8),
    });
  });

  return { documents: docs, section_count: docs[0].sections.length };
}

export function inlineRecordFromText(text) {
  const raw = String(text || "").trim();
  if (!raw) return null;
  const cells = raw.includes("|")
    ? raw.split("|").map((x) => x.trim()).filter(Boolean)
    : raw.split(/\s{3,}/).map((x) => x.trim()).filter(Boolean);
  if (cells.length < 2) return null;
  return {
    record_type: "inline_row",
    columns: cells.map((_, idx) => `Column ${idx + 1}`),
    values: Object.fromEntries(cells.map((value, idx) => [`Column ${idx + 1}`, value])),
    text: raw,
  };
}

export function inferTextAttributes(text) {
  const source = String(text || "");
  const patterns = [
    ["color", /\b(?:colou?r|shade)\s*(?:is|=|:)?\s*([A-Za-z][A-Za-z\s/-]{2,40})/gi],
    ["size", /\b(?:size|dimension)\s*(?:is|=|:)?\s*([A-Z0-9][A-Z0-9\s./x-]{0,40})/gi],
    ["quantity", /\b(?:qty|quantity|count|units?)\s*(?:is|=|:)?\s*(\d[\d,]*(?:\.\d+)?)/gi],
    ["price", /([$€£]\s?\d[\d,]*(?:\.\d+)?)/g],
    ["percentage", /\b(\d+(?:\.\d+)?%)\b/g],
    ["date", /\b(\d{1,2}[/-]\d{1,2}[/-]\d{2,4}|\d{4}-\d{1,2}-\d{1,2})\b/g],
    ["code", /\b([A-Z]{1,8}[- ]?\d{2,12}[A-Z]?)\b/gi],
  ];
  const out = [];
  const seen = new Set();

  patterns.forEach(([field, rx]) => {
    for (const match of source.matchAll(rx)) {
      const value = String(match[1] || "").replace(/\s+/g, " ").trim();
      const key = `${field}:${value.toLowerCase()}`;
      if (!value || seen.has(key)) continue;
      seen.add(key);
      out.push({ field, value });
    }
  });

  return out;
}

export function normalizeErrorMessage(value) {
  if (!value) return "";
  if (typeof value === "string") return sanitizeErrorMessage(value);
  if (value instanceof Error) return normalizeErrorMessage(value.message);
  if (Array.isArray(value)) return value.map(normalizeErrorMessage).filter(Boolean).join("\n");
  if (typeof value === "object") {
    if (value.detail) return normalizeErrorMessage(value.detail);
    if (value.error) return normalizeErrorMessage(value.error);
    if (value.message) return normalizeErrorMessage(value.message);
    try {
      return sanitizeErrorMessage(JSON.stringify(value, null, 2));
    } catch {
      return sanitizeErrorMessage(String(value));
    }
  }
  return sanitizeErrorMessage(String(value));
}

export function defaultRowColumns(table) {
  const columns = (table?.columns || []).filter((col) => !isInternalColumn(col));
  const suggested = table?.suggested_row_columns || [];
  const picked = suggested.filter((c) => columns.includes(c));
  return picked.length ? picked : columns.slice(0, 1);
}

export function defaultValueColumns(table) {
  const columns = (table?.columns || []).filter((col) => !isInternalColumn(col));
  const suggested = table?.suggested_value_columns || [];
  const rowCols = defaultRowColumns(table);
  const picked = suggested.filter((c) => columns.includes(c) && !rowCols.includes(c));
  if (picked.length) return picked.slice(0, 12);
  return columns.filter((c) => !rowCols.includes(c)).slice(0, 12);
}

export function inferColumns(rows) {
  if (!rows?.length) return [];
  const keys = new Set();
  rows.slice(0, 20).forEach((row) => {
    if (row && typeof row === "object" && !Array.isArray(row)) {
      Object.keys(row).forEach((key) => {
        if (!isInternalColumn(key)) keys.add(key);
      });
    }
  });
  return Array.from(keys).slice(0, 12);
}

export function isInternalColumn(key) {
  const text = String(key || "");
  if (!text || text.startsWith("__")) return true;
  return [
    "payload",
    "raw",
    "field_profiles",
    "column_profiles",
    "extraction_intelligence",
    "source_tables",
    "table_fingerprint",
    "bbox_by_page",
    "quality_warnings",
  ].includes(text);
}

export function displayCell(value) {
  if (value === null || value === undefined || value === "") return "-";
  if (Array.isArray(value)) return value.map(displayCell).join(", ");
  if (typeof value === "object") {
    const clean = Object.fromEntries(Object.entries(value).filter(([key]) => !isInternalColumn(key)));
    return Object.keys(clean).length ? JSON.stringify(clean) : "-";
  }
  return String(value);
}

export function recordSummary(values) {
  if (!values || typeof values !== "object") return "";
  return Object.entries(values)
    .filter(([, value]) => value !== null && value !== undefined && String(value).trim() !== "")
    .map(([key, value]) => `${key}: ${value}`)
    .join(" | ");
}

export function tableMinWidth(columnCount, min = 560, max = 1280) {
  const count = Math.max(1, Number(columnCount) || 1);
  return Math.min(max, Math.max(min, 180 + count * 180));
}

export function trim(value, limit) {
  if (!value) return "";
  const text = String(value).replace(/\s+/g, " ").trim();
  return text.length <= limit ? text : `${text.slice(0, limit - 1)}...`;
}

export function formatInt(value) {
  const n = Number(value || 0);
  if (!Number.isFinite(n)) return "0";
  return Math.round(n).toLocaleString();
}

export function formatDateTime(value) {
  if (!value) return "-";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "-";
  return date.toLocaleString(undefined, {
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function formatDuration(value, status) {
  const ms = Number(value || 0);
  if (!Number.isFinite(ms) || ms <= 0) return status === "complete" || status === "failed" ? "-" : "Running";
  const seconds = Math.max(1, Math.round(ms / 1000));
  if (seconds < 60) return `${seconds}s`;
  const minutes = Math.floor(seconds / 60);
  const rest = seconds % 60;
  if (minutes < 60) return rest ? `${minutes}m ${rest}s` : `${minutes}m`;
  const hours = Math.floor(minutes / 60);
  const minRest = minutes % 60;
  return minRest ? `${hours}h ${minRest}m` : `${hours}h`;
}

export function unique(values) {
  return Array.from(new Set((values || []).filter(Boolean)));
}

export function filterLabel(filter) {
  if (filter === "ALL") return "All changes";
  if (filter === "REVIEW") return "Needs review";
  if (filter === "ADDED") return "Added";
  if (filter === "DELETED") return "Deleted";
  if (filter === "MODIFIED") return "Modified";
  return filter.toLowerCase();
}

export function friendlyCitation(value) {
  const text = String(value || "-");
  return text
    .replace(/\bbase\s*p\.?\s*(\d+)/gi, "Baseline page $1")
    .replace(/\btarget\s*p\.?\s*(\d+)/gi, "Revised page $1")
    .replace(/\bbaseline\s*p\.?\s*(\d+)/gi, "Baseline page $1")
    .replace(/\brevised\s*p\.?\s*(\d+)/gi, "Revised page $1")
    .replace(/\s*->\s*/g, " → ");
}

export function impactRank(value) {
  const text = String(value || "").toLowerCase();
  if (text.includes("high")) return 3;
  if (text.includes("medium")) return 2;
  if (text.includes("low")) return 1;
  return 0;
}

export function rowChangeType(row) {
  const raw = String(row?.change_type || row?.changeType || row?.status || "").toUpperCase();
  if (["ADDED", "DELETED", "MODIFIED", "UNCHANGED", "MATCH"].includes(raw)) return raw;
  if ((row?.after || row?.target_text) && !(row?.before || row?.base_text)) return "ADDED";
  if ((row?.before || row?.base_text) && !(row?.after || row?.target_text)) return "DELETED";

  const text = `${row?.type || ""} ${row?.change || ""} ${row?.description || ""} ${row?.review || ""}`.toUpperCase();
  if (text.includes("ADDED") || text.includes("NEW CONTENT") || text.includes("INTRODUCED")) return "ADDED";
  if (text.includes("DELETED") || text.includes("REMOVED") || text.includes("DROPPED")) return "DELETED";
  if (text.includes("MODIFIED") || text.includes("CHANGED") || text.includes("UPDATED") || text.includes("REVISED")) return "MODIFIED";
  return raw || "MODIFIED";
}

export function reviewRowFromDiff(diff) {
  const type = rowChangeType(diff);
  const before = diff?.before || "";
  const after = diff?.after || "";
  const item = diff?.stable_key || pathLeaf(diff?.path) || "Document change";
  const citation = [
    diff?.page_base ? `Baseline page ${diff.page_base}` : "",
    diff?.page_target ? `Revised page ${diff.page_target}` : "",
  ].filter(Boolean).join(" -> ");
  const change =
    type === "ADDED" ? `Added: ${trim(after, 260)}` :
    type === "DELETED" ? `Deleted: ${trim(before, 260)}` :
    `Changed from "${trim(before, 120)}" to "${trim(after, 120)}"`;

  return {
    feature: item,
    item,
    area: pathLeaf(diff?.path) || "Document",
    change_type: type,
    change,
    before,
    after,
    citation,
    impact: diff?.impact,
    confidence: typeof diff?.similarity === "number" ? Math.max(0.55, Math.min(0.98, 1 - Math.abs(1 - diff.similarity))) : null,
    seek_clarification: type === "UNCHANGED" ? "None" : "Review recommended.",
  };
}

export function mergeReviewRows(summaryRows, diffRows) {
  const rows = Array.isArray(summaryRows) ? [...summaryRows] : [];
  const diffList = Array.isArray(diffRows) ? diffRows : [];
  const existingTypes = new Set(rows.map(rowChangeType));
  const seen = new Set(rows.map((row) => `${rowChangeType(row)}:${row.stable_key || row.item || row.feature || row.path || row.change}`));

  ["ADDED", "DELETED"].forEach((type) => {
    if (existingTypes.has(type)) return;
    let added = 0;
    diffList.forEach((diff) => {
      if (added >= 12 || rowChangeType(diff) !== type) return;
      const key = `${type}:${diff.stable_key || diff.path || diff.before || diff.after}`;
      if (seen.has(key)) return;
      rows.push(reviewRowFromDiff(diff));
      seen.add(key);
      added += 1;
    });
  });

  return rows;
}

export function pathLeaf(value) {
  const parts = String(value || "").split("/").map((part) => part.trim()).filter(Boolean);
  return parts[parts.length - 1] || "";
}

export function needsReview(row) {
  const text = `${row.seek_clarification || ""} ${row.review || ""} ${row.recommendation || ""}`.toLowerCase();
  const confidence = normalizeConfidence(row.confidence);
  return text.includes("review") || text.includes("clarif") || text.includes("confirm") || (typeof confidence === "number" && confidence < 0.8);
}

export function normalizeConfidence(value) {
  if (typeof value !== "number") return null;
  return value > 1 ? value / 100 : value;
}

export function average(values) {
  if (!values.length) return null;
  return values.reduce((a, b) => a + b, 0) / values.length;
}

export function normalizeQualityProfile(profile, rows = [], fallback = null) {
  if (profile && typeof profile === "object" && (profile.system_score !== undefined || profile.avg_confidence !== undefined)) {
    return {
      ...fallback,
      ...profile,
      document_type: profile.document_type || fallback?.document_type || "",
      focus_items: Array.isArray(profile.focus_items) ? profile.focus_items : fallback?.focus_items || [],
    };
  }

  const list = Array.isArray(rows) ? rows : [];
  const confidences = list.map((row) => normalizeConfidence(row?.confidence)).filter((value) => typeof value === "number");
  const avg = average(confidences);
  const focusItems = list
    .filter((row) => needsReview(row) || (typeof normalizeConfidence(row?.confidence) === "number" && normalizeConfidence(row?.confidence) < 0.9))
    .slice(0, 30)
    .map((row) => ({
      feature: row.feature || row.item || row.area || "Review item",
      change_type: rowChangeType(row),
      confidence: normalizeConfidence(row.confidence),
      page_base: row.page_base,
      page_target: row.page_target,
      citation: row.citation || row.evidence,
      review_reason: row.seek_clarification || row.review || row.recommendation,
    }));

  if (avg === null && fallback) return fallback;

  return {
    ...(fallback || {}),
    avg_confidence: avg,
    system_score: avg === null ? fallback?.system_score ?? "" : Math.round(avg * 10000) / 100,
    threshold: 0.9,
    ai_recommended: avg === null ? Boolean(fallback?.ai_recommended) : avg < 0.9,
    document_type: fallback?.document_type || "",
    review_items: list.length || fallback?.review_items || 0,
    low_confidence_items: focusItems.length,
    focus_items: focusItems,
  };
}

export function fallbackQualityProfile(meta) {
  const stats = meta?.stats || {};
  const reviewItems = Number(stats.ADDED || 0) + Number(stats.DELETED || 0) + Number(stats.MODIFIED || 0);
  return {
    avg_confidence: null,
    system_score: "",
    threshold: 0.9,
    ai_recommended: reviewItems > 0,
    document_type: inferDocumentType(meta),
    review_items: reviewItems,
    low_confidence_items: 0,
    focus_items: [],
  };
}

export function inferDocumentType(meta) {
  const text = [
    meta?.base_label,
    meta?.target_label,
    meta?.label,
    meta?.base_format,
    meta?.target_format,
    meta?.source_format,
  ].filter(Boolean).join(" ").toLowerCase();

  if (!text.trim()) return "";
  if (/\blease|tenant|landlord|rent\b/.test(text)) return "Lease agreement";
  if (/\bcontract|agreement|terms|clause|legal\b/.test(text)) return "Contract / agreement";
  if (/\binvoice|bill|statement\b/.test(text)) return "Invoice / statement";
  if (/\bpurchase order|po\b/.test(text)) return "Purchase order";
  if (/\bcatalog|sku|product|automotive|motor|vehicle|model\b/.test(text)) return "Product catalog / specification";
  if (/\bretail|price|pricing|promotion\b/.test(text)) return "Retail pricing document";
  if (/\bengineering|drawing|specification|technical\b/.test(text)) return "Engineering specification";
  if (/\bpolicy|procedure|sop|process\b/.test(text)) return "Policy / procedure";
  if (/\bspreadsheet|xlsx|xls|csv|tsv\b/.test(text)) return "Spreadsheet";
  if (/\bdocx|word\b/.test(text)) return "Word document";
  if (/\bpdf\b/.test(text)) return "PDF document";
  return "Business document";
}

export function navButtonStyle(disabled) {
  return {
    border: "1px solid #c9c0b0",
    background: disabled ? "#f1ece3" : "#fffdf8",
    color: disabled ? "#98a2b3" : "#344054",
    borderRadius: 7,
    padding: "7px 12px",
    cursor: disabled ? "default" : "pointer",
    fontWeight: 600,
  };
}

export function smallNavButtonStyle(disabled) {
  return {
    border: "1px solid #c9c0b0",
    background: disabled ? "#f1ece3" : "#fffdf8",
    color: disabled ? "#98a2b3" : "#344054",
    borderRadius: 6,
    padding: "5px 8px",
    cursor: disabled ? "default" : "pointer",
    fontWeight: 600,
    fontSize: 12,
  };
}

export function nativeHighlightStyle(kind, compact = false) {
  const norm = String(kind || "").toLowerCase();
  if (norm === "added") {
    return {
      background: compact ? COLORS.ADDED.bg : "rgba(31,160,70,.08)",
      border: compact ? undefined : `1px solid ${COLORS.ADDED.border}`,
      borderInlineStart: `3px solid ${COLORS.ADDED.border}`,
    };
  }
  if (norm === "deleted") {
    return {
      background: compact ? COLORS.DELETED.bg : "rgba(218,54,54,.08)",
      border: compact ? undefined : `1px solid ${COLORS.DELETED.border}`,
      borderInlineStart: `3px solid ${COLORS.DELETED.border}`,
    };
  }
  if (norm === "modified") {
    return {
      background: compact ? "rgba(196,85,16,.10)" : "rgba(196,85,16,.08)",
      border: compact ? undefined : `1px solid ${COLORS.MODIFIED.border}`,
      borderInlineStart: `3px solid ${COLORS.MODIFIED.border}`,
    };
  }
  return {
    background: compact ? "transparent" : "#fffdf8",
    border: compact ? undefined : "1px solid transparent",
    borderInlineStart: "3px solid transparent",
  };
}

// React widgets/components
export function Header({ runId, workspace, onStartOver, onJobs, onDownloadReport }) {
  const showBreadcrumbs = workspace !== "home";

  return (
    <header style={{ marginBottom: 18 }}>
      {showBreadcrumbs && (
        <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, color: "#667085", marginBottom: 8, fontWeight: 500 }}>
          <button
            onClick={onStartOver}
            style={{ background: "none", border: "none", padding: 0, color: "#2f5f4f", cursor: "pointer", fontWeight: 600, fontSize: 13 }}
          >
            Home
          </button>
          <span>/</span>
          {workspace === "jobs" ? (
            <span style={{ color: "#344054", fontWeight: 600 }}>Job status</span>
          ) : (
            <>
              <button
                onClick={onJobs}
                style={{ background: "none", border: "none", padding: 0, color: "#2f5f4f", cursor: "pointer", fontWeight: 600, fontSize: 13 }}
              >
                Job status
              </button>
              <span>/</span>
              <span style={{ color: "#344054", fontWeight: 600 }}>
                {workspace === "compare" ? "Comparison workspace" : "Extraction workspace"}
              </span>
            </>
          )}
        </div>
      )}

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
            <div
              style={{
                width: 30,
                height: 30,
                borderRadius: 7,
                background: "#1f2937",
                color: "white",
                display: "grid",
                placeItems: "center",
                fontSize: 12,
                fontWeight: 650,
              }}
            >
              AI
            </div>
            <h1 style={{ margin: 0, fontSize: 26, letterSpacing: 0, lineHeight: 1.1, fontWeight: 600 }} dir="auto">
              {BRAND.name}
            </h1>
          </div>
          <p style={{ margin: "6px 0 0", color: "#667085", fontSize: 14 }} dir="auto">{BRAND.subtitle}</p>
        </div>

        {(runId || workspace !== "home") && (
          <div className="header-actions" style={{ display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "flex-end" }}>
            {runId && (
              <button onClick={onDownloadReport} style={primaryButtonStyle()}>
                Export PDF report
              </button>
            )}
            {workspace !== "jobs" && (
              <button onClick={onJobs} style={secondaryButtonStyle()}>
                Job status
              </button>
            )}
            <button onClick={onStartOver} style={secondaryButtonStyle()}>
              New workflow
            </button>
          </div>
        )}
      </div>
    </header>
  );
}

export function StatsBar({ meta }) {
  const s = meta.stats || {};

  return (
    <section className="stats-strip">
      <StatChip label="Added" value={s.ADDED || 0} tone="added" />
      <StatChip label="Deleted" value={s.DELETED || 0} tone="deleted" />
      <StatChip label="Modified" value={s.MODIFIED || 0} tone="modified" />
      <StatChip label="Unchanged" value={s.UNCHANGED || 0} />
      <StatChip label="Coverage" value={`${safePercent(meta.coverage?.base)} / ${safePercent(meta.coverage?.target)}`} />
      <StatChip label="Pages" value={`${meta.n_pages_base} / ${meta.n_pages_target}`} />
      {Number(meta.ai_usage?.total_tokens || 0) > 0 && (
        <StatChip label="AI tokens" value={`${formatInt(meta.ai_usage.total_tokens)} (${formatInt(meta.ai_usage.calls || 0)} calls)`} />
      )}
    </section>
  );
}

function safePercent(value) {
  return typeof value === "number" ? `${value.toFixed(1)}%` : "-";
}

export function StatChip({ label, value, tone }) {
  return (
    <span className={`stat-chip ${tone || "neutral"}`}>
      <span>{label}</span>
      <strong>{value}</strong>
    </span>
  );
}

export function AiUsageInline({ usage }) {
  const total = Number(usage?.total_tokens || 0);
  const calls = Number(usage?.calls || 0);

  if (!total) {
    return <span style={{ color: "#98a2b3" }}>0</span>;
  }

  return (
    <span title={`${formatInt(usage?.prompt_tokens || 0)} input, ${formatInt(usage?.completion_tokens || 0)} output`}>
      {formatInt(total)} <span style={{ color: "#667085" }}>({formatInt(calls)} calls)</span>
    </span>
  );
}

export function AiUsageCard({ usage }) {
  const total = Number(usage?.total_tokens || 0);
  if (!total) return null;

  const operations = Array.isArray(usage?.operations) ? usage.operations : [];
  const latestOps = operations.slice(-4);

  return (
    <div style={{ border: "1px solid #ded6c8", borderRadius: 8, padding: 10, marginBottom: 12, background: "#fbfaf6", fontSize: 12, color: "#475467" }}>
      <strong style={{ color: "#344054" }}>AI usage:</strong>{" "}
      {formatInt(total)} tokens · {formatInt(usage.calls || 0)} call(s) · {formatInt(usage.prompt_tokens || 0)} input / {formatInt(usage.completion_tokens || 0)} output
      {latestOps.length > 0 && (
        <div style={{ marginTop: 6, display: "flex", flexWrap: "wrap", gap: 6 }}>
          {latestOps.map((op, idx) => (
            <span key={`${op.operation || "op"}-${idx}`} style={{ border: "1px solid #d8d0c3", borderRadius: 999, padding: "3px 7px", background: "#fffdf8" }}>
              {op.operation || "AI call"} · {formatInt(op.total_tokens || 0)}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export function ProcessingState({ progress, message, status }) {
  const statusInfo = jobStatusInfo(status);
  const safeProgress = Math.max(0, Math.min(100, Number(progress) || 0));
  const width = statusInfo.isFailed ? 100 : Math.max(7, statusInfo.isComplete ? 100 : safeProgress);

  return (
    <div style={{ marginTop: 20 }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 7, color: "#475467", fontSize: 13 }}>
        <span style={{ fontWeight: 600 }}>{message}</span>
        <span>{safeProgress}%</span>
      </div>
      <div className="progress-track">
        <div
          className={`progress-fill ${statusInfo.className}`}
          style={{
            width: `${width}%`,
          }}
        />
      </div>
      <p style={{ margin: "10px 0 0", color: "#667085", fontSize: 13 }}>
        The comparison is still running. This view updates automatically as the backend reports progress.
      </p>
    </div>
  );
}

export function ErrorBox({ message }) {
  return (
    <div
      style={{
        marginTop: 16,
        border: "1px solid #f0b4b4",
        background: "#fff5f5",
        color: "#9f1d1d",
        borderRadius: 8,
        padding: 13,
        fontSize: 14,
        fontWeight: 600,
        lineHeight: 1.45,
        whiteSpace: "pre-wrap",
      }}
    >
      {normalizeErrorMessage(message)}
    </div>
  );
}

export function SoftLoading({ label }) {
  return <div style={{ padding: 20, color: "#667085", fontWeight: 600 }}>{label}</div>;
}

export function EmptyState({ label }) {
  return (
    <div style={{ padding: 18, border: "1px dashed #c9c0b0", borderRadius: 8, color: "#667085", background: "#fbfaf7", fontWeight: 600 }}>
      {label}
    </div>
  );
}

export function JobStatusBadge({ status }) {
  const info = jobStatusInfo(status);
  return (
    <span style={{ display: "inline-block", background: info.tone.chip, color: info.tone.text, border: `1px solid ${info.tone.border}`, padding: "2px 8px", borderRadius: 999, fontWeight: 650, fontSize: 12 }}>
      {info.label}
    </span>
  );
}

export function jobStatusInfo(status) {
  const value = String(status || "queued").toLowerCase();
  const isComplete = value === "complete" || value === "completed";
  const isFailed = value === "failed" || value === "error";
  const isRunning = value === "running" || value === "processing" || value === "uploading";
  return {
    value,
    label: isComplete ? "complete" : isFailed ? "failed" : value,
    className: isComplete ? "complete" : isFailed ? "failed" : isRunning ? "running" : "queued",
    tone: isComplete ? COLORS.ADDED : isFailed ? COLORS.DELETED : isRunning ? COLORS.MODIFIED : COLORS.UNCHANGED,
    isComplete,
    isFailed,
  };
}

export function ProgressMini({ value, status }) {
  const info = jobStatusInfo(status);
  const pct = Math.max(0, Math.min(100, Number(value) || 0));
  const width = info.isFailed ? 100 : info.isComplete ? 100 : pct;
  return (
    <div>
      <div className="progress-track" style={{ height: 6, minWidth: 140 }}>
        <div className={`progress-fill ${info.className}`} style={{ width: `${width}%` }} />
      </div>
      <div style={{ marginTop: 5, color: "#667085", fontSize: 12 }}>{info.isFailed ? "failed" : `${info.isComplete ? 100 : pct}%`}</div>
    </div>
  );
}

export function MetricCard({ label, value }) {
  return (
    <div style={{ background: "#fbfaf6", border: "1px solid #ded6c8", borderRadius: 8, padding: 12 }}>
      <div style={{ fontSize: 12, color: "#667085", fontWeight: 600 }}>{label}</div>
      <div style={{ marginTop: 4, fontSize: 22, color: "#1f2937", fontWeight: 650 }}>{value}</div>
    </div>
  );
}

export function ChangeBadge({ type }) {
  const normalized = String(type || "MODIFIED").toUpperCase();
  const c = COLORS[normalized] || COLORS.MODIFIED;

  return (
    <span style={{ display: "inline-block", background: c.chip, color: c.text, border: `1px solid ${c.border}`, padding: "2px 8px", borderRadius: 999, fontWeight: 650, fontSize: 12 }}>
      {normalized}
    </span>
  );
}

export function Confidence({ value }) {
  if (typeof value !== "number") return <span>-</span>;
  const pct = Math.round(value * 100);
  const color = pct >= 80 ? COLORS.ADDED.text : pct >= 65 ? COLORS.MODIFIED.text : COLORS.DELETED.text;
  return <span style={{ color, fontWeight: 650 }}>{pct}%</span>;
}
