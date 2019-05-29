import React from 'react'
import ReactDOM from 'react-dom'
// import axios from 'axios'

import { HashRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './components/common/Home'

import 'bulma'

class App extends React.Component {


  render(){
    console.log('errors')
    return (
      <Router>
        <div>
          <Switch>
            <Route path='/' component={Home}/>
          </Switch>
        </div>
      </Router>
    )
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
)





// componentDidMount() {
//   axios.get('/api/events')
//     .then(res => this.setState({ events: res.data}))
// }

// if(!this.state) return <p>Loading...</p>
{/* <div>
  {this.state.events.map(event => <div key={event.id}>
    <h2>{event.name}</h2>
    <img src={event.image}></img>
    <p>{event.desription}</p>
  </div>)}
</div> */}
