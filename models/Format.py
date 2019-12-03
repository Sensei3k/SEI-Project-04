from app import db
from pony.orm import Required, Set
from  marshmallow import Schema, fields, post_load

class Format(db.Entity):
    name = Required(str)
    events = Set('Event') # M:M

class FormatSchema(Schema):
    id = fields.Int(dump_only=True)
    name = fields.Str(required=True)

    @post_load
    def load_formats(self, data, **kwargs):
        data['format'] = Format.get(id=data['format_id'])
        del data['format_id']
        return data
