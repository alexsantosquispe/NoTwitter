import React from 'react'
import { View, Text } from 'react-native'
import TwitteButton from './TwitterButton'
import { GlobalStyles } from '../styles'

const ErrorPage = ({ messageError, onPressHandler }) => {
  return (
    <View style={GlobalStyles.fillandCentered}>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Error!</Text>
      <Text style={{ fontSize: 16 }}>
        {messageError || 'Something went wrong please try again'}
      </Text>
      <TwitteButton text="Try again" action={onPressHandler} />
    </View>
  )
}

export default ErrorPage
