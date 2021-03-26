import React from 'react'
import { View, TextInput, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import { Colors, GlobalStyles } from '../styles'

const SearchBar = ({
  value,
  placeholder,
  onChangeTextHandler,
  onClearHandler
}) => {
  return (
    <View style={GlobalStyles.searchBar}>
      <TextInput
        style={GlobalStyles.searchBarInputText}
        selectionColor={Colors.primary}
        autoCapitalize="none"
        returnKeyType="search"
        placeholder={placeholder}
        placeholderTextColor={Colors.darkGray}
        value={value}
        onChangeText={onChangeTextHandler}
      />
      {value && value.length > 0 ? (
        <TouchableOpacity
          style={GlobalStyles.clearSearchBar}
          onPress={onClearHandler}>
          <Icon name="x" size={18} color={Colors.background} />
        </TouchableOpacity>
      ) : null}
    </View>
  )
}

export default SearchBar
