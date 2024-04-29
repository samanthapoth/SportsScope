from typing import Optional
from beanie import Document, Indexed
from pydantic import BaseModel, Field
from models.team import Team

class Game(Document):
    name: str
    location: str
    home_team: str
    away_team: str
    date: str
    time: str
    played: bool = Field(default=False)
    home_team_score: Optional[int] = Field(default=0)
    away_team_score: Optional[int] = Field(default=0)

    class Settings:
        name = "game"

class GameUpdate(BaseModel):
    name: str
    location: str
    home_team: str
    away_team: str
    date: str
    time: str
    played: bool = Field(default=False)
    home_team_score: Optional[int] = Field(default=0)
    away_team_score: Optional[int] = Field(default=0)

    class Settings:
        name = "game"
