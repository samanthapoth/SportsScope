from beanie import Document
from pydantic import BaseModel, ConfigDict, Field


class Event(Document):
    creator: str = ""
    name: str = ""
    logo: str = ""
    players: list[str] = []
    location: str = ""

    model_config = ConfigDict(
        json_schema_extra={
            "example": {
                "name": "Project 1 Presentation",
                "logo": "https://placehold.co/600x400?text=Project+1+Presentation",
                "players": [
                    "python",
                    "fastapi",
                    "project",
                    "presentation",
                    "midterm exam",
                ],
                "location": "168 VAN",
            }
        }
    )

    class Settings:
        name = "events"


class EventUpdate(BaseModel):
    name: str = ""
    logo: str = ""
    players: list[str] = []
    location: str = ""

    model_config = ConfigDict(
        json_schema_extra={
            "example": {
                "name": "Project 1 Presentation",
                "image": "https://placehold.co/600x400?text=Project+1+Presentation",
                "players": [
                    "python",
                    "fastapi",
                    "project",
                    "presentation",
                    "midterm exam",
                ],
                "location": "168 VAN",
            }
        }
    )
