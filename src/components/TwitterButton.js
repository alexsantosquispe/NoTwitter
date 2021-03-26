import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { Colors } from '../styles'

const TwitterButton = ({ text, action, disabled = false }) => {
  const colorButton = !disabled ? Colors.primary : Colors.disabled
  return text && action ? (
    <TouchableOpacity
      onPress={action}
      disabled={disabled}
      style={{
        backgroundColor: colorButton,
        paddingHorizontal: 16,
        paddingVertical: 6,
        borderRadius: 16,
        marginHorizontal: 12,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
      <Text
        style={{ color: Colors.background, fontSize: 16, fontWeight: 'bold' }}>
        {text}
      </Text>
    </TouchableOpacity>
  ) : null
}

export default TwitterButton
