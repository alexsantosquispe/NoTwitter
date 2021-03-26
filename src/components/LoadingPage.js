import React from 'react'
import { View, ActivityIndicator } from 'react-native'
import { Colors, GlobalStyles } from '../styles'

const LoadingPage = () => {
  return (
    <View style={GlobalStyles.fillandCentered}>
      <ActivityIndicator size="large" color={Colors.primary} />
    </View>
  )
}

export default LoadingPage
