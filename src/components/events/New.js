import React from 'react'
import axios from 'axios'

import Form from './Form'
import Auth from '../../lib/Auth'

class New extends React.Component {

  constructor(){
    super()

    this.state = {
      events: {}
    }


  }

  componentDidMount() {
    axios.get('/api/events')
      .then(res => this.setState({ events: res.data }))
  }

  handleChange(e) {
    const data = { ...this.state.data, [e.target.name]: e.target.value }
    this.setState({ data })
  }

  handleSubmit(e) {
    e.preventDefault()

    const token = Auth.getToken()

    axios.post('/api/events', this.state.data, {
      headers: { 'Authorization': `Bearer ${token}` }
    })
      .then(() => this.props.history.push('/events'))
  }

  render() {
    console.log(this.state)
    return(
      <section className="section">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-half-desktop is-two-thirds-tablet">
              <Form
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                events={this.state.events}
              />
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default New
