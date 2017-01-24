import React, { Component } from 'react'

export default class Layout extends Component {
  render () {
    return <div className='flex-container'>
      <header>
        <h1>Restaurants</h1>
      </header>
      <div className='main1'>
        <nav>
          <ul>
            <li><a href='#'>Choice1</a></li>
            <li><a href='#'>Choice2</a></li>
            <li><a href='#'>Choice3</a></li>
            <li><a href='#'>Choice4</a></li>
            <li><a href='#'>Choice5</a></li>
          </ul>
        </nav>
        <article className='article'>
          <h2>Restaurants I enjoy!</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </article>
      </div>
      <footer>Made with care at The Iron Yard</footer>
    </div>
  }
}
