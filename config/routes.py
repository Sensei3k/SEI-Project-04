import os
from flask import abort
from app import app
from controllers import events, auth

app.register_blueprint(events.router, url_prefix='/api')
app.register_blueprint(auth.router, url_prefix='/api')


@app.route('/')
@app.route('/<path:path>')
def catch_all(path='index.html'): # when there is no path then set path to be index.html
    if os.path.isfile('public/' + path):
        return app.send_static_file(path)

    return abort(404)