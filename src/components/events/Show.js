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
    console.log(this.state)
    if(!this.state.events) return null
    const { name, image, description } = this.state.events

    return (
      <section>
        <div>
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
          <section className="section">
            <div className="container">
              <div>
                <img src={image} />
                <p>{description}</p>
              </div>
            </div>
          </section>
        </div>
      </section>
    )
  }
}

export default Show
