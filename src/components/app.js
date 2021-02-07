import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import NavBar from './NavBar/navBar'
import Home from './pages/home'
import SwitchColor from './pages/color-changer'

export default class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      bgColor: ''
    }
  }
  render () {
    return (
      
         
        <Router>
            <NavBar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/color-changer' component={SwitchColor} />
          </Switch>
        </Router>
     
    )
  }
}

