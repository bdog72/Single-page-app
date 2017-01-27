import React, { Component } from 'react'

export default class Layout extends Component {

  static propTypes = {
    children: React.PropTypes.element
  }

  render () {
    return <main>
      {this.props.children}
      <div className='img2'>
        <img src='http://del.h-cdn.co/assets/15/42/1600x800/landscape-1445028602-slow-cooker-chicken-wings-chipotle.jpg' />
      </div>
      <footer>Made with care at The Iron Yard</footer>
    </main>
  }
}
