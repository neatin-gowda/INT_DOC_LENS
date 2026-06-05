export const API = import.meta.env.VITE_API_BASE || "/api";

export const BRAND = {
  name: "DocuLens AI Agent",
  subtitle: "Document comparison with semantic review, visual evidence, citations, and reports.",
};

export const FILE_ACCEPT = ".pdf,.png,.jpg,.jpeg,.tif,.tiff,.bmp,.webp,.doc,.docx,.xls,.xlsx,.xlsm,.xlsb,.csv,.tsv";

export const COLORS = {
  ADDED: { bg: "rgba(31,160,70,.16)", border: "#1e8a47", text: "#176c38", chip: "#eef8f1" },
  DELETED: { bg: "rgba(218,54,54,.14)", border: "#bb3030", text: "#9f2525", chip: "#fff2f2" },
  MODIFIED: { bg: "rgba(218,185,42,.20)", border: "#9a7a10", text: "#735c11", chip: "#fff8df" },
  UNCHANGED: { bg: "rgba(96,108,128,.12)", border: "#98a2b3", text: "#475467", chip: "#f2f4f7" },
  MATCH: { bg: "#eef4ff", border: "#6b7da8", text: "#344054", chip: "#eef4ff" },
};
