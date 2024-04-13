from typing import Optional
from beanie import Document, Indexed
from pydantic import BaseModel, Field
from team import Team

class Game(Document):
    home_team: Team
    away_team: Team
    date: str
    home_team_score: int = Field(default=0)
    away_team_score: int = Field(default=0)

    class Settings:
        name = "game"

class GameUpdate(BaseModel):
    home_team: Team
    away_team: Team
    date: str
    home_team_score: int = Field(default=0)
    away_team_score: int = Field(default=0)

    class Settings:
        name = "game"
