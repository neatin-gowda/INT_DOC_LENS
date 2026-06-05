import React, { useState, useEffect } from "react";
import { API, COLORS } from "../config.js";
import {
  inputStyle,
  labelStyle,
  miniButtonStyle,
  presetButtonStyle,
  primaryButtonStyle,
  secondaryButtonStyle,
  smallTh,
  smallTd,
} from "../styles.js";
import {
  readResponseError,
  friendlyFetchError,
  SoftLoading,
  EmptyState,
  StatChip,
  AiUsageCard,
  isInternalColumn,
  displayCell,
  unique,
  trim,
  tableMinWidth,
  rowChangeType,
  ChangeBadge,
  normalizeConfidence,
  defaultRowColumns,
  defaultValueColumns,
  inferColumns,
} from "./common.jsx";

export function TablesWorkspace({ runId }) {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [baseTableId, setBaseTableId] = useState("");
  const [targetTableId, setTargetTableId] = useState("");
  const [baseRowColumns, setBaseRowColumns] = useState([]);
  const [targetRowColumns, setTargetRowColumns] = useState([]);
  const [baseValueColumns, setBaseValueColumns] = useState([]);
  const [targetValueColumns, setTargetValueColumns] = useState([]);
  const [rowFilter, setRowFilter] = useState("");
  const [baseView, setBaseView] = useState(null);
  const [targetView, setTargetView] = useState(null);
  const [viewBusy, setViewBusy] = useState(false);
  const [diff, setDiff] = useState(null);
  const [compareBusy, setCompareBusy] = useState(false);
  const [exportBusy, setExportBusy] = useState(false);
  const [useTableAi, setUseTableAi] = useState(false);
  const [tableQuestion, setTableQuestion] = useState("Summarize selected table changes, including value changes and header-only changes, with clarification questions.");
  const [showConfig, setShowConfig] = useState(false);

  useEffect(() => {
    setData(null);
    setError("");

    fetch(`${API}/runs/${runId}/tables?include_rows=true`)
      .then(async (r) => {
        if (!r.ok) throw new Error(await readResponseError(r));
        return r.json();
      })
      .then((payload) => setData(payload))
      .catch((err) => {
        setError(friendlyFetchError(err));
        setData({ base: [], target: [] });
      });
  }, [runId]);

  const baseTables = data?.base || [];
  const targetTables = data?.target || [];
  const baseTable = baseTables.find((t) => t.id === baseTableId);
  const targetTable = targetTables.find((t) => t.id === targetTableId);

  useEffect(() => {
    setDiff(null);
    setBaseView(null);
    if (!baseTable) {
      setBaseRowColumns([]);
      setBaseValueColumns([]);
      return;
    }
    setBaseRowColumns(defaultRowColumns(baseTable));
    setBaseValueColumns(defaultValueColumns(baseTable));
  }, [baseTableId]);

  useEffect(() => {
    setDiff(null);
    setTargetView(null);
    if (!targetTable) {
      setTargetRowColumns([]);
      setTargetValueColumns([]);
      return;
    }
    setTargetRowColumns(defaultRowColumns(targetTable));
    setTargetValueColumns(defaultValueColumns(targetTable));
  }, [targetTableId]);

  useEffect(() => {
    if (!showConfig) return undefined;
    let cancelled = false;
    const timer = setTimeout(async () => {
      if (!baseTable && !targetTable) return;

      setViewBusy(true);
      setError("");

      try {
        const [basePayload, targetPayload] = await Promise.all([
          baseTable
            ? fetchTableView(runId, "base", baseTable.id, unique([...baseRowColumns, ...baseValueColumns.filter((c) => !baseRowColumns.includes(c))]), rowFilter)
            : Promise.resolve(null),
          targetTable
            ? fetchTableView(runId, "target", targetTable.id, unique([...targetRowColumns, ...targetValueColumns.filter((c) => !targetRowColumns.includes(c))]), rowFilter)
            : Promise.resolve(null),
        ]);

        if (cancelled) return;

        setBaseView(basePayload);
        setTargetView(targetPayload);
      } catch (err) {
        if (!cancelled) setError(friendlyFetchError(err));
      } finally {
        if (!cancelled) setViewBusy(false);
      }
    }, 250);

    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [
    showConfig,
    runId,
    baseTableId,
    targetTableId,
    baseRowColumns.join("|"),
    targetRowColumns.join("|"),
    baseValueColumns.join("|"),
    targetValueColumns.join("|"),
    rowFilter,
  ]);

  const tableComparePayload = (overrides = {}) => ({
    base_table_id: baseTableId,
    target_table_id: targetTableId,
    base_row_columns: baseRowColumns,
    target_row_columns: targetRowColumns,
    base_value_columns: baseValueColumns.filter((c) => !baseRowColumns.includes(c)),
    target_value_columns: targetValueColumns.filter((c) => !targetRowColumns.includes(c)),
    row_filter: rowFilter.trim() || null,
    use_ai: overrides.use_ai ?? useTableAi,
    question: tableQuestion.trim() || null,
    limit: 200,
  });

  const compare = async (overrides = {}) => {
    if (!baseTableId || !targetTableId) return;

    setCompareBusy(true);
    setDiff(null);
    setError("");

    try {
      const r = await fetch(`${API}/runs/${runId}/compare-table-columns`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(tableComparePayload(overrides)),
      });

      if (!r.ok) throw new Error(await readResponseError(r));
      setDiff(await r.json());
    } catch (err) {
      setError(friendlyFetchError(err));
    } finally {
      setCompareBusy(false);
    }
  };

  useEffect(() => {
    if (baseTableId && targetTableId && baseRowColumns.length > 0 && targetRowColumns.length > 0) {
      compare();
    }
  }, [baseTableId, targetTableId, baseRowColumns.length, targetRowColumns.length]);

  const exportTablePdf = async () => {
    if (!baseTableId || !targetTableId || exportBusy) return;

    setExportBusy(true);
    setError("");

    try {
      const r = await fetch(`${API}/runs/${runId}/table-report.pdf`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...tableComparePayload(), use_ai: false }),
      });

      if (!r.ok) throw new Error(await readResponseError(r));

      const blob = await r.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `table_comparison_${runId}.pdf`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    } catch (err) {
      setError(friendlyFetchError(err));
    } finally {
      setExportBusy(false);
    }
  };

  if (!data) return <SoftLoading label="Loading detected tables" />;

  return (
    <div>
      <div style={{ background: "#fbfaf6", border: "1px solid #ded6c8", borderRadius: 8, padding: 12, marginBottom: 14 }}>
        <div style={{ fontWeight: 650, marginBottom: 4 }}>Table workspace</div>
        <div style={{ color: "#667085", fontSize: 13, lineHeight: 1.45 }}>
          Select tables by page and topic, choose the row/feature columns and value columns, preview the selected rows, then compare only those table slices.
        </div>
      </div>

      {error && <ErrorBox message={error} />}

      <div className="table-picker-grid" style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)", gap: 14, marginBottom: 14 }}>
        <TablePicker title="Baseline document table" value={baseTableId} onChange={setBaseTableId} tables={baseTables} />
        <TablePicker title="Revised document table" value={targetTableId} onChange={setTargetTableId} tables={targetTables} />
      </div>

      <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 14 }}>
        <button
          type="button"
          onClick={() => setShowConfig(!showConfig)}
          style={{
            ...secondaryButtonStyle(),
            display: "flex",
            alignItems: "center",
            gap: 6,
            fontSize: 13,
            padding: "8px 14px",
            borderColor: showConfig ? "#1f2937" : "#c9c0b0",
            background: showConfig ? "#f3f0e8" : "#fffdf8",
            fontWeight: 600,
          }}
        >
          {showConfig ? "Hide column configuration ✕" : "Adjust columns (Advanced) ⚙"}
        </button>
      </div>

      <div className="table-picker-grid" style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)", gap: 14, marginBottom: 14 }}>
        <TableInfo table={baseTable} emptyLabel="Select a baseline table to inspect its title, page, columns, and rows." />
        <TableInfo table={targetTable} emptyLabel="Select a revised table to inspect its title, page, columns, and rows." />
      </div>

      {showConfig && (
        <>
          <RowFilterSuggestions baseTable={baseTable} targetTable={targetTable} onSelect={setRowFilter} />

          <div className="table-config-grid" style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)", gap: 14, marginBottom: 14 }}>
            <ColumnConfig
              title="Baseline columns"
              table={baseTable}
              rowColumns={baseRowColumns}
              setRowColumns={(cols) => {
                const clean = unique(cols);
                setBaseRowColumns(clean);
                setBaseValueColumns((prev) => prev.filter((c) => !clean.includes(c)));
              }}
              valueColumns={baseValueColumns}
              setValueColumns={(cols) => {
                const clean = unique(cols).filter((c) => !baseRowColumns.includes(c));
                setBaseValueColumns(clean);
              }}
            />
            <ColumnConfig
              title="Revised columns"
              table={targetTable}
              rowColumns={targetRowColumns}
              setRowColumns={(cols) => {
                const clean = unique(cols);
                setTargetRowColumns(clean);
                setTargetValueColumns((prev) => prev.filter((c) => !clean.includes(c)));
              }}
              valueColumns={targetValueColumns}
              setValueColumns={(cols) => {
                const clean = unique(cols).filter((c) => !targetRowColumns.includes(c));
                setTargetValueColumns(clean);
              }}
            />
          </div>

          {viewBusy && <SoftLoading label="Rendering selected table values" />}

          <div className="table-selected-stack">
            <SelectedTableView title="Baseline selected view" view={baseView} />
            <SelectedTableView title="Revised selected view" view={targetView} />
          </div>
        </>
      )}

      <div className="table-action-grid" style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) auto auto", gap: 10, alignItems: "end", marginBottom: 14 }}>
        <div>
          <label style={labelStyle}>Find rows in selected tables</label>
          <input
            value={rowFilter}
            onChange={(e) => setRowFilter(e.target.value)}
            placeholder="Optional: type a feature, code, package, PCV, or phrase to narrow the rows"
            style={inputStyle}
            dir="auto"
          />
          <div style={{ color: "#667085", fontSize: 12, marginTop: 5 }}>
            Leave blank to compare all rows in the selected table slice.
          </div>
          <label style={{ display: "flex", alignItems: "center", gap: 8, color: "#475467", fontSize: 13, marginTop: 8 }}>
            <input
              type="checkbox"
              checked={useTableAi}
              onChange={(e) => setUseTableAi(e.target.checked)}
            />
            Add AI insight to this compare
          </label>
          {useTableAi && (
            <input
              value={tableQuestion}
              onChange={(e) => setTableQuestion(e.target.value)}
              placeholder="Optional AI focus: changed values, renamed headers, missing rows, review questions"
              style={{ ...inputStyle, marginTop: 8 }}
              dir="auto"
            />
          )}
        </div>
        <button
          onClick={() => compare()}
          disabled={compareBusy || !baseTableId || !targetTableId}
          style={primaryButtonStyle(compareBusy || !baseTableId || !targetTableId, { height: 40 })}
        >
          {compareBusy ? "Comparing" : useTableAi ? "Compare with AI" : "Compare tables"}
        </button>
        <button
          onClick={exportTablePdf}
          disabled={exportBusy || !baseTableId || !targetTableId}
          style={secondaryButtonStyle(exportBusy || !baseTableId || !targetTableId ? { height: 40, opacity: 0.65, cursor: "default" } : { height: 40 })}
        >
          {exportBusy ? "Exporting" : "Export PDF"}
        </button>
      </div>

      {diff && <TableColumnCompareResult diff={diff} />}
    </div>
  );
}

