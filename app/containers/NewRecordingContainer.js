import React, { Component } from 'react'
import { InteractionManager, Alert } from 'react-native'
import { Permissions, Audio } from 'expo'

import NewRecording from '../screens/NewRecording'

export default class NewRecordingContainer extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      isRecording: false,
      sound: null,
      duration: null,
    }
    this.recording = null
  }

  componentDidMount() {
    Audio.setIsEnabledAsync(true)
    Audio.setAudioModeAsync({
      allowsRecordingIOS: true,
      interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
      playsInSilentLockedModeIOS: true,
      shouldDuckAndroid: false,
      interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
    })
  }

  async startRecording() {
    const permission = await Permissions.askAsync(Permissions.AUDIO_RECORDING)
    if (permission.status === 'granted') {
      this.recording = new Audio.Recording()
      try {
        let status = null
        await this.recording.prepareToRecordAsync()
        await this.recording.startAsync()
        this.recording.setCallback(this.recordingStatus.bind(this))
        this.setState(() => ({ isRecording: true }))
      } catch (error) {
        Alert.alert(null, 'Ooops! There was an error while recording your audio.', [{text: 'OK'}])
      }
    } else {
      Alert.alert(null, 'Hey, you will need to give us permission if you want to record audio 😉', [{text: 'OK'}])
    }
  }

  async stopRecording() {
    await this.recording.stopAndUnloadAsync()
    const sound = this.recording.getNewSound()
    await sound.loadAsync()
    const status = await sound.getStatusAsync()
    this.setState(() => ({
      isRecording: false,
      duration: status.durationMillis,
      sound,
    }))
  }

  recordingStatus(status) {
    if (status.durationMillis) {
      this.setState(() => ({ duration: status.durationMillis }))
    }
  }

  durationText(milliseconds) {
    if (milliseconds === null) {
      return null
    }
    const totalSeconds = milliseconds / 1000
    const seconds = Math.floor(totalSeconds % 60)
    const minutes = Math.floor(totalSeconds / 60)
    const padWithZero = number => {
      const string = number.toString()
      if (number < 10) {
        return '0' + string
      }
      return string
    }
    return padWithZero(minutes) + ':' + padWithZero(seconds)
  }

  handleStartRecording() {
    InteractionManager.runAfterInteractions(() => {
      this.startRecording()
    })
  }

  handleStopRecording() {
    InteractionManager.runAfterInteractions(() => {
      this.stopRecording()
    })
  }

  render() {
    const { recording, duration } = this.state
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
        durationText={this.durationText(duration)}
        onStartRecording={this.handleStartRecording.bind(this)}
        onStopRecording={this.handleStopRecording.bind(this)}
      />
    )
  }
}
