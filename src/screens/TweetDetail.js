import React from 'react'
import { View, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { LinkPreview } from '@flyerhq/react-native-link-preview'
import changeNavigationBarColor from 'react-native-navigation-bar-color'

import {
  CustomStatusBar,
  CircleAvatar,
  DescriptionLabel,
  Divider,
  HashTags,
  HeaderBar,
  IconText,
  TitleLabel,
  SubTitleLabel
} from '../components'
import { Colors, GlobalStyles } from '../styles'

changeNavigationBarColor(Colors.statusBar, true)

const TweetDetail = ({ route }) => {
  const navigation = useNavigation()
  const { tweet } = route.params

  const parseDate = () => {
    const createdAt = tweet.created_at.toString()
    let date = new Date(createdAt)
    const result = date.toDateString()
    return result
  }

  const parseUrl = () => {
    if (tweet.source) {
      const link = decodeURI(tweet.source)
      const href = link.match(/href="([^"]*)/)[1]
      return href
    }
    return null
  }

  const renderLinkPreview = () => {
    const href = parseUrl()
    return href ? (
      <View
        style={{
          backgroundColor: Colors.xxligthGray,
          borderRadius: 8,
          marginTop: 6
        }}>
        <LinkPreview text={href} />
      </View>
    ) : null
  }

  return (
    <View style={GlobalStyles.mainContainer}>
      <CustomStatusBar />
      <HeaderBar
        title="Tweet"
        icon="arrow-left"
        iconAction={() => {
          navigation.goBack()
        }}
      />
      <View style={{ paddingTop: 12, paddingHorizontal: 12 }}>
        <View style={{ flexDirection: 'row', paddingBottom: 16 }}>
          <CircleAvatar imageUrl={tweet.user.profile_image_url} size={50} />
          <View style={{ justifyContent: 'center' }}>
            <View style={{ paddingBottom: 6 }}>
              <TitleLabel text={tweet.user.name} fontSize={16} iconSize={13} />
            </View>
            <SubTitleLabel text={tweet.user.screen_name} fontSize={15} />
          </View>
        </View>
        <DescriptionLabel text={tweet.text} fontSize={24} lineHeight={28} />
        {tweet.entities && tweet.entities.hashtags ? (
          <HashTags hashtags={tweet.entities.hashtags} />
        ) : null}
        {renderLinkPreview()}
        <Text style={{ color: Colors.darkGray, paddingVertical: 4 }}>
          {parseDate()}
        </Text>
        <Divider />
        <View
          style={{
            flexDirection: 'row',
            paddingVertical: 8,
            paddingHorizontal: 24,
            justifyContent: 'space-between'
          }}>
          <IconText
            icon="message-circle"
            text={0}
            iconSize={20}
            fontSize={15}
          />
          <IconText
            icon="repeat"
            text={tweet.retweet_count}
            iconSize={20}
            fontSize={15}
          />
          <IconText
            icon="heart"
            text={tweet.favorite_count}
            iconSize={20}
            fontSize={15}
          />
          <IconText icon="share-2" iconSize={20} />
        </View>
        <Divider />
      </View>
    </View>
  )
}

export default TweetDetail
