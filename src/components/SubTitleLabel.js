import React from 'react'
import { Text } from 'react-native'
import { Colors } from '../styles'

const SubTitleLabel = ({ text, fontSize = 16 }) => {
  return text ? (
    <Text style={{ fontSize: fontSize, color: Colors.darkGray }}>@{text}</Text>
  ) : null
}

export default SubTitleLabel
