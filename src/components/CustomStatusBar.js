import React from 'react'
import { StatusBar, Platform } from 'react-native'
import { Colors } from '../styles'

const CustomStatusBar = () => {
  return Platform.OS === 'android' ? (
    <StatusBar barStyle="dark-content" backgroundColor={Colors.statusBar} />
  ) : (
    <StatusBar barStyle="dark-content" backgroundColor={Colors.statusBarIOS} />
  )
}

export default CustomStatusBar
