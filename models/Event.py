from app import db
from pony.orm import Required, Optional
from marshmallow import Schema, fields


# the model describes the sport database table
class Event(db.Entity):
    name = Required(str)
    image = Required(str)
    description = Required(str)
    user = Optional(str)
    comments = Optional(str)

class EventSchema(Schema):
    id = fields.Int(dump_only=True)
    name = fields.Str(required=True)
    image = fields.Str(required=True)
    description = fields.Str(required=True)
    user = fields.Str()
    comments = fields.Str()
