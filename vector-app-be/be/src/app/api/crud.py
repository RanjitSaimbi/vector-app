from app.api.models import DocumentSchema
from app.db import database, documents



async def post(payload: DocumentSchema):
    query = documents.insert().values(type=payload.type, title=payload.title, position=payload.position, image=payload.image)
    return await database.execute(query=query)