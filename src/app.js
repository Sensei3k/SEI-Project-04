import React from 'react'
import ReactDOM from 'react-dom'

import { HashRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './components/common/Home'
import Navbar from './components/common/Navbar'

import Register from './components/auth/Register'

import 'bulma'
import './style.scss'

class App extends React.Component {


  render(){
    return (
      <Router>
        <main>
          <Navbar />
          <Switch>
            <Route path='/register' component={Register}/>
            <Route path='/' component={Home}/>
          </Switch>
        </main>
      </Router>
    )
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
)





// // componentDidMount() {
// //   axios.get('/api/events')
// //     .then(res => this.setState({ events: res.data}))
// // }
//
// // if(!this.state) return <p>Loading...</p>
// {/* <div>
//   {this.state.events.map(event => <div key={event.id}>
//     <h2>{event.name}</h2>
//     <img src={event.image}></img>
//     <p>{event.desription}</p>
//   </div>)}
// </div> */}
