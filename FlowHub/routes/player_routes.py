import logging
from auth.authenticate import authenticate
from beanie import PydanticObjectId
from database.connection import Database
from fastapi import APIRouter, Depends, HTTPException, status
from models.player import Player, PlayerUpdate

logger = logging.getLogger(__name__)

player_router = APIRouter(tags=["Player"])

player_database = Database(Player)


@player_router.get("/", response_model=list[Player])
async def retrieve_all_player() -> list[Player]:
    players = await player_database.get_all()
    logger.info(f"viewing {len(players)} player")
    return players


@player_router.get("/{id}", response_model=Player)
async def retrieve_player(id: PydanticObjectId) -> Player:
    logger.info(f"viewing player #{id} details.")
    player = await player_database.get(id)
    if not player:
        logger.warning(f"\t The player #{id} NOT Found.")
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="player with supplied ID does not exist",
        )
    return player


@player_router.post("/new")
async def create_player(body: Player) -> dict:
    
    #logger.info(f"User [{user}] is creating a player.")
    
    id = await player_database.save(body)
    logger.info(f"\t A new player #[{id}] created.")
    return {"message": "Player created successfully"}

'''
@player_router.post("/new")
async def create_player(body: Player, user: str = Depends(authenticate)) -> dict:
    body.creator = user
    logger.info(f"User [{user}] is creating an player.")
    id = await player_database.save(body)
    logger.info(f"\t A new player #[{id}] created.")
    return {"message": "Player created successfully"}
'''

@player_router.put("/{id}", response_model=Player)
async def update_player(
    id: PydanticObjectId, body: PlayerUpdate, user: str = Depends(authenticate)
) -> Player:
    logger.info(f"User [{user}] is updating player #{id}.")
    player = await player_database.get(id)
    if not player:
        logger.warning(f"\t The player #{id} NOT Found.")
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Player with supplied ID does not exist",
        )
    if player.creator != user:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST, detail="Operation not allowed"
        )
    updated_player = await player_database.update(id, body)
    if not updated_player:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Player with supplied ID does not exist",
        )
    logger.info(f"\t Player #[{id}] is updated.")
    return updated_player


@player_router.delete("/{id}")
async def delete_player(id: PydanticObjectId, user: str = Depends(authenticate)) -> dict:
    logger.info(f"User [{user}] is deleting player #{id}.")
    player = await player_database.get(id)
    if not player:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, detail="Player not found"
        )
    if not player:
        logger.warning(f"\t The player #{id} NOT Found.")
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Player with supplied ID does not exist",
        )
    if player.creator != user:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST, detail="Operation not allowed"
        )
    player = await player_database.delete(id)
    logger.info(f"\t Player #[{id}] is deleted.")
    return {"message": "Player deleted successfully."}