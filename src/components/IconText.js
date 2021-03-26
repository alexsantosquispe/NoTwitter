import React from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import { Colors } from '../styles'

const IconText = ({ icon, text, iconSize = 17, fontSize = 12 }) => {
  return (
    <View style={{ flexDirection: 'row', marginRight: 0 }}>
      <Icon name={icon} size={iconSize} color={Colors.darkGray} />
      {text ? (
        <Text
          style={{
            color: Colors.darkGray,
            fontSize: fontSize,
            marginLeft: 6
          }}>
          {text}
        </Text>
      ) : null}
    </View>
  )
}

export default IconText
