"""
Generic semantic anchoring.

The spec-doc world has stable alphanumeric codes (Ford's 765, 99H...).
The lease/legal world doesn't — but it has its own stable anchors:

  * Clause/section numbering: "Article IV", "Section 3.2(b)", "12.4.1"
  * Defined terms: "Tenant", "Premises", "Rent Commencement Date" (capitalized words)
  * Dollar amounts: "$12,500.00 per month"
  * Dates: "December 1, 2024"
  * Cross-references: "as defined in Section 5"

For ANY document, we extract every recognizable anchor type. Two
blocks across versions are then alignable if they share enough anchors,
even when the page numbers differ and the surrounding wording has been
rephrased.

The anchor extraction is deterministic and language-agnostic for the
patterns above. Domain-specific anchor types (e.g., ICD-10 codes for
medical, CFR citations for compliance) can be plugged in via the
TemplateProfile without code changes.
"""
from __future__ import annotations

import re
from dataclasses import dataclass


# Generic anchor patterns — extend by adding to TemplateProfile.stable_key_patterns
ANCHOR_PATTERNS: dict[str, re.Pattern] = {
    # "Article IV", "ARTICLE 4"
    "article":       re.compile(r"\bARTICLE\s+(?:[IVXLC]+|\d+)\b", re.IGNORECASE),
    # "Section 3.2(b)", "Section 12", "§3.4"
    "section_ref":   re.compile(r"\b(?:Section|§)\s*(\d+(?:\.\d+)*(?:\([a-z0-9]+\))?)", re.IGNORECASE),
    # "Schedule A", "Exhibit B", "Appendix 2"
    "schedule_ref":  re.compile(r"\b(?:Schedule|Exhibit|Appendix|Annex)\s+([A-Z]|\d+)\b"),
    # Numeric clause numbering at line start: "3.2.1", "10.4(a)"
    "clause_num":    re.compile(r"^\s*(\d+(?:\.\d+){1,4})(?:\([a-z0-9]+\))?\b"),
    # Dollar amounts: $12,500 or $12,500.00 or USD 12500
    "dollar_amount": re.compile(r"\$\s?\d{1,3}(?:,\d{3})*(?:\.\d{2})?|\bUSD\s+\d[\d,\.]*"),
    # Percentages
    "percent":       re.compile(r"\b\d{1,3}(?:\.\d+)?\s*%"),
    # Dates: "December 1, 2024" or "1 December 2024" or "12/01/2024"
    "date_long":     re.compile(
        r"\b(?:January|February|March|April|May|June|July|August|September|October|November|December)\s+\d{1,2},?\s+\d{4}\b",
        re.IGNORECASE,
    ),
    "date_short":    re.compile(r"\b\d{1,2}[/-]\d{1,2}[/-]\d{2,4}\b"),
    # Existing alphanumeric stable codes (carries over from spec-doc use case)
    "code_2_4":      re.compile(r"\b[A-Z0-9]{2}[A-Z0-9]{0,2}[A-Z]?\b"),
}

# Defined-term detection: TitleCase phrases that recur identically across the doc.
# We DON'T rely on a fixed list — we discover them.
DEFINED_TERM_RX = re.compile(r"\b([A-Z][a-z]+(?:\s+[A-Z][a-z]+){0,3})\b")
COMMON_STARTERS = {"The", "This", "That", "These", "Those", "A", "An", "It", "I", "We"}


@dataclass(frozen=True)
class Anchor:
    kind: str
    value: str

    def key(self) -> str:
        return f"{self.kind}:{self.value.lower()}"


def find_anchors(text: str) -> list[Anchor]:
    """All anchors detected in this text."""
    if not text:
        return []
    out: list[Anchor] = []
    seen: set[str] = set()
    for kind, rx in ANCHOR_PATTERNS.items():
        for m in rx.finditer(text):
            v = m.group(0).strip()
            k = f"{kind}:{v.lower()}"
            if k in seen:
                continue
            seen.add(k)
            out.append(Anchor(kind=kind, value=v))
    return out


def discover_defined_terms(corpus: list[str], min_occurrences: int = 4) -> set[str]:
    """
    A defined term is a TitleCase phrase that appears >= min_occurrences times
    across the document. The original definition usually has it in quotes
    (e.g., '"Tenant"'); we don't require that — frequency is the signal.
    """
    counts: dict[str, int] = {}
    for txt in corpus:
        for m in DEFINED_TERM_RX.finditer(txt or ""):
            phrase = m.group(1)
            if phrase.split()[0] in COMMON_STARTERS:
                continue
            if len(phrase) < 4:
                continue
            counts[phrase] = counts.get(phrase, 0) + 1
    return {p for p, c in counts.items() if c >= min_occurrences}


def find_anchored_terms(text: str, defined_terms: set[str]) -> list[Anchor]:
    """Anchors specifically for the discovered defined terms in this corpus."""
    out: list[Anchor] = []
    if not text or not defined_terms:
        return out
    for term in defined_terms:
        if term in text:
            out.append(Anchor(kind="defined_term", value=term))
    return out


def anchor_signature(anchors: list[Anchor]) -> frozenset[str]:
    """Hashable signature for fast equality / Jaccard similarity."""
    return frozenset(a.key() for a in anchors)


def jaccard(a: frozenset[str], b: frozenset[str]) -> float:
    if not a and not b:
        return 1.0
    inter = len(a & b)
    union = len(a | b)
    return inter / union if union else 0.0
