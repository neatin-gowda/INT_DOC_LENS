"""
Database connection helpers for Azure PostgreSQL.

Expected environment variable:
    DATABASE_URL

Example:
    postgresql://pgadmin:<password>@pg-specdiff-prod.postgres.database.azure.com:5432/postgres?sslmode=require

Alternative individual variables:
    PGHOST
    PGPORT
    PGDATABASE
    PGUSER
    PGPASSWORD
"""
from __future__ import annotations

import os
from contextlib import contextmanager
from pathlib import Path
from typing import Iterator, Optional

import psycopg
from psycopg.rows import dict_row


def database_url() -> Optional[str]:
    url = os.getenv("DATABASE_URL")
    if url:
        return url

    host = os.getenv("PGHOST")
    database = os.getenv("PGDATABASE")
    user = os.getenv("PGUSER")
    password = os.getenv("PGPASSWORD")
    port = os.getenv("PGPORT", "5432")

    if not (host and database and user and password):
        return None

    return (
        f"postgresql://{user}:{password}@{host}:{port}/{database}"
        "?sslmode=require"
    )


from psycopg_pool import ConnectionPool

_POOL: Optional[ConnectionPool] = None


def get_pool() -> ConnectionPool:
    global _POOL
    if _POOL is None:
        url = database_url()
        if not url:
            raise RuntimeError(
                "Database is not configured. Set DATABASE_URL or PGHOST/PGDATABASE/PGUSER/PGPASSWORD."
            )
        _POOL = ConnectionPool(
            conninfo=url,
            min_size=int(os.getenv("PGPOOL_MIN_SIZE", "2")),
            max_size=int(os.getenv("PGPOOL_MAX_SIZE", "20")),
            kwargs={"row_factory": dict_row},
            open=True,
        )
    return _POOL


def close_pool() -> None:
    global _POOL
    if _POOL is not None:
        _POOL.close()
        _POOL = None


def db_enabled() -> bool:
    return bool(database_url())


@contextmanager
def get_conn() -> Iterator[psycopg.Connection]:
    if not db_enabled():
        raise RuntimeError(
            "Database is not configured. Set DATABASE_URL or PGHOST/PGDATABASE/PGUSER/PGPASSWORD."
        )

    pool = get_pool()
    with pool.connection() as conn:
        yield conn


def ping_db() -> dict:
    if not db_enabled():
        return {
            "enabled": False,
            "status": "not_configured",
        }

    try:
        with get_conn() as conn:
            row = conn.execute("SELECT version() AS version").fetchone()
            return {
                "enabled": True,
                "status": "ok",
                "version": row["version"] if row else None,
            }
    except Exception as exc:
        return {
            "enabled": True,
            "status": "error",
            "error": str(exc),
        }


def init_schema_if_requested() -> None:
    if os.getenv("DOCULENS_AUTO_INIT_DB", "").strip().lower() not in {"1", "true", "yes"}:
        return
    if not db_enabled():
        return

    schema_path = Path(__file__).resolve().parent.parent / "sql" / "schema.sql"
    sql = schema_path.read_text(encoding="utf-8")
    with get_conn() as conn:
        conn.execute(sql)
