import React from 'react'
import { ScrollView, View } from 'react-native'

import Colors from "../Colors"
import Note from "./Note"

export default Notes = ({ notes, style }) => (
  <ScrollView style={[{
    flex: 1,
    alignSelf: 'stretch',
  }, style]}>
    <View style={{
      flexDirection: 'row',
      flexWrap: 'wrap',
    }}>
      { notes.map((note, index) => (
        <Note note={note} key={index} selected={index === 0} />
      )) }
    </View>
  </ScrollView>
)
