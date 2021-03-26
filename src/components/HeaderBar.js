import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'

import TwitterButton from './TwitterButton'
import { Colors, GlobalStyles } from '../styles'

const HeaderBar = ({
  title,
  logo,
  children,
  icon,
  iconAction,
  rightButtonText,
  rightButtonAction,
  rightButtonDisabled
}) => {
  return (
    <View style={GlobalStyles.headerContainer}>
      {icon && iconAction ? (
        <TouchableOpacity onPress={iconAction} style={GlobalStyles.headerIcon}>
          <Icon name={icon} size={26} color={Colors.primary} />
        </TouchableOpacity>
      ) : null}
      {logo ? (
        <View style={GlobalStyles.headerLogoContainer}>
          <Image
            style={GlobalStyles.headerLogo}
            source={require('../assets/twitter_logo.png')}
          />
        </View>
      ) : title ? (
        <View style={GlobalStyles.headerTitleContainer}>
          <Text style={GlobalStyles.headerTitle}>{title}</Text>
        </View>
      ) : children ? (
        <View style={GlobalStyles.headerChildren}>{children}</View>
      ) : null}
      <TwitterButton
        text={rightButtonText}
        action={rightButtonAction}
        disabled={rightButtonDisabled}
      />
    </View>
  )
}

export default HeaderBar
