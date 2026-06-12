import { API } from "../config.js";

export async function apiJson(path, options = {}) {
  const resp = await fetch(`${API}${path}`, {
    ...options,
    headers: {
      ...(options.body instanceof FormData ? {} : { "Content-Type": "application/json" }),
      ...(options.headers || {}),
    },
  });
  if (!resp.ok) throw new Error(await responseError(resp));
  return resp.json();
}

export async function fetchTools() {
  const payload = await apiJson("/tools");
  return payload.tools || [];
}

async function responseError(resp) {
  try {
    const text = await resp.text();
    if (!text) return `Request failed with status ${resp.status}`;
    try {
      const parsed = JSON.parse(text);
      return parsed.detail || parsed.error || parsed.message || `Request failed with status ${resp.status}`;
    } catch {
      return text.length > 240 ? `Server error (${resp.status})` : text;
    }
  } catch {
    return `Request failed with status ${resp.status}`;
  }
}
