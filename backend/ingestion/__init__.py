"""Source upload, normalization, and native-format extraction."""

from .source_documents import (
    coverage_for_source,
    extract_blocks_from_source,
    normalize_to_pdf,
    save_upload_to_source,
    source_kind,
    supported_input_extensions,
)

__all__ = [
    "coverage_for_source",
    "extract_blocks_from_source",
    "normalize_to_pdf",
    "save_upload_to_source",
    "source_kind",
    "supported_input_extensions",
]
