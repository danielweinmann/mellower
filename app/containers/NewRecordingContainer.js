import React, { Component } from 'react'
import { InteractionManager } from 'react-native'
import { Permissions, Audio } from 'expo'
import NewRecording from '../screens/NewRecording'

export default class NewRecordingContainer extends Component {
  state = {
    recording: false,
  }

  async record() {
    const permission = await Permissions.askAsync(Permissions.AUDIO_RECORDING)
    console.log("permission", permission)
    if (permission.status === 'granted') {
      const recording = new Audio.Recording()
      console.log("recording", recording)
      const status = await recording.getStatusAsync()
      console.log("status", status)
      await recording.prepareToRecordAsync()
      const newStatus = await recording.getStatusAsync()
      console.log("status", newStatus)
      // try {
      //   await recording.prepareToRecordAsync()
      //   await recording.startAsync()
      //   // You are now recording!
      // } catch (error) {
      //   // An error occurred!
      // }
    }
  }

  toggleRecording() {
    this.setState(({ recording }) => ({
      recording: !recording,
    }))
  }

  handleRecord() {
    InteractionManager.runAfterInteractions(() => {
      this.record()
    })
  }

  render() {
    const { recording } = this.state
    const tip = (
      recording ? 
        "Don't sing runs, riffs, trills or anything fast. We'll only consider simple notes for now." :
        "Sing a line or a phrase of a song and we'll show you your intonation note by note."
      )
    return (
      <NewRecording
        {...this.props}
        {...this.state}
        tip={tip}
        onRecord={this.handleRecord.bind(this)}
      />
    )
  }
}
