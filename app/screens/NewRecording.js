import React from 'react'
import { View } from 'react-native'

import Colors from "../Colors"
import SimpleScreen from "../components/SimpleScreen"
import FullView from "../components/FullView"
import Sentence from "../components/Sentence"
import RecordButton from "../components/RecordButton"
import Tip from "../components/Tip"

export default NewRecording = ({ onRecord, recording, tip }) => (
  <SimpleScreen>
    <FullView>
      <RecordButton
        onPress={onRecord}
        recording={recording}
      />
    </FullView>
    <View style={{height: 60}}>
      { recording && <Sentence>Recording...</Sentence> }
    </View>
    <Tip>{tip}</Tip>
  </SimpleScreen>
)
