from flask import Flask
from flask_pymongo import PyMongo

def create_app():
    app = Flask(__name__, instance_relative_config=True)
    
    app.config.from_pyfile('config.py')  # Load configuration from instance/config.py
    
    # Initialize PyMongo
    app.mongo = PyMongo(app)
    
    # Import and register blueprints
    from .routes import auth_routes, file_routes
    app.register_blueprint(auth_routes.bp)
    app.register_blueprint(file_routes.bp, url_prefix='/files')
    
    return app
