import React from 'react'
import { View, Image } from 'react-native'
import { Colors, GlobalStyles } from '../styles'

const BackgroundImage = ({ imageUrl }) => {
  const imageUri = imageUrl
    ? { uri: imageUrl }
    : require('../assets/default_background.jpg')
  return (
    <View
      style={{
        backgroundColor: Colors.primary,
        width: '100%',
        height: 136
      }}>
      <Image style={{ flex: 1 }} source={imageUri} />
    </View>
  )
}

export default BackgroundImage
