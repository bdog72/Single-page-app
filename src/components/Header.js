import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Restaurants extends Component {
  render () {
    return <div>
      <header>
        {/* <img src='http://dolcecarini.com/wp-content/uploads/2014/07/Cheeseburger.jpg' height='100' width='100' /> */}
        <h1>Restaurants</h1>
        <h2>Restaurants I enjoy!</h2>
        {/* <img src='http://dolcecarini.com/wp-content/uploads/2014/07/Cheeseburger.jpg' height='100' width='100' /> */}
      </header>
      <nav className='mainNavigation'>
        <ul>
          <li><Link to='/restaurants' activeClassName='active'>Restaurants</Link></li>
          <li><Link to='/foo' >Foo</Link></li>
          <li><a href='#'>Food</a></li>
          <li><a href='#'>Food</a></li>
        </ul>
      </nav>
    </div>
  }
}
