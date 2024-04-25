from typing import Optional
from beanie import Document, Indexed
from pydantic import BaseModel, Field
from team import Team

class Game(Document):
    location: str
    home_team: Team
    away_team: Team
    date: str
    time: str
    played: bool = Field(default=False)
    home_team_score: Optional[int] = Field(default=0)
    away_team_score: Optional[int] = Field(default=0)

    class Settings:
        name = "game"

class GameUpdate(BaseModel):
    location: str
    home_team: Team
    away_team: Team
    date: str
    time: str
    played: bool = Field(default=False)
    home_team_score: Optional[int] = Field(default=0)
    away_team_score: Optional[int] = Field(default=0)

    class Settings:
        name = "game"
