import Expo from 'expo'
import React, { Component } from 'react'
import NewRecordingContainer from './app/containers/NewRecordingContainer'

class App extends Component {
  render() {
    return (<NewRecordingContainer />)
  }
}

Expo.registerRootComponent(App)
