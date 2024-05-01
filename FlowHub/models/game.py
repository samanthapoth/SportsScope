from typing import Optional
from beanie import Document, Indexed
from pydantic import BaseModel, Field, ConfigDict
from models.team import Team

class Game(Document):
    creator: str = ""
    name: str = ""
    location: str = ""
    home_team: str =""
    away_team: str = ""
    date: str = ""
    time: str = ""
    played: bool = False
    home_team_score: Optional[int] = 0
    away_team_score: Optional[int] = 0
    model_config = ConfigDict(
            json_schema_extra={
                "example":{
                        "name":"weeqwed",
                        "location":"dsada",
                        "home_team":"Iowa Hawkeyes",
                        "away_team":"Iowa State Cyclones",
                        "date":"2024-04-27",
                        "time":"13:26",
                        "played":False,
                        "home_team_score":0,
                        "away_team_score":0
                    }
                
            }
        )
    class Settings:
        name = "game"

class GameUpdate(BaseModel):
    name: str = ""
    location: str = ""
    home_team: str = ""
    away_team: str = ""
    date: str = ""
    time: str = ""
    played: bool = False
    home_team_score: Optional[int] = 0
    away_team_score: Optional[int] = 0
    model_config = ConfigDict(
                json_schema_extra={
                "example":
                    {
                        "name":"weeqwed",
                        "location":"dsada",
                        "home_team":"Iowa Hawkeyes",
                        "away_team":"Iowa State Cyclones",
                        "date":"2024-04-27",
                        "time":"13:26",
                        "played":False,
                        "home_team_score":0,
                        "away_team_score":0
                    }
                
            }
            )
    class Settings:
        name = "game"
        
