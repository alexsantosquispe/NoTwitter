import React from 'react'
import { Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { Colors } from '../styles'

const TitleLabel = ({
  text,
  fontSize = 26,
  iconSize = 17,
  hideIcon = false
}) => {
  return text ? (
    <View
      style={{ flexDirection: 'row', alignItems: 'center', paddingRight: 6 }}>
      <Text
        style={{
          fontSize: fontSize,
          fontWeight: 'bold',
          paddingRight: 4,
          alignSelf: 'flex-end'
        }}>
        {text}
      </Text>
      {!hideIcon ? (
        <Icon name="lock" size={iconSize} color={Colors.secondary} />
      ) : null}
    </View>
  ) : null
}

export default TitleLabel
