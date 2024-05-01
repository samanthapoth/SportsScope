from typing import Optional
from beanie import Document, Indexed
from pydantic import BaseModel, Field,  ConfigDict
from models.player import Player

class Team(Document):
    creator: str = ""
    name: str = ""
    logo: str = ""
    players: list[Player] = []
    location: str = ""

    model_config = ConfigDict(
        json_schema_extra={
            "example": {
                "name": "Project 1 Presentation",
                "logo": "https://placehold.co/600x400?text=Project+1+Presentation",
                "players": [
                    {
                    "name": "Henry Leaders",
                    "age": 22,
                    "position": "SF"
                    },
                    {
                    "name": "Samantha",
                    "age": 22,
                    "position": "C"
                    },
                    {
                    "name": "Alan",
                    "age": 22,
                    "position": "SG"
                    },
                    {
                    "name": "Taylor",
                    "age": 22,
                    "position": "PF"
                    },
                ],
                "location": "Iowa City"
            }
        }
    )

class TeamUpdate(BaseModel):
    name: str = ""
    logo: str = ""
    players: list[Player] = []
    location: str = ""

    model_config = ConfigDict(
        json_schema_extra={
            "example": {
                "name": "Project 1 Presentation",
                "logo": "https://placehold.co/600x400?text=Project+1+Presentation",
                "players": [
                    {
                    "name": "Henry Leaders",
                    "age": 22,
                    "position": "SF"
                    },
                    {
                    "name": "Samantha",
                    "age": 22,
                    "position": "C"
                    },
                    {
                    "name": "Alan",
                    "age": 22,
                    "position": "SG"
                    },
                    {
                    "name": "Taylor",
                    "age": 22,
                    "position": "PF"
                    },
                ],
                "location": "Iowa City"
            }
        }
    )