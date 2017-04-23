import React from 'react'
import { View } from 'react-native'

import Colors from "../Colors"
import SimpleScreen from "../components/SimpleScreen"
import FullView from "../components/FullView"
import Sentence from "../components/Sentence"
import RecordButton from "../components/RecordButton"
import Tip from "../components/Tip"

export default NewRecording = ({ isRecording, durationText, tip, onStartRecording, onStopRecording }) => (
  <SimpleScreen>
    <FullView>
      <RecordButton
        onStartRecording={onStartRecording}
        onStopRecording={onStopRecording}
        isRecording={isRecording}
      />
    </FullView>
    <View style={{height: 60}}>
      <Sentence>{durationText}</Sentence>
    </View>
    <Tip>{tip}</Tip>
  </SimpleScreen>
)
