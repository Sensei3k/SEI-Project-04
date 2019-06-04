from app import db
from pony.orm import Required, Set
from marshmallow import Schema, fields, post_load

from .Format import Format


# the model describes the sport database table
class Event(db.Entity):
    name = Required(str)
    image = Required(str)
    venue = Required(str)
    user = Required('User')
    format = Required('Format')
    attended_by = Set('User', reverse='attending_events') # M:M

class EventSchema(Schema):
    id = fields.Int(dump_only=True)
    name = fields.Str(required=True)
    image = fields.Str(required=True)
    venue = fields.Str(required=True)
    format = fields.Nested('FormatSchema', dump_only=True)
    format_id = fields.Int(load_only=True)
    user = fields.Nested('UserSchema', exclude=('email', 'events'))


    @post_load
    def load_formats(self, data):
        data['format'] = Format.get(id=data['format_id'])
        del data['format_id']

        return data
