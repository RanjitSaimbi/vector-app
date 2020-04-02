from app.api import documents
from fastapi import FastAPI
from app.db import engine, metadata, database

metadata.create_all(engine)

app = FastAPI()

@app.on_event("startup")
async def startup():
    await database.connect()


@app.on_event("shutdown")
async def shutdown():
    await database.disconnect()

@app.get("/")
def pong():
    return {"ping": "pong!"}

app.include_router(documents.router, prefix="/documents", tags=["documents"])