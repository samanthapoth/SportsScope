from typing import Optional
from beanie import Document, Indexed
from pydantic import BaseModel, Field,  ConfigDict

class Team(Document):
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
                    "Henry Leaders",
                    "Taylor Micetich",
                    "Samantha Pothitakis",
                ],
                "location": "Iowa City",
            }
        }
    )

class TeamUpdate(BaseModel):
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
                    "Henry Leaders",
                    "Taylor Micetich",
                    "Samantha Pothitakis",
                ],
                "location": "Iowa City",
            }
        }
    )