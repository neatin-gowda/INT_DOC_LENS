import React, { useEffect, useRef, useState } from "react";
import { API, FILE_ACCEPT } from "../config.js";

export function UploadPanel({ onUpload, busy, onAdmin }) {
  const datasetState = useDatasets("comparison");
  const locked = busy || datasetState.loading || !datasetState.selectedId || datasetState.datasets.length === 0;

  return (
    <form onSubmit={onUpload} className="doc-workflow-card">
      <div className="workflow-card-head">
        <div>
          <h2>Compare two documents</h2>
        </div>
      </div>

      <UseCaseSelector {...datasetState} busy={busy} onAdmin={onAdmin} />
      {!datasetState.loading && datasetState.datasets.length === 0 ? (
        <UseCaseRequiredNotice onAdmin={onAdmin} />
      ) : null}

      <div className="upload-grid compare">
        <FileInput label="Baseline" helper="Approved or reference file" name="base" disabled={locked} />
        <FileInput label="Revised" helper="Latest or proposed file" name="target" disabled={locked} />

        <div className="workflow-action-rail">
          <button disabled={locked} className="primary-action full">
            {busy ? "Processing" : "Compare documents"}
          </button>
          <div className="workflow-note">Side-by-side preview, semantic changes, and export.</div>
        </div>
      </div>
    </form>
  );
}

export function ExtractUploadPanel({ onUpload, busy, onAdmin }) {
  const datasetState = useDatasets("extraction");
  const locked = busy || datasetState.loading || !datasetState.selectedId || datasetState.datasets.length === 0;

  return (
    <form onSubmit={onUpload} className="doc-workflow-card">
      <div className="workflow-card-head">
        <div>
          <h2>Extract documents</h2>
        </div>
      </div>

      <UseCaseSelector {...datasetState} busy={busy} onAdmin={onAdmin} />
      {!datasetState.loading && datasetState.datasets.length === 0 ? (
        <UseCaseRequiredNotice onAdmin={onAdmin} />
      ) : null}

      <div className="upload-grid extract">
        <FileInput
          label="Document or image"
          helper="PDF, image, Word, Excel, xlsb, CSV, or TSV"
          name="document"
          disabled={locked}
          multiple
        />

        <div className="workflow-action-rail">
          <button disabled={locked} className="primary-action full">
            {busy ? "Extracting" : "Extract content"}
          </button>
          <div className="workflow-note">
            Text, tables, OCR, structured JSON, and document query.
          </div>
        </div>
      </div>
    </form>
  );
}

function useDatasets(useCaseType) {
  const [datasets, setDatasets] = useState([]);
  const [selectedId, setSelectedId] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;
    const load = async () => {
      setLoading(true);
      setError("");
      try {
        const role = window.sessionStorage.getItem("simulated_role") || "platform_admin";
        const resp = await fetch(`${API}/datasets`, {
          headers: { "X-User-Role": role },
        });
        if (!resp.ok) {
          const message = resp.status === 404
            ? "Use case service is not available. Confirm the backend admin/datasets routes are deployed, then refresh."
            : `Could not load use cases (${resp.status})`;
          throw new Error(message);
        }
        const payload = await resp.json();
        const allItems = payload.datasets || [];
        const items = allItems.filter((item) => (item.use_case_type || "comparison") === useCaseType);
        if (!active) return;
        setDatasets(items);
        setSelectedId((current) => (current && items.some((item) => item.id === current) ? current : ""));
      } catch (err) {
        if (!active) return;
        setDatasets([]);
        setSelectedId("");
        setError(err?.message || "Could not load use cases.");
      } finally {
        if (active) setLoading(false);
      }
    };
    load();
    return () => {
      active = false;
    };
  }, []);

  return { datasets, selectedId, setSelectedId, loading, error };
}

function UseCaseSelector({ datasets, selectedId, setSelectedId, loading, error, busy, onAdmin }) {
  return (
    <div className="usecase-selector">
      <label>
        <span>Use case</span>
        <select
          name="family_id"
          value={selectedId}
          onChange={(event) => setSelectedId(event.target.value)}
          required
          disabled={busy || loading || datasets.length === 0}
        >
          <option value="">{loading ? "Loading use cases" : "Select a use case"}</option>
          {datasets.map((item) => (
            <option key={item.id} value={item.id}>
              {item.supplier} - {item.family_name} ({item.domain || "generic"})
            </option>
          ))}
        </select>
      </label>
      {error ? <p className="usecase-error">{error}</p> : null}
      {datasets.length > 0 ? (
        <button type="button" className="ghost-action compact" onClick={onAdmin}>
          Manage
        </button>
      ) : null}
    </div>
  );
}

function UseCaseRequiredNotice({ onAdmin }) {
  return (
    <div className="usecase-required">
      <strong>Use case required</strong>
      <p>Create or bootstrap a document use case before uploading files. The selected use case supplies metadata, template rules, access policy, and extraction guidance.</p>
      <button type="button" className="primary-action compact" onClick={onAdmin}>
        Open Admin Studio
      </button>
    </div>
  );
}

export function FileInput({ label, helper, name, disabled, multiple = false }) {
  const [fileName, setFileName] = useState("");
  const inputRef = useRef(null);

  const openPicker = () => {
    if (!disabled) inputRef.current?.click();
  };

  return (
    <div
      onClick={openPicker}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") openPicker();
      }}
      role="button"
      tabIndex={disabled ? -1 : 0}
      className={`file-lane${disabled ? " disabled" : ""}`}
    >
      <input
        ref={inputRef}
        type="file"
        name={name}
        accept={FILE_ACCEPT}
        multiple={multiple}
        required
        disabled={disabled}
        onClick={(e) => e.stopPropagation()}
        onChange={(e) => {
          const files = Array.from(e.target.files || []);
          setFileName(files.length > 1 ? `${files.length} files selected` : files[0]?.name || "");
        }}
        style={{ position: "absolute", width: 1, height: 1, opacity: 0, pointerEvents: "none" }}
      />

      <div className="file-lane-head">
        <div>
          <div className="file-lane-title">{label}</div>
          <div className="file-lane-helper">{helper}</div>
        </div>
        <span className="file-lane-pill">Files</span>
      </div>

      <div className={`file-lane-value${fileName ? " selected" : ""}`}>
        {fileName || "Select a file"}
      </div>
    </div>
  );
}
