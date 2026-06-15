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
  use_case_type: "comparison",
  expected_formats: ["pdf", "docx"],
  sample_plan: "",
  onboarding_notes: "",
  learning_mode: "deterministic_first",
  allowed_roles: [],
};

const formatOptions = [
  ["pdf", "PDF"],
  ["docx", "Word"],
  ["xlsx", "Excel"],
  ["csv", "CSV/TSV"],
  ["image", "Scanned image"],
];

const learningModes = [
  ["deterministic_first", "Deterministic first"],
  ["ai_assisted_bootstrap", "AI-assisted bootstrap"],
  ["manual_profile", "Manual profile"],
];

export function AdminWorkspace() {
  const [datasets, setDatasets] = useState([]);
  const [selectedId, setSelectedId] = useState("");
  const [detail, setDetail] = useState(null);
  const [form, setForm] = useState(emptyForm);
  const [guidelines, setGuidelines] = useState("");
  const [roles, setRoles] = useState([]);
  const [columnRules, setColumnRules] = useState("");
  const [profileMeta, setProfileMeta] = useState({
    use_case_type: "comparison",
    expected_formats: ["pdf", "docx"],
    sample_plan: "",
    onboarding_notes: "",
    learning_mode: "deterministic_first",
  });
  const [sampleFiles, setSampleFiles] = useState({ baseline: null, revised: null, variations: [] });
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
      setProfileMeta({
        use_case_type: data.use_case_type || "comparison",
        expected_formats: data.expected_formats || ["pdf", "docx"],
        sample_plan: data.sample_plan || "",
        onboarding_notes: data.onboarding_notes || "",
        learning_mode: data.learning_mode || "deterministic_first",
      });
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

  const addLabelToRules = (label) => {
    try {
      const current = parseColumnRules(columnRules);
      if (current.some((r) => r.role === label)) {
        setNotice(`A rule for label '${label}' already exists.`);
        return;
      }
      const updated = [...current, { pattern: `.*${label.toLowerCase().replace(/_/g, ".*")}.*`, role: label }];
      setColumnRules(JSON.stringify(updated, null, 2));
      setNotice(`Added suggested mapping rule for '${label}'. Click 'Save profile settings' to apply.`);
    } catch {
      setError("Column rules JSON is malformed. Please fix it before adding labels.");
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
          ...profileMeta,
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

  const bootstrapSamples = async (event) => {
    event.preventDefault();
    if (!selectedId || (!sampleFiles.baseline && !sampleFiles.revised && sampleFiles.variations.length === 0)) return;
    setBusy("bootstrap");
    setError("");
    setNotice("");
    try {
      const formData = new FormData();
      if (sampleFiles.baseline) formData.append("baseline", sampleFiles.baseline);
      if (sampleFiles.revised) formData.append("revised", sampleFiles.revised);
      sampleFiles.variations.forEach((file) => formData.append("variations", file));
      formData.append("notes", profileMeta.onboarding_notes || "");
      formData.append("use_llm", String(profileMeta.learning_mode === "ai_assisted_bootstrap"));
      const resp = await fetch(`${API}/admin/datasets/${selectedId}/samples`, {
        method: "POST",
        headers: { "X-User-Role": window.sessionStorage.getItem("simulated_role") || "platform_admin" },
        body: formData,
      });
      if (!resp.ok) throw new Error(await readResponseError(resp));
      setNotice("Sample documents learned and model profile updated.");
      setSampleFiles({ baseline: null, revised: null, variations: [] });
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
                  <small>{item.use_case_type || "comparison"} · {(item.expected_formats || []).join(", ") || "formats"} · {(item.allowed_roles || []).length || "all"} roles</small>
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
              Use case type
              <select value={form.use_case_type} onChange={(e) => setForm({ ...form, use_case_type: e.target.value })}>
                <option value="comparison">Comparison</option>
                <option value="extraction">Extraction</option>
              </select>
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
            <FormatPicker value={form.expected_formats} onChange={(expected_formats) => setForm({ ...form, expected_formats })} />
            <label>
              Sample strategy
              <textarea value={form.sample_plan} onChange={(e) => setForm({ ...form, sample_plan: e.target.value })} placeholder="Example: upload two model years plus 3-5 supplier variations with nested PCV/PCB tables." />
            </label>
            <label>
              Content description
              <textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} placeholder="Describe tables, identifiers, expected fields, and business context." />
            </label>
            <label>
              Onboarding notes
              <textarea value={form.onboarding_notes} onChange={(e) => setForm({ ...form, onboarding_notes: e.target.value })} placeholder="Add business rules, known pain points, and what reviewers expect from this model." />
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
                <span className="admin-model-badge">{profileMeta.use_case_type} model · {(profileMeta.expected_formats || []).join(", ")}</span>
              </div>
              <button type="button" className="danger-action compact" onClick={deleteDataset} disabled={busy === "delete"}>
                {busy === "delete" ? "Deleting" : "Delete"}
              </button>
            </div>

            <div className="admin-config-grid">
              <label>
                Use case type
                <select value={profileMeta.use_case_type} onChange={(e) => setProfileMeta({ ...profileMeta, use_case_type: e.target.value })}>
                  <option value="comparison">Comparison</option>
                  <option value="extraction">Extraction</option>
                </select>
              </label>
              <label>
                Learning mode
                <select value={profileMeta.learning_mode} onChange={(e) => setProfileMeta({ ...profileMeta, learning_mode: e.target.value })}>
                  {learningModes.map(([value, label]) => <option key={value} value={value}>{label}</option>)}
                </select>
              </label>
              <div className="admin-wide-field">
                <FormatPicker value={profileMeta.expected_formats} onChange={(expected_formats) => setProfileMeta({ ...profileMeta, expected_formats })} />
              </div>
              <label>
                Sample strategy
                <textarea value={profileMeta.sample_plan} onChange={(e) => setProfileMeta({ ...profileMeta, sample_plan: e.target.value })} placeholder="How many samples or variations should represent this model?" />
              </label>
              <label>
                Onboarding notes
                <textarea value={profileMeta.onboarding_notes} onChange={(e) => setProfileMeta({ ...profileMeta, onboarding_notes: e.target.value })} placeholder="Business context, known table layouts, accuracy targets, and reviewer comments." />
              </label>
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

            <form className="seed-form" onSubmit={bootstrapSamples}>
              <div>
                <h4>Sample Document Learning</h4>
                <p>For comparison models, upload a baseline, revised document, and any format/layout variations. The profile stores structure, page range, table signatures, stable keys, and reviewer guidance.</p>
              </div>
              <div className="sample-upload-grid">
                <label>
                  Baseline sample
                  <input type="file" accept=".pdf,.doc,.docx,.xls,.xlsx,.xlsm,.xlsb,.csv,.tsv,.png,.jpg,.jpeg,.tif,.tiff" onChange={(e) => setSampleFiles({ ...sampleFiles, baseline: e.target.files?.[0] || null })} />
                </label>
                <label>
                  Revised sample
                  <input type="file" accept=".pdf,.doc,.docx,.xls,.xlsx,.xlsm,.xlsb,.csv,.tsv,.png,.jpg,.jpeg,.tif,.tiff" onChange={(e) => setSampleFiles({ ...sampleFiles, revised: e.target.files?.[0] || null })} />
                </label>
                <label>
                  Additional variations
                  <input type="file" multiple accept=".pdf,.doc,.docx,.xls,.xlsx,.xlsm,.xlsb,.csv,.tsv,.png,.jpg,.jpeg,.tif,.tiff" onChange={(e) => setSampleFiles({ ...sampleFiles, variations: Array.from(e.target.files || []) })} />
                </label>
              </div>
              <button type="submit" className="primary-action" disabled={(!sampleFiles.baseline && !sampleFiles.revised && sampleFiles.variations.length === 0) || busy === "bootstrap"}>
                {busy === "bootstrap" ? "Learning" : "Learn from samples"}
              </button>
            </form>

            <div className="admin-profile-grid">
              <ProfileSummary profile={detail.template_profile?.sample_profile} />
              <ProfileCard title="Sample Documents" items={documents} labelKey="label" valueKey="page_count" />
              
              <AIReasoningSummary 
                profile={detail.template_profile?.ai_reasoning_profile} 
                onAddLabel={addLabelToRules} 
              />
              
              <ProfileCard title="Stable Keys" items={detail.template_profile?.stable_key_patterns} labelKey="name" valueKey="regex" />
              <ProfileCard title="Column Rules" items={detail.template_profile?.column_rules} labelKey="role" valueKey="pattern" />
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

function FormatPicker({ value, onChange }) {
  const selected = Array.isArray(value) ? value : [];
  const toggle = (format) => {
    onChange(selected.includes(format) ? selected.filter((item) => item !== format) : [...selected, format]);
  };
  return (
    <fieldset className="format-picker">
      <legend>Expected formats</legend>
      {formatOptions.map(([format, label]) => (
        <label key={format}>
          <input type="checkbox" checked={selected.includes(format)} onChange={() => toggle(format)} />
          {label}
        </label>
      ))}
    </fieldset>
  );
}

function ProfileSummary({ profile }) {
  const data = profile && typeof profile === "object" ? profile : {};
  return (
    <div className="profile-card">
      <h4>Model Samples</h4>
      <p>
        <strong>{String(data.sample_count || 0)} samples</strong>
        <small>{(data.roles_present || []).join(", ") || "No roles learned yet"}</small>
      </p>
      <p>
        <strong>{String(data.average_pages || 0)} avg pages</strong>
        <small>{String(data.min_pages || 0)} min · {String(data.max_pages || 0)} max</small>
      </p>
      {data.last_bootstrap_notes ? (
        <p>
          <strong>Latest notes</strong>
          <small>{String(data.last_bootstrap_notes)}</small>
        </p>
      ) : null}
    </div>
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

function AIReasoningSummary({ profile, onAddLabel }) {
  const data = profile && typeof profile === "object" ? profile : {};
  const rating = String(data.complexity_rating || "low").toUpperCase();
  const conf = data.confidence_score !== undefined ? Math.round(data.confidence_score * 100) : null;
  const reasons = Array.isArray(data.complexity_reasons) ? data.complexity_reasons : [];
  const tips = Array.isArray(data.enhancement_tips) ? data.enhancement_tips : [];
  const labels = Array.isArray(data.suggested_data_labels) ? data.suggested_data_labels : [];

  const badgeColor = rating === "HIGH" ? "#9f2525" : rating === "MEDIUM" ? "#c45510" : "#1f7e41";
  const badgeBg = rating === "HIGH" ? "#fff7f7" : rating === "MEDIUM" ? "#fffbf7" : "#f7fff9";
  const badgeBorder = rating === "HIGH" ? "#f1c6c6" : rating === "MEDIUM" ? "#f7d6c1" : "#c1f1d1";

  return (
    <div className="profile-card" style={{ gridColumn: "span 2" }}>
      <h4 style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span>🧠 AI Onboarding Analysis</span>
        <span style={{
          fontSize: 11,
          fontWeight: 700,
          color: badgeColor,
          background: badgeBg,
          border: `1px solid ${badgeBorder}`,
          padding: "2px 8px",
          borderRadius: 99
        }}>
          {rating} COMPLEXITY
        </span>
      </h4>
      
      {conf !== null && (
        <p style={{ marginTop: 8 }}>
          <strong>Parser Confidence Rating: {conf}%</strong>
          <small>Estimated baseline accuracy without AI assistance</small>
        </p>
      )}

      {reasons.length > 0 && (
        <p style={{ marginTop: 10 }}>
          <strong>Structural Complexity Indicators</strong>
          <small style={{ display: "block", marginTop: 4 }}>
            {reasons.map((r, i) => <span key={i} style={{ display: "block", color: "var(--text-primary)" }}>• {r}</span>)}
          </small>
        </p>
      )}

      {tips.length > 0 && (
        <p style={{ marginTop: 10 }}>
          <strong>Extraction Optimization Recommendations</strong>
          <small style={{ display: "block", marginTop: 4 }}>
            {tips.map((t, i) => <span key={i} style={{ display: "block", color: "var(--text-primary)" }}>• {t}</span>)}
          </small>
        </p>
      )}

      {labels.length > 0 && (
        <p style={{ marginTop: 12 }}>
          <strong>Suggested Data Labels (Click to map)</strong>
          <span style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 6 }}>
            {labels.map((l) => (
              <button
                key={l}
                type="button"
                onClick={() => onAddLabel(l)}
                style={{
                  background: "var(--surface-sunken)",
                  border: "1px solid var(--border)",
                  color: "var(--text-primary)",
                  borderRadius: "4px",
                  padding: "2px 8px",
                  fontSize: 12,
                  fontWeight: 650,
                  cursor: "pointer"
                }}
                title="Click to automatically create a mapping rule for this label"
              >
                + {l}
              </button>
            ))}
          </span>
        </p>
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
