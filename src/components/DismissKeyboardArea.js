import React from 'react'
import { Keyboard, TouchableWithoutFeedback } from 'react-native'

const dismissKeyboard = () => {
  Keyboard.dismiss()
}

const DismissKeyboardArea = ({ children }) => {
  return (
    <TouchableWithoutFeedback onPress={() => dismissKeyboard()}>
      {children}
    </TouchableWithoutFeedback>
  )
}

export default DismissKeyboardArea
