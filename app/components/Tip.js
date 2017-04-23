import React from 'react'
import { View } from 'react-native'

import Colors from "../Colors"
import Icon from "./Icon"
import Sentence from "./Sentence"

export default Tip = ({ children, style }) => (
  <View style={[{
    backgroundColor: Colors.lightGray,
    alignSelf: 'stretch',
    paddingVertical: 20,
    paddingHorizontal: 10,
    flexDirection: 'row',
  }, style]}>
    <Icon name="light-bulb" style={{
      flex: 2,
    }} />
    <Sentence style={{
      flex: 10,
      color: Colors.darkGray,
    }}>
      { children }
    </Sentence>
  </View>
)
