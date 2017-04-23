import React from 'react'
import { Image, Dimensions } from 'react-native'

export default Logo = () => (
  <Image
    source={require('../../assets/images/logo.png')}
    style={{
      height: (178 / 900) * (Dimensions.get('window').width * 0.8), 
      width: Dimensions.get('window').width * 0.8,
      marginBottom: 30,
    }}
  />
)
