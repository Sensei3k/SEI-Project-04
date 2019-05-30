import React from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'

import Auth from '../../lib/Auth'

class Login extends React.Component {
  constructor() {
    super()

    this.state = {
      data: {},
      errors: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.login = this.login.bind(this)
  }

  handleChange(e) {
    const data = { ...this.state.data, [e.target.name]: e.target.value }
    this.setState({ data })
  }

  handleSubmit(e) {
    e.preventDefault()

    axios.post('api/login', this.state.data)
      .then(res => {
        Auth.setToken(res.data.token)
        this.props.history.push('/events')
      })
      .catch(() => this.setState({ error: 'Invalid Credentials' }))
  }

  login() {
    toast.success('Welcome back!', { containerId: 'A' })
    console.log('button clicked')
  }

  render() {
    return (
      <section className="section main">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-half-desktop is-two-thirds-tablet">
              <form onSubmit={this.handleSubmit}>
                <div className="field">
                  <label className="label">Email</label>
                  <div className="control">
                    <input
                      className="input"
                      name="email"
                      placeholder="eg: johnsnow@nightswatch.com"
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Password</label>
                  <div className="control">
                    <input
                      className="input"
                      name="password"
                      type="password"
                      placeholder="eg: ••••••••"
                      onChange={this.handleChange}
                    />
                  </div>
                  {this.state.error && <div className="help is-danger">{this.state.error}</div>}
                </div>
                <div className="terms">
                  <label className="checkbox">
                    <input type="checkbox" />
                    Remember me
                  </label>
                  <a>forgotten your password?</a>
                </div>
                <button className="button is-primary is-rounded"
                  onClick={this.login}
                >
                    Login
                </button>
              </form>
            </div>
          </div>
        </div>
        <div>
          <ToastContainer
            enableMultiContainer
            containerId= "A"
            position="top-center"
            hideProgressBar={true}
            closeOnClick
            autoClose={2000}
            toastClassName="profile-toast"
          />
        </div>
      </section>
    )
  }
}

export default Login
