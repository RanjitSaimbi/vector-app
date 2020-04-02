from app.api import crud
from app.api.models import DocumentDB, DocumentSchema
from fastapi import APIRouter, HTTPException

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