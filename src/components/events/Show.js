import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import Auth from '../../lib/Auth'

import Footer from '../common/Footer'

class Show extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      events: null
    }

  }

  componentDidMount() {
    axios.get(`/api/events/${this.props.match.params.id}`).then(res => this.setState({events: res.data}))
  }

  handleDelete() {
    const token = Auth.getToken()
    axios.delete(`/api/events/${this.props.match.params.id}`, {
      headers: { 'Authorization': `Bearer ${token}` }
    })
      .then(() => this.props.history.push('/events'))
  }

  canModify() {
    // if the user is logged in AND the user's id matches the characters' user's id return true
    return Auth.isAuthenticated() && Auth.getPayload().sub === this.state.events.user.id
  }

  render() {
    console.log(this.state, 'state')
    if (!this.state.events)
      return null
    const {name, image, user, id} = this.state.events

    return (<section>
      <div>
        <div className="hero is-green events">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                {name}
              </h1>
            </div>
          </div>
        </div>
      </div>
      <section className="section show">
        <div className="container">
          <div className="container">
            <div className="level">
              <div className="level-left">
                <h1 className="title is-1">{name}</h1>
              </div>
              {
                this.canModify() && <div className="level-right">
                  <Link to={`/events/${id}/edit`} className="button is-primary">Edit</Link>
                  <button className="button is-danger" onClick={this.handleDelete}>Delete</button>
                </div>
              }
            </div>
            <div className="columns is-multiline">
              <div className="column is-half-desktop is-full-tablet">
                <figure className="image">
                  <img src={image} alt={name}/>
                </figure>
              </div>
              <div className="column is-half-desktop is-full-tablet">
                <div className="column is-half-desktop is-full-tablet">
                  <h2 className="title is-6">Park Name: {name}</h2>
                  <hr/>
                </div>
                <div className="column is-half-desktop is-full-tablet">
                  <h2 className="title is-6">Venue: Riverplate Park, Sani Abacha Way, Abuja, Nigeria</h2>
                  <hr/>
                </div>

                <div className="column is-one-half">
                  <h2 className="title is-6">Created By: {user.username}</h2>
                  <hr/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </section>)
  }
}

export default Show


// {/* <img src={user.image}/> */
// } {/* <CabinMap data={state} /> */
// }

// {this.canModify() &&
//   <div className="level-right">
//     <{'/cabins/$/edit'} className="button is-primary">Edit</Link>
//     <button className="button is-danger" onClick={this.handleDelete}>Delete</button>
//   </div>
// }
//
// {!this.canModify() && <div>
//   <button onClick={this.startConversation}>Check Availability</button>
// </div>}
