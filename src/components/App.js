import React, { Component } from 'react'
// import { Router, Route, browserHistory } from 'react-router'
import Restaurants from './Restaurants'
import Layout from './Layout'

export default class App extends Component {

  render () {
    return <div><div>
      <Layout />
    </div>
      <div>
        <Restaurants />
      </div></div>
    // return <Router history={browserHistory}>
    //   <Route component={Layout}>
    //     <Route path='/Restaurants' component={Restaurants}>
    //   </Router>
  }
}
