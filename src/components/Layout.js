import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Layout extends Component {

  static propTypes = {
    children: React.PropTypes.element
  }

  render () {
    return <div className='flex-container'>
      <header>
        <h1>Restaurants</h1>
      </header>
      <div className='main1'>
        <nav>
          <ul>
            {/* <Link to='/'>Home</Link> */}
            {/* <li><Link to='/Restaurants'>Restaurants</Link></li> */}
            <li><Link to='/restaurants'>Food</Link></li>
            <li><a href='#'>Food</a></li>
            <li><a href='#'>Food</a></li>
            <li><a href='#'>Food</a></li>
            <li><a href='#'>Food</a></li>
          </ul>
        </nav>
        <article className='article'>
          <h2>Restaurants I enjoy!</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </article>
      </div>
      <main>
        {this.props.children}
      </main>
      <footer>Made with care at The Iron Yard</footer>
    </div>
  }
}
