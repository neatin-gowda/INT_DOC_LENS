"""FastAPI request and response schemas."""

from __future__ import annotations

from typing import Any, Optional

from pydantic import BaseModel, Field


class CompareResponse(BaseModel):
    run_id: str
    status: str
    status_message: str
    progress: int


class ExtractResponse(BaseModel):
    run_id: str
    status: str
    status_message: str
    progress: int


class QueryReq(BaseModel):
    question: str
    mode: str = "fast"
    response_language: str = "source"


class FeedbackReq(BaseModel):
    reviewer_name: str
    document_type: str
    user_score: float = Field(..., ge=0, le=100)
    missing_areas: str
    comments: str
    page_numbers: Optional[str] = None
    selected_focus: list[dict[str, Any]] = Field(default_factory=list)
    wants_ai_enhancement: bool = False


class EnhanceSummaryReq(BaseModel):
    feedback_id: Optional[str] = None
    feedback: Optional[FeedbackReq] = None
    threshold: float = Field(0.9, ge=0, le=1)
    response_language: str = "source"


class AiSummaryPdfReq(BaseModel):
    title: str = "AI Summary"
    answer: str = ""
    columns: list[str] = Field(default_factory=list)
    rows: list[dict[str, Any]] = Field(default_factory=list)
    confidence: Optional[float] = None


class CompareTablesReq(BaseModel):
    base_table_id: Optional[str] = None
    target_table_id: Optional[str] = None
    base_header_query: Optional[str] = None
    target_header_query: Optional[str] = None
    base_row_key: Optional[str] = None
    target_row_key: Optional[str] = None


class TableViewReq(BaseModel):
    side: str = Field("base", description="base or target")
    table_id: str
    columns: list[str] = Field(default_factory=list)
    row_filter: Optional[str] = None
    limit: int = 300


class CompareTableColumnsReq(BaseModel):
    base_table_id: str
    target_table_id: str

    # Columns used to identify/align rows. If empty, backend chooses likely label columns.
    base_row_columns: list[str] = Field(default_factory=list)
    target_row_columns: list[str] = Field(default_factory=list)

    # Columns whose values should be compared. If empty, all non-row-label columns are used.
    base_value_columns: list[str] = Field(default_factory=list)
    target_value_columns: list[str] = Field(default_factory=list)

    # Optional row filter. Supports exact/fuzzy matching against row label/cells.
    row_filter: Optional[str] = None

    # Maximum output rows.
    limit: int = 200

    # Optional focused AI review over only this selected table slice.
    use_ai: bool = False
    question: Optional[str] = None
