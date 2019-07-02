# SEI-Project-04: Bàtà Wúrà

### Timeframe
7days - Solo project

## Technologies used

- HTML5
- SCSS
- JavaScript (ES6)
- Python
- React.js
- PostgreSQL
- Flask
- Ajax
- Git/GitHub
- Webpack
- Bulma (CSS Framework)
- Bcrypt & Session Auth

## Installation
1. Clone or Download the repo
2. From the terminal run the following;
- `yarn` to install JavaScript packages
- `pipenv` to install Python packages
3. Next run `yarn seeds` to create the initial data for the database
4. This will be followed by `yarn run:react`
5. then `yarn run:flask`
6. Open on your browser at `http://localhost:4000`

## Project Brief


This being the final project for the Software Engineering Immersive course,
the brief was to fulfil the following requirements;
- Build a Full-Stack application
- Use a Python Flask API
- Consume your API with a separate Front-End built with React.js
- The app should include RESTful API to enable a user to register, login and add content
- User authentication

## Bàtà Wúrà: Overview

![Bata Wura](https://imgur.com/tJ8DKbT.gif)

You can find a hosted version ---> [here.] (https://golden-boot.herokuapp.com)


Bàtà Wúrà is a football app to help football lovers across Nigeria to play against each other in teams or as individuals in either 5-a-side or 7-a-side friendly tournaments or just for recreation.

The name is derived from my native language Yoruba, which translates to 'Golden Boot'.

I came up with the idea as a football lover and a working who occasionally would love to play football after work, but struggled in convincing colleagues and friends to come out and play. This app seeks to solve this problem as you can just sign up and register to your preferred venue at set times and meet others who also want to play, which in turn helps networking as you get to meet new people.

## Development Process

The very first thing I did as I began this project was to understand the relationships in my python Back-End as my aim was to fully build this before designing the Front-End will also model my schema.

``````python
# the model describes the event database table
class Event(db.Entity):
    name = Required(str)
    image = Required(str)
    venue = Required(str)
    user = Required('User')
    format = Required('Format')
    latitude = Required(float)
    longitude = Required(float)
    attended_by = Set('User', reverse='attending_events') # Relationship Many:Many

class EventSchema(Schema):
    id = fields.Int(dump_only=True)
    name = fields.Str(required=True)
    image = fields.Str(required=True)
    venue = fields.Str(required=True)
    format = fields.Nested('FormatSchema', dump_only=True)
    format_id = fields.Int(load_only=True)
    latitude = fields.Float()
    longitude = fields.Float()
    user = fields.Nested('UserSchema', exclude=('email', 'events'))
``````
Visual data representation in the REST client;

![image](https://user-images.githubusercontent.com/47805376/60474667-4421a480-9c6b-11e9-8fc7-9cd729d8e5ea.png)





I then proceeded to creating controllers for the events schema using RESTful routes;

- The `GET` API endpoint retrieves all event items from the database
``````python
@router.route('/events', methods=['GET'])
@db_session()
def index():
    schema = EventSchema(many=True)
    events = Event.select()
    return schema.dumps(events)
``````
- `POST` enables only authenticated users to then create new events and locations to the app where other can participate.

``````python
@router.route('/events', methods=['POST'])
@db_session
@secure_route
def create():
    schema = EventSchema()

    try:
        data = schema.load(request.get_json())
        data['user'] = g.current_user
        event = Event(**data)
        db.commit()
    except ValidationError as err:
        return jsonify({'message': 'Validation failed', 'errors': err.messages}), 422

    return schema.dumps(event), 201
``````

Once the user has created a profile and is logged in, the `events` page which lists all created events in a grid.

![grid_index](https://imgur.com/jTYLUsb.gif)

The user also have the option to switch the display to a map view.

![map_index](https://imgur.com/Dgnd0VF.gif)

It is at this stage the user selects the event they will want to get more information on or participate in by clicking on it, either in grid view or by clicking on a card in map view.

![image](https://user-images.githubusercontent.com/47805376/60478659-34aa5780-9c7b-11e9-9b11-b095c790efba.png)

The user can then see a description of the event and who created it, also you can decide to join and the delete button will only appear if you are the user that created the event through authentication.

## Wins
- This was my first project having to build a Back-End with Python and Flask, designing the Entity Relationships between models in my schema was a good challenge for me, It helped to better understand one to many and many to many relationships.

- I had never integrated a map into a project and actually didn't come up with the idea till a later stage in the project, I wasn't feeling too comfortable but was able to get it to work just how I wanted.

``````js
<Map
  style='mapbox://styles/mapbox/streets-v8'
  center={[8.6753, 9.0820]}
  zoom={[5.53]}
  containerStyle={{
    height: '80vh',
    width: '80vw'
  }}
>
  {this.props.events.map(event =>
    <Marker className="marker"
      key={event.id}
      coordinates={[event.longitude, event.latitude]}
      anchor="bottom"
      onClick={() => this.handleMarkerClick(event)}
    >
      <img src={'../assets/pin.png'}/>
    </Marker>
  )}
</Map>
``````

## Challenges
- When building the Back-End, I didn't fully grasp SQL database relationships and how this affected my desired goal, but was eventually able to fix this.

- The time was another challenge for me as learning new things in Python and Flask while against the clock was yet another challenge.

## Future Features
In the future I would love to add some fo the following features;
- A table showing participants and another to show event league tables
- A messaging system where by users  registered for an event can communicate via the platform
- More sports such as Basketball and Tennis to name a few
