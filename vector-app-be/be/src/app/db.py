import os

from sqlalchemy import (Column, DateTime, Integer, MetaData, String, Table,
                        create_engine)
from sqlalchemy.sql import func

from databases import Database

DATABASE_URL = os.getenv("DATABASE_URL")

engine = create_engine(DATABASE_URL)
metadata = MetaData()
documents = Table(
    "documents",
    metadata,
    Column("id", Integer, primary_key=True),
    Column("type", String(100)),
    Column("title", String(100)),
    Column("position", String(100)),
    Column("image", String(100))
)

database = Database(DATABASE_URL)