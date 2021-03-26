import React, { useState } from 'react'
import { Text, View, Keyboard } from 'react-native'
import changeNavigationBarColor from 'react-native-navigation-bar-color'
import {
  BaseList,
  CustomStatusBar,
  DismissKeyboardArea,
  HeaderBar,
  SearchBar,
  TitleLabel
} from '../components'
import { fakeApi } from '../services/mockHastTag'
import { Colors, GlobalStyles } from '../styles'

changeNavigationBarColor(Colors.navigationBar, true)

const Search = () => {
  const [fakeTweets, setFakeTweets] = useState(fakeApi.data)
  const [searchText, setSearchText] = useState('')

  const renderHeaderList = () => {
    return (
      <View style={{ paddingHorizontal: 12, paddingBottom: 16 }}>
        <TitleLabel text="Trends" hideIcon={true} />
      </View>
    )
  }

  const onSearchTextChange = (text) => {
    setSearchText(text)
    if (text) {
      const result = fakeApi.data.filter((tweet) => {
        const hashTags = tweet.entities.hashtags
        return hashTags.some((value) =>
          value.toLowerCase().includes(text.toLowerCase())
        )
      })
      setFakeTweets(result)
    }
  }

  const onClearSearchBar = () => {
    setSearchText('')
    setFakeTweets(fakeApi.data)
    Keyboard.dismiss()
  }

  return (
    <DismissKeyboardArea>
      <View style={GlobalStyles.mainContainer}>
        <CustomStatusBar />
        <HeaderBar>
          <SearchBar
            placeholder="Search #"
            value={searchText}
            onChangeTextHandler={onSearchTextChange}
            onClearHandler={onClearSearchBar}
          />
        </HeaderBar>
        {fakeTweets.length === 0 ? (
          <View style={GlobalStyles.fillandCentered}>
            <Text
              style={{
                color: Colors.darkGray,
                fontSize: 20,
                fontWeight: 'bold'
              }}>
              There is no results to show
            </Text>
          </View>
        ) : (
          <View style={{ flex: 1, paddingBottom: 8 }}>
            <BaseList data={fakeTweets} headerList={() => renderHeaderList()} />
          </View>
        )}
      </View>
    </DismissKeyboardArea>
  )
}

export default Search
