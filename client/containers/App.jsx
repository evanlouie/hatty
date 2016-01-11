import React, { Component, PropTypes } from 'react'
import { AppBar } from 'material-ui'

App = class App extends Component {

  render () {

    return (
      <div className="app">
        <AppBar />
        <h1>Welcome To Za Warudo</h1>
      </div>
    )
  }
}

