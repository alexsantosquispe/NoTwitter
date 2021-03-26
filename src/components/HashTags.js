import React from 'react'
import { View, Text } from 'react-native'
import { Colors } from '../styles'

const HashTags = ({ hashtags }) => {
  return hashtags && hashtags.length > 0 ? (
    <View style={{ flexDirection: 'row', paddingVertical: 8 }}>
      {hashtags.map((hashtag, index) => {
        return (
          <Text
            key={index}
            style={{ color: Colors.primary, fontSize: 17, marginRight: 4 }}>
            {hashtag}
          </Text>
        )
      })}
    </View>
  ) : null
}

export default HashTags
