import React from 'react'
import ReactDOM from 'react-dom'

if (Meteor.isClient) {
  Meteor.startup(() => {
    ReactDOM.render(<App />, document.getElementById('app'))
  })
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  })
}
