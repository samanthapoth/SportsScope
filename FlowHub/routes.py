from flask import current_app, request, send_file
from .utils.database import get_db
import gridfs

def init_app(app):
    @app.route('/upload', methods=['POST'])
    def upload_file():
        db = get_db()
        fs = gridfs.GridFS(db)
        file = request.files['file']
        file_id = fs.put(file, filename=file.filename)
        return {'file_id': str(file_id)}, 200

    @app.route('/download/<file_id>', methods=['GET'])
    def download_file(file_id):
        db = get_db()
        fs = gridfs.GridFS(db)
        file_to_send = fs.get(file_id)
        return send_file(file_to_send, attachment_filename=file_to_send.filename)
