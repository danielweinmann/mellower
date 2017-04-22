import React from 'react'
import { View, Text, Image, Dimensions } from 'react-native'
import { Constants } from 'expo'

import Colors from "../Colors"
import Sentence from "../components/Sentence"

export default NewRecording = () => (
  <View style={{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: Colors.darkGray,
    paddingTop: Constants.statusBarHeight + 40,
  }}>
    <Image
      source={require('../../assets/images/logo.png')}
      style={{
        height: (178 / 900) * (Dimensions.get('window').width * 0.8), 
        width: Dimensions.get('window').width * 0.8,
        marginBottom: 30,
      }}
    />
    <Sentence style={{
      textAlign: 'center',
      paddingHorizontal: 10,
    }}>
      Lear to sing in tune and share the path with fellow students
    </Sentence>
  </View>
)
