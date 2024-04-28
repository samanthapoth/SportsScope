import logging
from app.auth.authenticate import authenticate
from beanie import PydanticObjectId
from database.connection import Database
from fastapi import APIRouter, Depends, HTTPException, status, Response
from models.team import Team, TeamUpdate
from app.routes import player_routes
import csv
from io import StringIO

logger = logging.getLogger(__name__)

team_router = APIRouter(tags=["Teams"])

team_database = Database(Team)


@team_router.get("/", response_model=list[Team])
async def retrieve_all_teams() -> list[Team]:
    teams = await team_database.get_all()
    logger.info(f"viewing {len(teams)} team")
    return teams


@team_router.get("/{id}", response_model=Team)
async def retrieve_team(id: PydanticObjectId) -> Team:
    logger.info(f"viewing team #{id} details.")
    team = await team_database.get(id)
    if not team:
        logger.warning(f"\t The team #{id} NOT Found.")
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Team with supplied ID does not exist",
        )
    return team


@team_router.get("/{id}/csv", response_model=Team)
async def retrieve_team_csv(id: PydanticObjectId) -> Response:
    logger.info(f"Viewing team #{id} details.")
    team = await team_database.get(id)
    if not team:
        logger.warning(f"The team #{id} NOT Found.")
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Team with supplied ID does not exist",
        )
    
    # Convert team object to CSV format
    csv_data = team_to_csv(team)

    # Create CSV response
    response = Response(content=csv_data, media_type="text/csv")
    response.headers["Content-Disposition"] = f"attachment; filename=team_{id}.csv"
    return response

def team_to_csv(team: Team) -> str:
    output = StringIO()
    writer = csv.DictWriter(output, fieldnames=["name", "logo", "players", "location"])
    writer.writeheader()
    writer.writerow({
        "name": team.name,
        "logo": team.logo,
        "players": ", ".join([f"{player.name} ({player.age}, {player.position})" for player in team.players]),
        "location": team.location
    })
    return output.getvalue()


@team_router.post("/new")
async def create_team(body: Team) -> dict:
    
    #logger.info(f"User [{user}] is creating an team.")
    for i in body.players:
        i = await player_routes.create_player(i)
    id = await team_database.save(body)
    logger.info(f"\t A new team #[{id}] created.")
    return {"message": "Team created successfully"}

'''
@team_router.post("/new")
async def create_team(body: Team, user: str = Depends(authenticate)) -> dict:
    body.creator = user
    logger.info(f"User [{user}] is creating an team.")
    id = await team_database.save(body)
    logger.info(f"\t A new team #[{id}] created.")
    return {"message": "Team created successfully"}
'''

@team_router.put("/{id}", response_model=Team)
async def update_team(
    id: PydanticObjectId, body: TeamUpdate, user: str = Depends(authenticate)
) -> Team:
    logger.info(f"User [{user}] is updating team #{id}.")
    team = await team_database.get(id)
    if not team:
        logger.warning(f"\t The team #{id} NOT Found.")
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Team with supplied ID does not exist",
        )
    if team.creator != user:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST, detail="Operation not allowed"
        )
    updated_team = await team_database.update(id, body)
    if not updated_team:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Team with supplied ID does not exist",
        )
    logger.info(f"\t Team #[{id}] is updated.")
    return updated_team


@team_router.delete("/{id}")
async def delete_team(id: PydanticObjectId, user: str = Depends(authenticate)) -> dict:
    logger.info(f"User [{user}] is deleting team #{id}.")
    team = await team_database.get(id)
    if not team:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, detail="Team not found"
        )
    if not team:
        logger.warning(f"\t The team #{id} NOT Found.")
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Team with supplied ID does not exist",
        )
    if team.creator != user:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST, detail="Operation not allowed"
        )
    team = await team_database.delete(id)
    logger.info(f"\t Team #[{id}] is deleted.")
    return {"message": "Team deleted successfully."}