from pydantic import BaseModel


class DocumentSchema(BaseModel):
    type: str
    title: str
    position: str
    image: str

class DocumentDB(DocumentSchema):
    id: int