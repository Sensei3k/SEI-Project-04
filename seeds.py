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
        image='https://i.imgur.com/w7qm5UP.png',
        email='ade@gmail.com',
        password_hash=schema.generate_hash('pineapples')
    )


    five_a_side = Format(name='5-a-side')
    seven_a_side = Format(name='7-a-side')


    Event(
        name='Planet Futsal',
        image='https://i.imgur.com/jWd3gQb.jpg',
        venue='38 IBM Haruna St, Utako, Abuja',
        user=sensei,
        format=five_a_side,
        latitude=9.062720,
        longitude=7.439199
    )

    Event(
        name='City Bridge Sportsplex',
        image='http://mydonate.bt.com/images/events/B263704_1521542545510.jpg',
        venue='Citybridge Sportsplex, Abuja Nigeria',
        user=sensei,
        format=seven_a_side,
        latitude=9.077825,
        longitude=7.476195
    )

    Event(
        name='Turf Arena',
        image='https://i.imgur.com/IU3Fdbh.jpg',
        venue='Citybridge Sportsplex, Abuja',
        user=sensei,
        format=five_a_side,
        latitude=9.065048,
        longitude=7.489682
    )

    Event(
        name='D\'kings Turf',
        image='http://mydonate.bt.com/images/events/B263704_1521542545510.jpg',
        venue='13576 Al-Fayyium Street, Wuse, Abuja',
        user=sensei,
        format=five_a_side,
        latitude=9.059791,
        longitude=7.473460
    )

    Event(
        name='Sports Center',
        image='https://i.imgur.com/87xxyZT.jpg',
        venue='Covenant University,Km 10, Idiroko Road,Ota, Ogun',
        user=sensei,
        format=five_a_side,
        latitude=6.672645,
        longitude=3.161213
    )

    Event(
        name='Landmark Village',
        image='https://i.imgur.com/jZmtumM.jpg',
        venue=' Landmark Village 4 Water Corporation Drive ,Victoria Island, Lagos',
        user=sensei,
        format=five_a_side,
        latitude=6.423403,
        longitude=3.444938
    )

    Event(
        name='Childrens International School',
        image='https://i.imgur.com/WAaZuAr.jpg',
        venue='Plot 8 Funke Zainab Usman Street, Lekki Phase 1, Lagos.',
        user=sensei,
        format=five_a_side,
        latitude=6.449490,
        longitude=3.484240
    )

    Event(
        name='Campos Memorial Mini Stadium',
        image='https://i.imgur.com/rwoWizC.jpg',
        venue='Campos Memorial Mini Stadium, 15, Igbosere road, Lagos Island',
        user=sensei,
        format=five_a_side,
        latitude=6.451277,
        longitude=3.394352
    )

    Event(
        name='Fun Turf',
        image='https://i.imgur.com/FRVrcjd.jpg',
        venue='Block 10, Plot 4, Admiralty way,Lekki Phase 1, Lagos.',
        user=sensei,
        format=five_a_side,
        latitude=6.438376,
        longitude=3.455856
    )

    Event(
        name='Chrisland School, Ikeja',
        image='https://i.imgur.com/w9u1frP.jpg',
        venue='26, Opebi Road, P.M.B. 21614,Ikeja, Lagos',
        user=sensei,
        format=five_a_side,
        latitude=6.593582,
        longitude=3.357608
    )

    Event(
        name='American International School of Lagos',
        image='https://i.imgur.com/np6w4Ua.jpg',
        venue='Federal Estates, Victoria Island,Lagos',
        user=sensei,
        format=seven_a_side,
        latitude=6.437816,
        longitude=3.434573
    )

    db.commit() # Writes the SQL and runs it against the db
