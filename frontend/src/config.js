export const API = import.meta.env.VITE_API_BASE || "/api";

export const BRAND = {
  name: "Altrai",
  subtitle: "Unified enterprise AI workspace.",
};

export const FILE_ACCEPT = ".pdf,.png,.jpg,.jpeg,.tif,.tiff,.bmp,.webp,.doc,.docx,.xls,.xlsx,.xlsm,.xlsb,.csv,.tsv";

export const COLORS = {
  ADDED: { bg: "var(--diff-added-bg)", border: "var(--diff-added-border)", text: "var(--diff-added-text)", chip: "var(--diff-added-chip)" },
  DELETED: { bg: "var(--diff-deleted-bg)", border: "var(--diff-deleted-border)", text: "var(--diff-deleted-text)", chip: "var(--diff-deleted-chip)" },
  MODIFIED: { bg: "var(--diff-modified-bg)", border: "var(--diff-modified-border)", text: "var(--diff-modified-text)", chip: "var(--diff-modified-chip)" },
  UNCHANGED: { bg: "var(--diff-unchanged-bg)", border: "var(--diff-unchanged-border)", text: "var(--diff-unchanged-text)", chip: "var(--diff-unchanged-chip)" },
  MATCH: { bg: "var(--diff-match-bg)", border: "var(--diff-match-border)", text: "var(--diff-match-text)", chip: "var(--diff-match-chip)" },
};
