import React, { Component } from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import Restaurants from './Restaurants'
import Home from './Home'
import Layout from './Layout'

export default class App extends Component {

  render () {
    return <Router history={browserHistory}>
      <Route path='/' component={Layout}>
        <IndexRoute component={Home} />
        <Route path='restaurants' component={Restaurants} />
      </Route>
    </Router>
  }
}
