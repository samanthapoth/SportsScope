import logging
from auth.authenticate import authenticate
from beanie import PydanticObjectId
from database.connection import Database
from fastapi import APIRouter, Depends, HTTPException, status
from models.game import Game, GameUpdate

logger = logging.getLogger(__name__)

game_router = APIRouter(tags=["Games"])

game_database = Database(Game)


@game_router.get("/", response_model=list[Game])
async def retrieve_all_games() -> list[Game]:
    games = await game_database.get_all()
    logger.info(f"viewing {len(games)} games")
    return games


@game_router.get("/{id}", response_model=Game)
async def retrieve_game(id: PydanticObjectId) -> Game:
    logger.info(f"viewing game #{id} details.")
    game = await game_database.get(id)
    if not game:
        logger.warning(f"\t The game #{id} NOT Found.")
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Game with supplied ID does not exist",
        )
    return game


@game_router.post("/new")
async def create_game(body: Game, user: str = Depends(authenticate)) -> dict:
    body.creator = user
    logger.info(f"User [{user}] is creating a game.")
    id = await game_database.save(body)
    logger.info(f"\t A new game #[{id}] created.")
    return {"message": "Game created successfully"}


@game_router.put("/{id}", response_model=Game)
async def update_game(
    id: PydanticObjectId, body: GameUpdate, user: str = Depends(authenticate)
) -> Game:
    logger.info(f"User [{user}] is updating game #{id}.")
    game = await game_database.get(id)
    if not game:
        logger.warning(f"\t The game #{id} NOT Found.")
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Game with supplied ID does not exist",
        )
    if game.creator != user:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST, detail="Operation not allowed"
        )
    updated_game = await game_database.update(id, body)
    if not updated_game:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Game with supplied ID does not exist",
        )
    logger.info(f"\t Game #[{id}] is updated.")
    return updated_game


@game_router.delete("/{id}")
async def delete_game(id: PydanticObjectId, user: str = Depends(authenticate)) -> dict:
    logger.info(f"User [{user}] is deleting game #{id}.")
    game = await game_database.get(id)
    if not game:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, detail="Game not found"
        )
    if not game:
        logger.warning(f"\t The game #{id} NOT Found.")
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Game with supplied ID does not exist",
        )
    if game.creator != user:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST, detail="Operation not allowed"
        )
    game = await game_database.delete(id)
    logger.info(f"\t Game #[{id}] is deleted.")
    return {"message": "Game deleted successfully."}