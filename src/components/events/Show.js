import React from 'react'
import axios from 'axios'
// import Auth from '../../lib/Auth'


class Show extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      events: null
    }

  }

  componentDidMount() {
    axios.get(`/api/events/${this.props.match.params.id}`)
      .then(res => this.setState({ events: res.data}))
  }

  render() {
    console.log(this.state, 'state')
    if(!this.state.events) return null
    const { name, image, comments } = this.state.events

    return (
      <section>
        <div>
          <div className="hero is-warning events">
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
            <div className="columns is-multiline">
              <div className="column is-half-desktop is-full-tablet">
                <figure className="image">
                  <img src={image} alt={name} />
                </figure>
              </div>
              <div className="column is-half-desktop is-full-tablet">
                <div className="column is-half-desktop is-full-tablet">
                  <h2 className="title is-6">Schedule: {name}</h2>
                  <hr />
                </div>
                <div className="column is-half-desktop is-full-tablet">
                  <h2 className="title is-6">Venue: Riverplate Park, Sani Abacha Way, Abuja, Nigeria</h2>
                  <hr />
                </div>
                <div className="column is-one-half">
                  <h2 className="title is-6">Description: {comments}</h2>
                  <hr />
                </div>

                <div className="column is-one-half">
                  <h2 className="title is-6">Created & Hosted By:</h2>
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    )
  }
}

export default Show

{/* <CabinMap data={state} /> */}

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
