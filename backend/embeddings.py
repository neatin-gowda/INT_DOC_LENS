"""
Azure OpenAI embedding helper for Spec-Diff.

This module is intentionally optional:
- If embedding env vars are missing, callers get no vectors and the app still works.
- If Azure OpenAI fails, callers can fall back to deterministic search.

Required env vars for embeddings:
  AZURE_OPENAI_ENDPOINT
  AZURE_OPENAI_API_KEY
  AZURE_OPENAI_EMBEDDING_DEPLOYMENT

Optional:
  AZURE_OPENAI_API_VERSION            default: 2024-08-01-preview
  AZURE_OPENAI_EMBEDDING_DIMENSIONS   only set if your Azure deployment supports it
"""
from __future__ import annotations

import os
import re
from functools import lru_cache
from typing import Iterable, Optional


def _clean(value: object) -> str:
    return re.sub(r"\s+", " ", str(value or "")).strip()


def embedding_enabled() -> bool:
    return bool(
        os.getenv("AZURE_OPENAI_ENDPOINT")
        and os.getenv("AZURE_OPENAI_API_KEY")
        and os.getenv("AZURE_OPENAI_EMBEDDING_DEPLOYMENT")
    )


@lru_cache(maxsize=1)
def _client():
    from openai import AzureOpenAI

    return AzureOpenAI(
        api_key=os.getenv("AZURE_OPENAI_API_KEY"),
        azure_endpoint=os.getenv("AZURE_OPENAI_ENDPOINT"),
        api_version=os.getenv("AZURE_OPENAI_API_VERSION", "2024-08-01-preview"),
    )


def _chunks(items: list[str], size: int) -> Iterable[list[str]]:
    for idx in range(0, len(items), size):
        yield items[idx : idx + size]


def embed_texts(texts: list[str], *, batch_size: int = 32) -> list[Optional[list[float]]]:
    """
    Embed a list of texts.

    Returns a list with the same length as input. Blank text or disabled config
    returns None at that position, so callers can store NULL embeddings safely.
    """
    if not texts:
        return []

    cleaned = [_clean(t)[:7500] for t in texts]
    results: list[Optional[list[float]]] = [None] * len(cleaned)

    if not embedding_enabled():
        return results

    indexed = [(idx, text) for idx, text in enumerate(cleaned) if len(text) >= 8]
    if not indexed:
        return results

    model = os.getenv("AZURE_OPENAI_EMBEDDING_DEPLOYMENT")
    dimensions = os.getenv("AZURE_OPENAI_EMBEDDING_DIMENSIONS")
    client = _client()

    for batch_pairs in _chunks(indexed, max(1, min(batch_size, 64))):
        batch_texts = [text for _, text in batch_pairs]
        kwargs = {"model": model, "input": batch_texts}
        if dimensions:
            try:
                kwargs["dimensions"] = int(dimensions)
            except ValueError:
                pass

        response = client.embeddings.create(**kwargs)
        for (idx, _), embedding_data in zip(batch_pairs, response.data):
            results[idx] = list(embedding_data.embedding)

    return results


def embed_query(text: str) -> Optional[list[float]]:
    vectors = embed_texts([text], batch_size=1)
    return vectors[0] if vectors else None


def vector_literal(vector: Optional[list[float]]) -> Optional[str]:
    """
    Convert a Python vector into a pgvector literal.

    psycopg can pass this string into a `%s::vector` parameter without needing
    the pgvector Python adapter package.
    """
    if not vector:
        return None
    return "[" + ",".join(f"{float(v):.8f}" for v in vector) + "]"