async function fetchTableView(runId, side, tableId, columns, rowFilter) {
  const r = await fetch(`${API}/runs/${runId}/table-view`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      side,
      table_id: tableId,
      columns,
      row_filter: rowFilter.trim() || null,
      limit: 300,
    }),
  });

  if (!r.ok) throw new Error(await readResponseError(r));
  return r.json();
}

export function TablePicker({ title, value, onChange, tables }) {
  return (
    <div>
      <label style={labelStyle}>{title}</label>
      <select value={value} onChange={(e) => onChange(e.target.value)} style={inputStyle}>
        <option value="">Select a detected table</option>
        {tables.map((t) => (
          <option key={t.id} value={t.id} dir="auto">
            {t.display_name || `Page ${t.page_first || "-"} - ${t.title || t.header_preview || "Detected table"}`}
          </option>
        ))}
      </select>
    </div>
  );
}

export function TableInfo({ table, emptyLabel }) {
  if (!table) return <EmptyState label={emptyLabel} />;

  const columns = (table.columns || []).filter((col) => !isInternalColumn(col));

  return (
    <div className="table-preview-shell" style={{ background: "#fffdf8", border: "1px solid #ded6c8", borderRadius: 8, padding: 12 }}>
      <div style={{ display: "flex", justifyContent: "space-between", gap: 10, alignItems: "flex-start" }}>
        <div style={{ minWidth: 0 }}>
          <div className="cell-truncate" title={table.title || table.area || "Detected table"} style={{ fontWeight: 650 }} dir="auto">
            {table.title || table.area || "Detected table"}
          </div>
          <div style={{ marginTop: 4, color: "#667085", fontSize: 13 }}>
            {table.page_label || `Page ${table.page_first || "-"}`} · {table.n_columns || columns.length} columns · {table.n_rows || 0} rows
          </div>
        </div>
        {table.extraction_confidence && (
          <span style={{ color: "#667085", fontSize: 12, whiteSpace: "nowrap" }}>{Math.round(table.extraction_confidence * 100)}%</span>
        )}
      </div>

      <div style={{ marginTop: 10, display: "flex", gap: 6, flexWrap: "wrap" }}>
        {columns.slice(0, 10).map((col) => (
          <span key={col} title={col} style={{ border: "1px solid #d8d0c3", borderRadius: 999, padding: "2px 7px", fontSize: 12, color: "#475467", background: "#fbfaf6", maxWidth: 220, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }} dir="auto">
            {col}
          </span>
        ))}
        {columns.length > 10 && <span style={{ color: "#667085", fontSize: 12, padding: "3px 0" }}>+{columns.length - 10} more</span>}
      </div>
    </div>
  );
}

