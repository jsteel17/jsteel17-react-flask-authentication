from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_cors import CORS
from api.routes import api
from api.models import db

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://username:password@localhost:5432/your_database_name'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.secret_key = "supersecretkey"

db.init_app(app)
migrate = Migrate(app, db)
CORS(app)

app.register_blueprint(api, url_prefix='/api')

if __name__ == "__main__":
    app.run(debug=True)