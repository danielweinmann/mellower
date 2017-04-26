import React from 'react'

import BaseScreen from "../components/BaseScreen"
import Logo from "../components/Logo"

export default SimpleScreen = ({ children, style}) => (
  <BaseScreen style={style}>
    <Logo />
    { children }
  </BaseScreen>
)
