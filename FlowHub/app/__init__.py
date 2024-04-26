from flask import Flask
from flask_pymongo import PyMongo

def create_app():
    app = Flask(__name__, instance_relative_config=True)
    
    app.config.from_pyfile('config.py')  # Load configuration from instance/config.py
    
    # Initialize PyMongo
    app.mongo = PyMongo(app)
    
    # Import and register blueprints
    from .routes import auth_routes, game_routes, team_routes, users
    app.register_blueprint(auth_routes.bp)
    app.include_router(game_routes.game_router, url_prefix='/games')
    app.register_blueprint(team_routes.team_router, url_prefix='/teams')
    app.register_blueprint(users.user_router, url_prefix='/users')
    
    
    return app
