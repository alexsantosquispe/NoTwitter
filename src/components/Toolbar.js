import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import { Colors } from '../styles'

const Toolbar = ({ value, limit, openGallery, openCamera }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        position: 'absolute',
        bottom: 0,
        borderTopColor: Colors.ligthGray,
        borderWidth: 0.5,
        borderBottomWidth: 0,
        borderRightWidth: 0,
        borderLeftWidth: 0,
        height: 60
      }}>
      <TouchableOpacity style={{ padding: 16 }} onPress={openGallery}>
        <Icon name="image" size={25} color={Colors.primary} />
      </TouchableOpacity>
      <TouchableOpacity style={{ padding: 16 }} onPress={openCamera}>
        <Icon name="camera" size={25} color={Colors.primary} />
      </TouchableOpacity>
      <View style={{ flex: 1, alignItems: 'flex-end', paddingHorizontal: 12 }}>
        <Text
          style={{
            color: Colors.darkGray,
            fontSize: 16,
            fontWeight: 'bold'
          }}>
          {value.length}/{limit}
        </Text>
      </View>
    </View>
  )
}

export default Toolbar
