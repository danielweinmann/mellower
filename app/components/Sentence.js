import React from 'react'
import { Text } from 'react-native'
import { fontFactor } from "../helpers"
import Colors from "../Colors"

export default Sentence = (props) => (
  <Text style={[{
    color: Colors.white,
    fontSize: 12 * fontFactor(),
  }, props.style]}>
    {props.children}
  </Text>
)
