import React, { Component } from 'react'

export default class Layout extends Component {

  static propTypes = {
    children: React.PropTypes.element
  }

  render () {
    return <main>
      {this.props.children}
      <footer>Made with care at The Iron Yard</footer>
    </main>
  }
}
