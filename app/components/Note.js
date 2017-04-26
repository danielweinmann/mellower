import React from 'react'
import { View, Dimensions } from 'react-native'

import { fontFactor } from "../helpers"
import Colors from "../Colors"
import Icon from "./Icon"
import Sentence from "./Sentence"

const windowWidth = Dimensions.get('window').width

export default Note = ({ note, selected }) => (
  <View style={{
    backgroundColor: Colors.orange,
    alignItems: 'center',
    justifyContent: 'center',
    width: windowWidth / 4,
    height: windowWidth / 4,
    borderWidth: 3,
    borderColor: (selected ? Colors.darkOrange : Colors.orange),
  }}>
    <Icon name="controller-play" color={Colors.lightOrange} />
    <Sentence style={{
      color: Colors.darkGray,
      fontSize: 10 * fontFactor(),
    }}>
      { note.name }
    </Sentence>
  </View>
)
