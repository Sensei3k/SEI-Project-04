import React from 'react'
import ReactDOM from 'react-dom'

import {HashRouter as Router, Switch, Route} from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'

import Home from './components/common/Home'
import Navbar from './components/common/Navbar'

import Register from './components/auth/Register'
import Login from './components/auth/Login'

import EventIndex from './components/events/Index'
import EventShow from './components/events/Show'

import 'bulma'
import './style.scss'

class App extends React.Component {

  render() {
    return (<Router>
      <main>
        <Navbar/>
        <Switch>
          <Route path='/events/:id' component={EventShow}/>
          <Route path='/events' component={EventIndex}/>

          <Route path='/register' component={Register}/>
          <Route path='/login' component={Login}/>
          <Route exact path='/' component={Home}/>
        </Switch>
      </main>
    </Router>)
  }
}

ReactDOM.render(<App/>, document.getElementById('root'))

//
//  if(!this.state) return <p>Loading...</p>
