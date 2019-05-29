import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

class App extends React.Component {

  componentDidMount() {
    axios.get('/api/events')
      .then(res => this.setState({ events: res.data}))
  }

  render(){
    console.log('errors')
    if(!this.state) return <p>Loading...</p>
    return (
      <div>
        {this.state.events.map(event => <div key={event.id}>
          <h2>{event.name}</h2>
          <img src={event.image}></img>
          <p>{event.desription}</p>
        </div>)}
      </div>
    )
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
)
