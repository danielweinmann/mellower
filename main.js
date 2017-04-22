import Expo from 'expo'
import React, { Component } from 'react'
import NewRecording from './app/screens/NewRecording'

class App extends Component {
  render() {
    return (<NewRecording />)
  }
}

Expo.registerRootComponent(App)
