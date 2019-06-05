import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import Auth from '../../lib/Auth'

import Card from './Card'
import Footer from '../common/Footer'
import MapIndex from '../map/Index'

class EventIndex extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      events: null,
      MapView: false,
      ListView: true
    }

    this.MapView = this.MapView.bind(this)
    this.ListView = this.ListView.bind(this)
  }

  componentDidMount() {
    axios.get('/api/events').then(res => this.setState({events: res.data}))
    console.log(this.state.events, 'events')
  }

  ListView() {
    this.setState({MapView: false, ListView: true})
  }

  MapView() {
    this.setState({MapView: true, ListView: false})
  }

  render() {
    console.log(this.state, 'state')
    if (!this.state.events)
      return null
    return (<section>
      <div>
        <div className="hero is-green events">
          <div className="hero-body show">
            <div className="container">
              <h1 className="title">
                Events
              </h1>
            </div>
          </div>
        </div>
        <section className="section">
          <div className="container">
            {Auth.isAuthenticated() && <Link to="/events/new" className="button is-primary">Add Event</Link>}
            <br/>
            <div className="level-right">
              <button className="button is-green fas fa-map-marker-alt" onClick={this.MapView}>Map</button>
              <button className="button is-green fas fa-list" onClick={this.ListView}>Grid</button>
            </div>
            {
              this.state.ListView && <div className="columns is-multiline">
                {
                  this.state.events.map(event => <div key={event.id} className="column is-one-quarter-desktop is-one-third-tablet">
                    <Link to={{
                      pathname: `/events/${event.id}`
                    }}>
                      <Card {...event}/>
                    </Link>
                  </div>)
                }
              </div>
            }
            {this.state.MapView && <MapIndex events={this.state.events}/>}
          </div>
        </section>
      </div>
      <Footer/>
    </section>)
  }
}

export default EventIndex


// MApview = true - false
