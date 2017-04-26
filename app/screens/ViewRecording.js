import React from 'react'

import Colors from "../Colors"
import SimpleScreen from "../components/SimpleScreen"
import Sentence from "../components/Sentence"
import Bold from "../components/Bold"
import Notes from "../components/Notes"

export default ViewRecording = ({ melody: { notes } }) => (
  <SimpleScreen>
    <FullView>
      <Sentence>We found <Bold>{notes.length} distinct notes</Bold> in your recording</Sentence>
      <Notes notes={notes} style={{marginTop: 20}} />
    </FullView>
  </SimpleScreen>
)
