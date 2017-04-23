import React from 'react'
import Sentence from "./Sentence"

export default TextBox = ({ style, children }) => (
  <Sentence style={[{
    marginHorizontal: 20,
    textAlign: 'center',
  }, style]}>
    {children}
  </Sentence>
)
