import React from 'react'
import { Image, Text, View } from 'react-native'
import { Colors, GlobalStyles } from '../styles'

const CircleAvatar = ({
  text,
  imageUrl,
  size = 40,
  fontSize = 18,
  borderWidth = 0
}) => {
  const avatarSize = { width: size, height: size, borderRadius: size / 2 }

  return imageUrl ? (
    <View
      style={[
        GlobalStyles.circleAvatarContainer,
        avatarSize,
        { borderWidth: borderWidth, borderColor: Colors.background }
      ]}>
      <Image
        style={[GlobalStyles.avatarImage, avatarSize]}
        source={{ uri: imageUrl }}
      />
    </View>
  ) : text && text.length > 0 ? (
    <View
      style={[
        GlobalStyles.circleAvatarContainer,
        avatarSize,
        { backgroundColor: Colors.primary },
        { borderWidth: borderWidth, borderColor: Colors.background }
      ]}>
      <Text style={[GlobalStyles.circleAvatarText, { fontSize: fontSize }]}>
        {text.charAt(0)}
      </Text>
    </View>
  ) : null
}

export default CircleAvatar
