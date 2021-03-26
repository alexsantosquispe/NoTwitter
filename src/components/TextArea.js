import React from 'react'
import { View, TextInput } from 'react-native'
import { Colors } from '../styles'

const TextArea = ({ value, onChangeText, placeholder, limit }) => {
  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 4,
        borderRadius: 8
      }}>
      <TextInput
        style={{
          fontSize: 20,
          paddingTop: 4,
          textAlignVertical: 'top',
          alignContent: 'flex-start'
        }}
        selectionColor={Colors.primary}
        autoCapitalize="none"
        placeholder={placeholder}
        autoFocus={true}
        placeholderTextColor={Colors.ligthGray}
        multiline={true}
        value={value}
        maxLength={limit}
        onChangeText={onChangeText}
      />
    </View>
  )
}

export default TextArea
