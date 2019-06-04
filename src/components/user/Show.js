import React from 'react'
import axios from 'axios'
import Auth from '../../lib/Auth'

const token = Auth.getToken()

class Show extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      user: {
        events: {},
        attending_events: {}
      }
    }
  }

  getUser() {
    axios.get('/api/profile', {
      headers: { 'Authorization': `Bearer ${token}`}
    })
      .then(res => this.setState({ user: res.data }))
  }

  componentDidMount() {
    this.getUser()
  }

  // componentDidUpdate(prevProps) {
  //   if(prevProps.location.pathname !== this.props.location.pathname) {
  //     this.getUser()
  //   }
  // }

  canModify() {
    return Auth.isAuthenticated() && Auth.getPayload().sub === this.state.user.id
  }

  render() {
    console.log(this.state.user, 'user')
    // console.log(this.state.user.id, 'id')
    // if(!this.state.user) return null
    return (
      <h1>{this.state.user.id}</h1>
    )
  }
}

export default Show


{/* <h1>Sensei {user.username.charAt(0).toUpperCase()}</h1> */}
