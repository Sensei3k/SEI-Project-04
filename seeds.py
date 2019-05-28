from pony.orm import db_session
from app import db
from models.Event import Event


db.drop_all_tables(with_all_data=True)
db.create_tables()

with db_session():

    Event(
        name='footballone',
        image='http://mydonate.bt.com/images/events/B263704_1521542545510.jpg',
        description='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        user='admin',
        comments='skill set hard'
    )

    db.commit() # Writes the SQL and runs it against the db
