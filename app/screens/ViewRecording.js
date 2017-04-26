import React from 'react'

import Colors from "../Colors"
import SimpleScreen from "../components/SimpleScreen"
import Sentence from "../components/Sentence"

export default ViewRecording = ({ melody }) => (
  <SimpleScreen>
    <FullView>
      <Sentence>{melody.notes.length} distinct notes</Sentence>
    </FullView>
  </SimpleScreen>
)
