import React from 'react'
import { View, Text } from 'react-native'

const DescriptionLabel = ({ text, fontSize = 15, lineHeight = 20 }) => {
  return text ? (
    <Text style={{ fontSize: fontSize, lineHeight: lineHeight }}>{text}</Text>
  ) : null
}

export default DescriptionLabel
