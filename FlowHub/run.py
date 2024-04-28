from contextlib import asynccontextmanager
from functools import lru_cache
import logging
import uvicorn
from fastapi import FastAPI
from fastapi.responses import RedirectResponse
from fastapi.middleware.cors import CORSMiddleware

from database.connection import Settings
from app.routes.team_routes import team_router
from app.routes.game_routes import game_router
from app.routes.users import user_router
from app.routes.player_routes import player_router
from logging_setup import setup_logging

setup_logging()
logger = logging.getLogger(__name__)



@asynccontextmanager
async def lifespan(app: FastAPI):
    # on startup event
    logger.info("Application starts up...")
    await get_settings().initialize_database()
    yield
    # on shutdown event NEED TO CHANGE THIS SO IT WONT RAISE KEYBOARD INTERRUPT ERR
    ...


app = FastAPI(title="Sports Scope", version="1.0.0", lifespan=lifespan)


@lru_cache
def get_settings():
    return Settings()


# register origins

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register routes

app.include_router(user_router, prefix="/users")
app.include_router(game_router, prefix="/games")
app.include_router(team_router, prefix="/teams")
app.include_router(player_router, prefix="/players")

@app.get("/")
async def home():
    return RedirectResponse(url="/games/")


if __name__ == "__main__":
    uvicorn.run("run:app", reload=True)