import os

secret = os.getenv('SECRET', 'pineapples')
db_uri = os.getenv('DATABASE_URL', 'postgres://localhost:5432/thegame-db')
