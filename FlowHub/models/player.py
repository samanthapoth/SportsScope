from typing import Optional
from beanie import Document, Indexed
from pydantic import BaseModel, Field, ConfigDict

class Player(Document):
    name: str
    age: int
    position: str
    model_config = ConfigDict(
            json_schema_extra={
                "example": {
                    "name": "Henry Leaders",
                    "age": 22,
                    "position": "SF"
                }
            }
        )
    class Settings:
        name = "player"