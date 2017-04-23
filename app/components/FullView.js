import React from 'react'
import { View } from 'react-native'

export default FullView = ({ children, style }) => (
  <View style={[{
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
  }, style]}>
    { children }
  </View>
)
