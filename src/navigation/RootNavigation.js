import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import HomeStack from './HomeStack'

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <HomeStack />
    </NavigationContainer>
  )
}

export default RootNavigation
