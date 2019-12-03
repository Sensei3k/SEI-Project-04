import React from 'react'
import ReactDOM from 'react-dom'

import {HashRouter as Router, Switch, Route} from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'

import Home from './components/common/Home'
import Navbar from './components/common/Navbar'
import Contact from './components/common/Contact'

import Register from './components/auth/Register'
import Login from './components/auth/Login'

import EventIndex from './components/events/Index'
import EventShow from './components/events/Show'
import EventNew from './components/events/New'

import UserShow from './components/user/Show'

import Footer from './components/common/Footer'

import 'bulma'
import './style.scss'


class App extends React.Component {

  render() {
    return (<Router>
      <main>
        <Navbar/>
        <Switch>
          <Route path='/profile' component={UserShow} />

          <Route path='/events/:id/edit' component={EventNew}/>
          <Route path='/events/:id' component={EventShow}/>
          <Route path='/events' component={EventIndex}/>

          <Route path='/contact' component={Contact}/>
          <Route path='/register' component={Register}/>
          <Route path='/login' component={Login}/>
          <Route exact path='/' component={Home}/>
        </Switch>
      </main>
      <Footer/>
    </Router>)
  }
}

ReactDOM.render(<App/>, document.getElementById('root'))

//
//  if(!this.state) return <p>Loading...</p>
