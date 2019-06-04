import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
// import Auth from '../../lib/Auth'


import Card from './Card'
import Footer from '../common/Footer'
import MapIndex from '../map/Index'

class EventIndex extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      events: null
    }
  }

  componentDidMount() {
    axios.get('/api/events').then(res => this.setState({events: res.data}))
    console.log(this.state.events, 'events')
  }

  render() {
    console.log(this.state, 'state')
    if (!this.state.events)
      return null
    return (<section>
      <div>
        <div className="hero is-green events">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                Events
              </h1>
            </div>
          </div>
        </div>
        <section className="section">
          <div className="container">
            <div className="columns">
              {
                this.state.events.map(event => <div key={event.id} className="column is-multiline is-one-quarter-desktop is-one-third-tablet">
                  <Link to={{
                    pathname: `/events/${event.id}`
                  }}>
                    <Card {...event}/>
                  </Link>
                </div>)
              }
            </div>
            <MapIndex events={this.state.events} />
          </div>
        </section>
      </div>
      <Footer />
    </section>)
  }
}

export default EventIndex
