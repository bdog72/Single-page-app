import React, { Component } from 'react'

export default class Layout extends Component {

  static propTypes = {
    children: React.PropTypes.element
  }

  render () {
    /* <img src='https://s-media-cache-ak0.pinimg.com/originals/a1/b7/fa/a1b7fab49203c1a8a7d0bf87da5b2cd2.jpg' width='700' height='300' /> */
    return <main>
      {this.props.children}
      <footer>Made with care at The Iron Yard</footer>
    </main>
  }
}
