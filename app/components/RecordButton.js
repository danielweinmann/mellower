import React, { Component } from 'react'
import { TouchableOpacity } from 'react-native'
import Colors from "../Colors"
import Sentence from "./Sentence"

export default class RecordButton extends Component {
  handlePress() {
    const { isRecording, onStartRecording, onStopRecording } = this.props
    if (isRecording) {
      onStopRecording()
    } else {
      onStartRecording()
    }
  }
  render() {
    const { isRecording, style } = this.props
    return (
      <TouchableOpacity onPress={this.handlePress.bind(this)} style={[{
        backgroundColor: Colors.red,
        alignItems: 'center',
        justifyContent: 'center',
        width: 120,
        height: 120,
        borderRadius: 60,
      }, style]}>
        <Sentence>{isRecording ? 'Stop' : 'Record'}</Sentence>
      </TouchableOpacity>
    )
  }
}