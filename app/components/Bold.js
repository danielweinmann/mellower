import React from 'react'
import Sentence from "./Sentence"

export default Bold = ({ style, children }) => (
  <Sentence style={[{
    fontWeight: 'bold',
  }, style]}>
    {children}
  </Sentence>
)