export function RowFilterSuggestions({ baseTable, targetTable, onSelect }) {
  const suggestions = unique([
    ...((baseTable?.row_keys || []).filter(Boolean)),
    ...((targetTable?.row_keys || []).filter(Boolean)),
  ]).slice(0, 18);

  if (!suggestions.length) return null;

  return (
    <div style={{ background: "#fbfaf6", border: "1px solid #ded6c8", borderRadius: 8, padding: 10, marginBottom: 14 }}>
      <div style={{ color: "#344054", fontSize: 13, fontWeight: 650, marginBottom: 7 }}>Quick row filters</div>
      <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
        {suggestions.map((key) => (
          <button
            key={key}
            type="button"
            onClick={() => onSelect(key)}
            title={key}
            style={{
              border: "1px solid #d8d0c3",
              background: "#fffdf8",
              color: "#344054",
              borderRadius: 999,
              padding: "4px 8px",
              fontSize: 12,
              cursor: "pointer",
              maxWidth: 240,
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {trim(key, 38)}
          </button>
        ))}
      </div>
    </div>
  );
}

export function ColumnConfig({ title, table, rowColumns, setRowColumns, valueColumns, setValueColumns }) {
  if (!table) return <EmptyState label={`${title}: select a table first.`} />;

  const columns = (table.columns || []).filter((col) => !isInternalColumn(col));

  return (
    <div className="table-preview-shell" style={{ background: "#fffdf8", border: "1px solid #ded6c8", borderRadius: 8, padding: 12 }}>
      <div style={{ fontWeight: 650, marginBottom: 10 }}>{title}</div>

      <MultiSelect
        label="Row / feature columns"
        helper="Used to identify and align rows, such as Feature, Item, Order Code, Package, or PCV."
        options={columns}
        selected={rowColumns}
        onChange={setRowColumns}
      />

      <div style={{ height: 12 }} />

      <MultiSelect
        label="Value columns"
        helper="Values to render and compare. Row/feature columns are excluded here to avoid duplicate output."
        options={columns.filter((c) => !rowColumns.includes(c))}
        selected={valueColumns}
        onChange={setValueColumns}
      />
    </div>
  );
}

export function MultiSelect({ label, helper, options, selected, onChange }) {
  const toggle = (option) => {
    if (selected.includes(option)) onChange(selected.filter((x) => x !== option));
    else onChange([...selected, option]);
  };

  const selectAll = () => onChange(options);
  const clear = () => onChange([]);

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", gap: 8, alignItems: "baseline", marginBottom: 6 }}>
        <div>
          <div style={{ fontSize: 13, color: "#344054", fontWeight: 650 }}>{label}</div>
          <div style={{ fontSize: 12, color: "#667085" }}>{helper}</div>
        </div>
        <div style={{ display: "flex", gap: 6 }}>
          <button type="button" onClick={selectAll} style={miniButtonStyle}>All</button>
          <button type="button" onClick={clear} style={miniButtonStyle}>Clear</button>
        </div>
      </div>

      <div className="dl-scrollbar" style={{ maxHeight: 150, overflow: "auto", border: "1px solid #e0d8ca", borderRadius: 8, padding: 8, background: "#fbfaf6", minWidth: 0 }}>
        {options.length === 0 ? (
          <div style={{ color: "#667085", fontSize: 13 }}>No columns available.</div>
        ) : (
          options.map((option) => (
            <label key={option} title={option} style={{ display: "flex", gap: 8, alignItems: "center", padding: "5px 4px", fontSize: 13, color: "#344054", minWidth: 0 }}>
              <input type="checkbox" checked={selected.includes(option)} onChange={() => toggle(option)} />
              <span className="cell-truncate">{option}</span>
            </label>
          ))
        )}
      </div>
    </div>
  );
}

export function TablePreview({ columns, rows }) {
  columns = (columns || []).filter((col) => !isInternalColumn(col));
  if (!columns.length || !rows.length) return null;

  const minWidth = tableMinWidth(columns.length, 420, 920);

  return (
    <div className="dl-scrollbar table-scroll-frame" style={{ marginTop: 12 }}>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12, minWidth }}>
        <thead>
          <tr style={{ background: "#f2eee6" }}>
            {columns.map((col) => <th key={col} title={col} style={smallTh} dir="auto">{col}</th>)}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              {columns.map((col) => <td key={col} style={smallTd} dir="auto">{displayCell(row.values?.[col])}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function SelectedTableView({ title, view }) {
  if (!view) return <EmptyState label={`${title}: select a table and columns to render values.`} />;

  return (
    <div className="table-preview-shell" style={{ background: "#fffdf8", border: "1px solid #ded6c8", borderRadius: 8, padding: 12 }}>
      <div style={{ display: "flex", justifyContent: "space-between", gap: 10, flexWrap: "wrap", marginBottom: 10 }}>
        <div style={{ minWidth: 0 }}>
          <div style={{ fontWeight: 650 }}>{title}</div>
          <div className="cell-wrap" style={{ color: "#667085", fontSize: 13, marginTop: 3 }}>
            {view.title || view.table?.display_name || "Selected table"} · showing {view.count || 0} of {view.total_rows || 0} row(s)
          </div>
        </div>
      </div>

      <RenderedRowsTable columns={view.columns || []} rows={view.rows || []} />
    </div>
  );
}

export function RenderedRowsTable({ columns, rows }) {
  columns = (columns || []).filter((col) => !isInternalColumn(col));
  if (!columns.length) return <EmptyState label="No columns selected." />;
  if (!rows.length) return <EmptyState label="No rows match the selected table/filter." />;

  const minWidth = tableMinWidth(columns.length + 1, 560, 1280);

  return (
    <div className="dl-scrollbar table-scroll-frame">
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13, minWidth }}>
        <thead>
          <tr style={{ background: "#f2eee6", color: "#344054" }}>
            <th style={smallTh} dir="auto">Row</th>
            {columns.map((col) => <th key={col} title={col} style={smallTh} dir="auto">{col}</th>)}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              <td style={{ ...smallTd, color: "#667085", minWidth: 160 }} dir="auto">{row.row_key || row.definition || `Row ${i + 1}`}</td>
              {columns.map((col) => (
                <td key={col} style={smallTd} dir="auto">{displayCell(row.values?.[col])}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function TableColumnCompareResult({ diff }) {
  const counts = diff.counts || {};
  const rows = diff.rows || diff.row_diffs || [];
  const alignment = diff.value_column_alignment || diff.header_alignment || [];

  return (
    <div style={{ marginTop: 14 }}>
      {diff.answer && (
        <div style={{ background: "#fffdf8", border: "1px solid #d8d0c3", borderLeft: "4px solid #2f5f4f", borderRadius: 8, padding: 12, marginBottom: 12, color: "#344054" }}>
          {diff.answer}
        </div>
      )}

      {diff.review_summary && (
        <div style={{ background: "#fbfaf6", border: "1px solid #ded6c8", borderRadius: 8, padding: 12, marginBottom: 12 }}>
          <div style={{ fontWeight: 650, marginBottom: 5 }}>Selected table review</div>
          <div style={{ color: "#475467", fontSize: 13, lineHeight: 1.45 }}>{diff.review_summary}</div>
        </div>
      )}

      {diff.ai_review && (
        <div style={{ background: "#fffdf8", border: "1px solid #d8d0c3", borderLeft: `4px solid ${diff.ai_review.available ? "#2f5f4f" : COLORS.DELETED.border}`, borderRadius: 8, padding: 12, marginBottom: 12 }}>
          <div style={{ fontWeight: 650, marginBottom: 5 }}>
            Selected table AI insight {diff.ai_review.available ? "- successful" : "- unavailable"}
            {typeof normalizeConfidence(diff.ai_review.confidence) === "number" ? ` | Confidence ${Math.round(normalizeConfidence(diff.ai_review.confidence) * 100)}%` : ""}
          </div>
          {diff.ai_review.available ? (
            <>
              {diff.ai_review.answer && <div dir="auto" style={{ color: "#344054", lineHeight: 1.45, marginBottom: 10 }}>{diff.ai_review.answer}</div>}
              {Array.isArray(diff.ai_review.rows) && diff.ai_review.rows.length > 0 && (
                <GenericRowsTable columns={diff.ai_review.columns?.length ? diff.ai_review.columns : inferColumns(diff.ai_review.rows)} rows={diff.ai_review.rows} />
              )}
              <AiUsageCard usage={diff.ai_review.usage} />
            </>
          ) : (
            <div style={{ color: COLORS.DELETED.text }} dir="auto">{normalizeErrorMessage(diff.ai_review.error) || "AI review was not generated."}</div>
          )}
        </div>
      )}

      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 12 }}>
        <StatChip label="Added rows" value={counts.ADDED || counts.added || 0} tone="added" />
        <StatChip label="Deleted rows" value={counts.DELETED || counts.deleted || 0} tone="deleted" />
        <StatChip label="Modified rows" value={counts.MODIFIED || counts.modified || 0} tone="modified" />
        <StatChip label="Compared changes" value={rows.length} />
      </div>

      {alignment.length > 0 && <ColumnAlignment alignment={alignment} />}

      {Array.isArray(diff.header_insights) && diff.header_insights.length > 0 && (
        <div style={{ marginTop: 14 }}>
          <div style={{ fontWeight: 650, marginBottom: 8 }}>Header and meaning checks</div>
          <GenericRowsTable columns={diff.header_insight_columns || ["Baseline Header", "Revised Header", "Header Match", "Observation", "Seek Clarification"]} rows={diff.header_insights} />
        </div>
      )}

      {Array.isArray(diff.review_rows) && diff.review_rows.length > 0 && (
        <div style={{ marginTop: 14 }}>
          <GenericRowsTable columns={diff.review_columns || ["Feature", "Change", "Seek Clarification"]} rows={diff.review_rows} />
        </div>
      )}

      <div className="table-selected-stack" style={{ marginTop: 14 }}>
        <SelectedTableView title="Baseline compared values" view={diff.base_preview} />
        <SelectedTableView title="Revised compared values" view={diff.target_preview} />
      </div>

      {rows.length === 0 ? (
        <EmptyState label="No row-level differences were found for the selected columns." />
      ) : (
        <div style={{ marginTop: 14 }}>
          {rows.slice(0, 200).map((row, i) => <TableColumnRowDiff key={i} row={row} />)}
        </div>
      )}
    </div>
  );
}

export function ColumnAlignment({ alignment }) {
  return (
    <div style={{ background: "#fffdf8", border: "1px solid #ded6c8", borderRadius: 8, padding: 12 }}>
      <div style={{ fontWeight: 650, marginBottom: 8 }}>Selected column alignment</div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
        {alignment.slice(0, 60).map((item, i) => {
          const type = item.status === "matched" || item.status === "selected_pair" ? "MATCH" : item.status === "base_only" ? "DELETED" : "ADDED";
          return (
            <span key={i} style={{ border: `1px solid ${COLORS[type].border}`, background: COLORS[type].chip, color: COLORS[type].text, borderRadius: 999, padding: "3px 8px", fontSize: 12 }}>
              {item.base_col || "new"} {item.target_col ? `-> ${item.target_col}` : ""}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export function TableColumnRowDiff({ row }) {
  const type = row.change_type || row.status || "MODIFIED";
  const diffs = row.field_diffs || row.cell_diffs || row.value_diffs || row.diffs || [];

  return (
    <div style={{ background: "#fffdf8", border: "1px solid #ded6c8", borderLeft: `4px solid ${(COLORS[type] || COLORS.MODIFIED).border}`, borderRadius: 8, padding: 12, marginBottom: 10 }}>
      <div style={{ display: "flex", justifyContent: "space-between", gap: 10, flexWrap: "wrap" }}>
        <div>
          <ChangeBadge type={type} />
          <span style={{ marginLeft: 8, fontWeight: 650 }} dir="auto">
            {row.row_key?.base || row.row_key?.target || row.key || row.definition || "row"}
          </span>
        </div>
        {typeof row.match_score === "number" && (
          <span style={{ color: "#667085", fontSize: 13 }}>Match {Math.round(row.match_score * 100)}%</span>
        )}
      </div>

      <div className="two-grid" style={{ marginTop: 10, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
        <DefinitionBox title="Baseline row" value={row.row_definition?.base || row.base_row?.definition || row.before} />
        <DefinitionBox title="Revised row" value={row.row_definition?.target || row.target_row?.definition || row.after} />
      </div>

      {diffs.length > 0 ? (
        <FieldDiffTable rows={diffs} />
      ) : (
        <div style={{ marginTop: 10 }}>
          <ValuesSideBySide base={row.base_row?.values || row.base_values} target={row.target_row?.values || row.target_values} />
        </div>
      )}
    </div>
  );
}

export function ValuesSideBySide({ base, target }) {
  return (
    <div className="two-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
      <ValuesTable title="Baseline values" values={base} />
      <ValuesTable title="Revised values" values={target} />
    </div>
  );
}

export function GenericRowsTable({ columns, rows }) {
  const visibleColumns = (columns || []).filter((col) => !isInternalColumn(col));
  return (
    <div className="dl-scrollbar" style={{ overflowX: "auto" }}>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13, minWidth: 780 }}>
        <thead>
          <tr style={{ background: "#1f2937", color: "white" }}>
            {visibleColumns.map((col) => <th key={col} dir="auto" style={{ ...smallTh, padding: "10px 12px", borderBottom: "1px solid #384250", color: "white" }}>{col}</th>)}
          </tr>
        </thead>
        <tbody>
          {rows.slice(0, 200).map((row, i) => (
            <tr key={i}>
              {visibleColumns.map((col) => <td key={col} dir="auto" style={smallTd}>{displayCell(row[col])}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function FieldDiffTable({ rows }) {
  if (!rows?.length) return null;

  return (
    <div className="dl-scrollbar" style={{ overflowX: "auto", marginTop: 10 }}>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13, minWidth: 640 }}>
        <thead>
          <tr style={{ background: "#f2eee6", color: "#344054" }}>
            <th style={smallTh} dir="auto">Field</th>
            <th style={smallTh} dir="auto">Before</th>
            <th style={smallTh} dir="auto">After</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i}>
              <td style={smallTd} dir="auto">{r.field || r.column || r.name || "-"}</td>
              <td style={{ ...smallTd, color: COLORS.DELETED.text }} dir="auto">{displayCell(r.before ?? r.base ?? r.old)}</td>
              <td style={{ ...smallTd, color: COLORS.ADDED.text }} dir="auto">{displayCell(r.after ?? r.target ?? r.new)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function ValuesTable({ title, values }) {
  const entries = Object.entries(values || {}).filter(([k]) => !["text", "definition"].includes(k));
  if (!entries.length) return <DefinitionBox title={title} value="-" />;

  return (
    <div style={{ background: "#fbfaf6", border: "1px solid #e0d8ca", borderRadius: 8, padding: 10 }}>
      <div style={{ fontSize: 12, color: "#667085", fontWeight: 650, marginBottom: 6 }}>{title}</div>
      <div className="dl-scrollbar" style={{ overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
          <tbody>
            {entries.slice(0, 40).map(([key, value]) => (
              <tr key={key}>
                <td style={{ ...smallTd, width: "32%", color: "#667085" }}>{key}</td>
                <td style={smallTd}>{displayCell(value)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function DefinitionBox({ title, value }) {
  return (
    <div style={{ background: "#fbfaf6", border: "1px solid #e0d8ca", borderRadius: 8, padding: 10 }}>
      <div style={{ fontSize: 12, color: "#667085", fontWeight: 650, marginBottom: 4 }}>{title}</div>
      <div style={{ fontSize: 13, color: "#344054", lineHeight: 1.4 }} dir="auto">{displayCell(value)}</div>
    </div>
  );
}
