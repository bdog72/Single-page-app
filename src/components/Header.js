import React, { Component } from 'react'
import { Link } from 'react-router'
import Butt from './Bootstrap'
export default class Restaurants extends Component {
  render () {
    return <div>
      <header>
        <h1>Restaurants</h1>
        {/* <h2>Restaurants I enjoy!</h2> */}
        <Butt />
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
