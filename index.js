import 'react-native-gesture-handler'
import React from 'react'
import { AppRegistry } from 'react-native'
import { Provider } from 'react-redux'
import RootNavigation from './src/navigation/RootNavigation'
import { default as Store } from './src/redux/store/configStore'
import { name as appName } from './app.json'

const RNComponent = () => {
  return (
    <Provider store={Store}>
      <RootNavigation />
    </Provider>
  )
}

AppRegistry.registerComponent(appName, () => RNComponent)
