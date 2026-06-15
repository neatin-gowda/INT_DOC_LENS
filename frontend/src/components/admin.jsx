import React, { useEffect, useState } from "react";
import { API } from "../config.js";
import { friendlyFetchError, readResponseError, SoftLoading, EmptyState, ErrorBox } from "./common.jsx";

const roleOptions = [
  ["platform_admin", "Platform Admin"],
  ["business_unit_admin", "Business Unit Admin"],
  ["reviewer", "Reviewer"],
  ["submitter", "Submitter"],
  ["viewer", "Viewer"],
];

const emptyForm = {
  supplier: "",
  family_name: "",
  domain: "generic",
  description: "",
  allowed_roles: [],
};

export function AdminWorkspace() {
  const [datasets, setDatasets] = useState([]);
  const [selectedId, setSelectedId] = useState("");
  const [detail, setDetail] = useState(null);
  const [form, setForm] = useState(emptyForm);
  const [guidelines, setGuidelines] = useState("");
  const [roles, setRoles] = useState([]);
  const [columnRules, setColumnRules] = useState("");
  const [seedFile, setSeedFile] = useState(null);
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState("");
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");

  const headers = () => ({
    "Content-Type": "application/json",
    "X-User-Role": window.sessionStorage.getItem("simulated_role") || "platform_admin",
  });

  const loadDatasets = async () => {
    setLoading(true);
    setError("");
    try {
      const data = await apiJson("/admin/datasets", { headers: headers() });
      setDatasets(data.datasets || []);
    } catch (err) {
      setError(friendlyFetchError(err));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadDatasets();
  }, []);

  const selectDataset = async (id) => {
    setSelectedId(id);
    setError("");
    setNotice("");
    try {
      const data = await apiJson(`/admin/datasets/${id}`, { headers: headers() });
      setDetail(data);
      setGuidelines(data.prompt_guidelines || "");
      setRoles(data.allowed_roles || []);
      setColumnRules(JSON.stringify(data.template_profile?.column_rules || [], null, 2));
      await loadDocuments(id);
    } catch (err) {
      setError(friendlyFetchError(err));
    }
  };

  const loadDocuments = async (id) => {
    try {
      const data = await apiJson(`/admin/datasets/${id}/documents`, { headers: headers() });
      setDocuments(data.documents || []);
    } catch {
      setDocuments([]);
    }
  };

  const createDataset = async (event) => {
    event.preventDefault();
    setBusy("create");
    setError("");
    setNotice("");
    try {
      const data = await apiJson("/admin/datasets", {
        method: "POST",
        headers: headers(),
        body: JSON.stringify(form),
      });
      setNotice("Use case created.");
      setForm(emptyForm);
      await loadDatasets();
      if (data.id) await selectDataset(data.id);
    } catch (err) {
      setError(friendlyFetchError(err));
    } finally {
      setBusy("");
    }
  };

  const saveDataset = async () => {
    if (!selectedId) return;
    setBusy("save");
    setError("");
    setNotice("");
    try {
      await apiJson(`/admin/datasets/${selectedId}`, {
        method: "PUT",
        headers: headers(),
        body: JSON.stringify({
          prompt_guidelines: guidelines,
          allowed_roles: roles,
          column_rules: parseColumnRules(columnRules),
        }),
      });
      setNotice("Use case settings saved.");
      await loadDatasets();
      await selectDataset(selectedId);
    } catch (err) {
      setError(friendlyFetchError(err));
    } finally {
      setBusy("");
    }
  };

  const bootstrap = async (event) => {
    event.preventDefault();
    if (!selectedId || !seedFile) return;
    setBusy("bootstrap");
    setError("");
    setNotice("");
    try {
      const formData = new FormData();
      formData.append("file", seedFile);
      formData.append("use_llm", "true");
      const resp = await fetch(`${API}/admin/datasets/${selectedId}/bootstrap`, {
        method: "POST",
        headers: { "X-User-Role": window.sessionStorage.getItem("simulated_role") || "platform_admin" },
        body: formData,
      });
      if (!resp.ok) throw new Error(await readResponseError(resp));
      setNotice("Seed document learned and template profile updated.");
      setSeedFile(null);
      await selectDataset(selectedId);
    } catch (err) {
      setError(friendlyFetchError(err));
    } finally {
      setBusy("");
    }
  };

  const deleteDataset = async () => {
    if (!selectedId || !detail) return;
    setBusy("delete");
    setError("");
    setNotice("");
    try {
      await apiJson(`/admin/datasets/${selectedId}`, {
        method: "DELETE",
        headers: headers(),
      });
      setNotice("Use case deleted.");
      setSelectedId("");
      setDetail(null);
      setDocuments([]);
      await loadDatasets();
    } catch (err) {
      setError(friendlyFetchError(err));
    } finally {
      setBusy("");
    }
  };

  return (
    <section className="admin-studio">
      <div className="admin-intro">
        <div>
          <h2>Use Case Onboarding</h2>
          <p>Register datasets, seed documents, access roles, and family-specific extraction guidance.</p>
        </div>
      </div>

      {notice && <div className="admin-notice">{notice}</div>}
      {error && <ErrorBox message={error} />}

      <div className="admin-grid">
        <aside className="admin-panel">
          <div className="admin-panel-head">
            <h3>Use Cases</h3>
            <button type="button" className="ghost-action compact" onClick={loadDatasets}>Refresh</button>
          </div>
          {loading ? (
            <SoftLoading label="Loading use cases" />
          ) : datasets.length === 0 ? (
            <EmptyState label="No use cases onboarded yet." />
          ) : (
            <div className="dataset-list">
              {datasets.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className={`dataset-item${selectedId === item.id ? " active" : ""}`}
                  onClick={() => selectDataset(item.id)}
                >
                  <strong>{item.supplier}</strong>
                  <span>{item.family_name}</span>
                  <small>{item.domain || "generic"} · {(item.allowed_roles || []).length || "all"} roles</small>
                </button>
              ))}
            </div>
          )}
        </aside>

        <main className="admin-panel">
          <div className="admin-panel-head">
            <h3>Create Use Case</h3>
          </div>
          <form className="admin-form" onSubmit={createDataset}>
            <label>
              Supplier or entity
              <input value={form.supplier} required onChange={(e) => setForm({ ...form, supplier: e.target.value })} placeholder="Ford, HR, Finance, Legal" />
            </label>
            <label>
              Use case or family
              <input value={form.family_name} required onChange={(e) => setForm({ ...form, family_name: e.target.value })} placeholder="Order Guide, Policy, Contract" />
            </label>
            <label>
              Domain
              <select value={form.domain} onChange={(e) => setForm({ ...form, domain: e.target.value })}>
                <option value="generic">Generic</option>
                <option value="automotive">Automotive</option>
                <option value="legal">Legal</option>
                <option value="financial">Financial</option>
                <option value="hr">HR</option>
                <option value="engineering">Engineering</option>
              </select>
            </label>
            <label>
              Content description
              <textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} placeholder="Describe tables, identifiers, expected fields, and business context." />
            </label>
            <RolePicker value={form.allowed_roles} onChange={(allowed_roles) => setForm({ ...form, allowed_roles })} />
            <button type="submit" className="primary-action" disabled={busy === "create"}>{busy === "create" ? "Creating" : "Create use case"}</button>
          </form>
        </main>
      </div>

      <section className="admin-panel">
        {!detail ? (
          <EmptyState label="Select a use case to configure profile learning." />
        ) : (
          <div className="admin-detail">
            <div className="admin-detail-head">
              <div>
                <h3>{detail.supplier} · {detail.family_name}</h3>
                <p>{detail.description || "No description yet."}</p>
              </div>
              <button type="button" className="danger-action compact" onClick={deleteDataset} disabled={busy === "delete"}>
                {busy === "delete" ? "Deleting" : "Delete"}
              </button>
            </div>

            <div className="admin-config-grid">
              <label>
                Prompt and extraction guidelines
                <textarea value={guidelines} onChange={(e) => setGuidelines(e.target.value)} placeholder="Example: prioritize PCB thickness, PCV code changes, nested pricing rows, or legal obligations." />
              </label>
              <label>
                Column rules JSON
                <textarea className="mono" value={columnRules} onChange={(e) => setColumnRules(e.target.value)} />
              </label>
            </div>
            <RolePicker value={roles} onChange={setRoles} />
            <button type="button" className="primary-action" onClick={saveDataset} disabled={busy === "save"}>
              {busy === "save" ? "Saving" : "Save profile settings"}
            </button>

            <form className="seed-form" onSubmit={bootstrap}>
              <div>
                <h4>Seed Document Learning</h4>
                <p>Upload a representative document to bootstrap headings, stable keys, table signatures, and column rules.</p>
              </div>
              <input type="file" accept=".pdf,.doc,.docx" onChange={(e) => setSeedFile(e.target.files?.[0] || null)} />
              <button type="submit" className="primary-action" disabled={!seedFile || busy === "bootstrap"}>
                {busy === "bootstrap" ? "Learning" : "Learn from seed"}
              </button>
            </form>

            <div className="admin-profile-grid">
              <ProfileCard title="Stable Keys" items={detail.template_profile?.stable_key_patterns} labelKey="name" valueKey="regex" />
              <ProfileCard title="Column Rules" items={detail.template_profile?.column_rules} labelKey="role" valueKey="pattern" />
              <ProfileCard title="Seed Documents" items={documents} labelKey="label" valueKey="page_count" />
            </div>
          </div>
        )}
      </section>
    </section>
  );
}

