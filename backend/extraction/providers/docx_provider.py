"""Local Word provider marker.

The actual DOCX extraction remains in ingestion/source_documents.py for compatibility.
"""

PROVIDER = {
    "name": "docx_provider",
    "external_service": False,
    "status": "implemented_by_ingestion_source_documents",
}
