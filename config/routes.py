from app import app
from controllers import events, auth

app.register_blueprint(events.router)
app.register_blueprint(auth.router)
