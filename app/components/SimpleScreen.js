import React from 'react'

import BaseScreen from "../components/BaseScreen"
import Logo from "../components/Logo"
import TextBox from "../components/TextBox"

export default SimpleScreen = ({ children, style}) => (
  <BaseScreen style={style}>
    <Logo />
    <TextBox>
      Learn to sing in tune and share the path with fellow students
    </TextBox>
    { children }
  </BaseScreen>
)
