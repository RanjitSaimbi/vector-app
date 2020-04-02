from app.api import crud
from app.api.models import DocumentDB, DocumentSchema
from fastapi import APIRouter, HTTPException
from typing import List

router = APIRouter()


@router.post("/", response_model=DocumentDB, status_code=201)
async def create_document(payload: DocumentSchema):
    document_id = await crud.post(payload)

    response_object = {
        "id": document_id,
        "type": payload.type,
        "title": payload.title,
        "position": payload.position,
        "image": payload.image,
    }
    return response_object

@router.get("/", response_model=List[DocumentDB])
async def read_all_documents():
    return await crud.get_all()