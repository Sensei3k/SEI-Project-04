from app import db
from pony.orm import Required, Set
from  marshmallow import Schema, fields

class Format(db.Entity):
    name = Required(str)
    events = Set('Event') # M:M

class FormatSchema(Schema):
    id = fields.Int(dump_only=True)
    name = fields.Str(required=True)