function RolePicker({ value, onChange }) {
  const toggle = (role) => {
    onChange(value.includes(role) ? value.filter((item) => item !== role) : [...value, role]);
  };
  return (
    <fieldset className="role-picker">
      <legend>Allowed roles</legend>
      {roleOptions.map(([role, label]) => (
        <label key={role}>
          <input type="checkbox" checked={value.includes(role)} onChange={() => toggle(role)} />
          {label}
        </label>
      ))}
    </fieldset>
  );
}

function ProfileCard({ title, items, labelKey, valueKey }) {
  const list = Array.isArray(items) ? items : [];
  return (
    <div className="profile-card">
      <h4>{title}</h4>
      {list.length === 0 ? (
        <span>No entries yet.</span>
      ) : (
        list.slice(0, 8).map((item, index) => (
          <p key={index}>
            <strong>{String(item?.[labelKey] ?? "Item")}</strong>
            <small>{String(item?.[valueKey] ?? "")}</small>
          </p>
        ))
      )}
    </div>
  );
}

async function apiJson(path, options = {}) {
  const resp = await fetch(`${API}${path}`, options);
  if (!resp.ok) throw new Error(await readResponseError(resp));
  return resp.json();
}

function parseColumnRules(text) {
  const trimmed = text.trim();
  if (!trimmed) return [];
  const parsed = JSON.parse(trimmed);
  if (!Array.isArray(parsed)) throw new Error("Column rules must be a JSON array.");
  return parsed;
}
