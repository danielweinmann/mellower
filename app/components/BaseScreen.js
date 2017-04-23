import React from 'react'
import { Constants } from 'expo'
import FullView from "../components/FullView"

export default BaseScreen = ({ children, style }) => (
  <FullView style={[{
    justifyContent: 'flex-start',
    backgroundColor: Colors.darkGray,
    paddingTop: Constants.statusBarHeight + 40,
  }, style]}>
    { children }
  </FullView>
)
