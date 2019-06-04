from pony.orm import db_session
from app import db
from models.Event import Event
from models.Format import Format
from models.User import User, UserSchema


db.drop_all_tables(with_all_data=True)
db.create_tables()

with db_session():
    schema = UserSchema()
    sensei = User(
        username='sensei',
        image='https://www.zikoko.com/wp-content/uploads/cloudinary/v1494504648/C_NB7jQXgAAesJ2_ibvftl.jpg',
        email='ade@gmail.com',
        password_hash=schema.generate_hash('pineapples')
    )


    five_a_side = Format(name='5 a side')
    seven_a_side = Format(name='7 a side')


    Event(
        name='Planet Futsal',
        image='http://mydonate.bt.com/images/events/B263704_1521542545510.jpg',
        venue='38 IBM Haruna St, Utako, Abuja, Nigeria',
        user=sensei,
        format=five_a_side
    )

    Event(
        name='City Bridge Sportsplex',
        image='http://mydonate.bt.com/images/events/B263704_1521542545510.jpg',
        venue='Citybridge Sportsplex, Abuja Nigeria',
        user=sensei,
        format=seven_a_side
    )

    Event(
        name='Turf Arena',
        image='http://mydonate.bt.com/images/events/B263704_1521542545510.jpg',
        venue='Citybridge Sportsplex, Abuja Nigeria',
        user=sensei,
        format=five_a_side
    )

    db.commit() # Writes the SQL and runs it against the db
