import React from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import { Colors, GlobalStyles } from '../styles'

const ActionButton = ({ icon, onPressHandler }) => {
  return (
    <TouchableOpacity
      onPress={onPressHandler}
      style={GlobalStyles.actionButton}>
      <Icon name={icon} size={24} color={Colors.background} />
    </TouchableOpacity>
  )
}

export default ActionButton
