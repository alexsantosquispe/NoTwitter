import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome5'

import { Search, Profile, NewTweet, TweetDetail } from '../screens'
import * as Routes from './RouteNames'
import { Colors } from '../styles'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

const HomeTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName={Routes.PROFILE}
      tabBarOptions={{
        activeTintColor: Colors.activeIcon,
        inactiveTintColor: Colors.inactiveIcon,
        showLabel: false
      }}>
      <Tab.Screen
        name={Routes.PROFILE}
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="user" color={color} size={25} />
          )
        }}
      />
      <Tab.Screen
        name={Routes.SEARCH}
        component={Search}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="search" color={color} size={25} />
          )
        }}
      />
    </Tab.Navigator>
  )
}

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName={Routes.TWITTER}>
      <Stack.Screen
        name={Routes.TWITTER}
        component={HomeTabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={Routes.NEW_TWEET}
        component={NewTweet}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={Routes.TWEET_DETAIL}
        component={TweetDetail}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}

export default HomeStack
