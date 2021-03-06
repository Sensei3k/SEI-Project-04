import React from 'react'
import { Link } from 'react-router-dom'
import ReactMapboxGl, { Marker, Popup } from 'react-mapbox-gl'

const Map = ReactMapboxGl({
  accessToken: process.env.MAPBOX_TOKEN
})

class MapIndex extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      pin: {},
      pinClick: false
    }


    this.scrollLocationOnMarkerClick = this.scrollLocationOnMarkerClick.bind(this)
  }



  handleMarkerClick(event) {
    if(event === this.state.selectedEvent)  this.setState({ selectedEvent: null })
    else this.setState({ selectedEvent: event })
  }

  scrollLocationOnMarkerClick() {
    document.getElementById(this.state.selectedEvent.id)
      .scrollIntoView({ behaviour: 'smooth', block: 'start' })
  }

  render() {
    console.log(this.props, 'THIS.PROPS')
    return (
      <div>
        <Map
          style='mapbox://styles/mapbox/streets-v10'
          center={[8.6753, 9.0820]}
          // center={[7.3986, 9.0765]}
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
              scrollLocationOnMarkerClick={this.scrollLocationOnMarkerClick}
            >
              <img src={'../assets/pin.png'}/>
            </Marker>
          )}

          {this.state.selectedEvent &&
         <Link to ={`/events/${this.state.selectedEvent.id}`} key={this.state.selectedEvent.id}>
           <Popup className="popup"
             coordinates={[this.state.selectedEvent.longitude, this.state.selectedEvent.latitude]}
             offset={{
               'bottom-left': [12, -38],  'bottom': [0, -38], 'bottom-right': [-12, -38]
             }}>

             <div>
               <h3>{this.state.selectedEvent.name}</h3>
               <img className="popupimage"src={this.state.selectedEvent.image} alt={this.state.selectedEvent.name}/>
             </div>
           </Popup>
         </Link>
          }
        </Map>
      </div>
    )
  }
}


export default MapIndex
