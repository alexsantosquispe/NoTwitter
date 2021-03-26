import React from 'react'
import { View, Text } from 'react-native'
import { GlobalStyles, Colors } from '../styles'

const FollowingText = ({ count, text }) => {
  return (
    <View style={GlobalStyles.followingContainer}>
      <Text style={GlobalStyles.followingNumber}>{count}</Text>
      <Text style={GlobalStyles.followingText}>{text}</Text>
    </View>
  )
}

export default FollowingText
