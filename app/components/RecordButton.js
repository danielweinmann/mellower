import React from 'react'
import { TouchableOpacity } from 'react-native'
import Colors from "../Colors"
import Sentence from "./Sentence"

export default RecordButton = ({ onPress, recording, style }) => (
  <TouchableOpacity onPress={onPress} style={[{
    backgroundColor: Colors.red,
    alignItems: 'center',
    justifyContent: 'center',
    width: 120,
    height: 120,
    borderRadius: 60,
  }, style]}>
    <Sentence>{recording ? 'Stop' : 'Record'}</Sentence>
  </TouchableOpacity>
)
