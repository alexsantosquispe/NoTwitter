import React from 'react'
import { View, FlatList, TouchableOpacity, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { LinkPreview } from '@flyerhq/react-native-link-preview'

import CircleAvatar from './CircleAvatar'
import Divider from './Divider'
import IconText from './IconText'
import TitleLabel from './TitleLabel'
import SubTitleLabel from './SubTitleLabel'
import DescriptionLabel from './DescriptionLabel'
import HashTags from './HashTags'
import { TWEET_DETAIL } from '../navigation/RouteNames'
import { Colors } from '../styles'

const BaseList = ({ data, headerList, loading, refreshHandler }) => {
  const navigation = useNavigation()

  const goToDetailTweet = (item) => {
    navigation.navigate(TWEET_DETAIL, { tweet: item })
  }
  const keyExtractor = (item) => {
    return item.id.toString()
  }

  const renderSeparator = () => {
    return <Divider />
  }

  const renderSource = (source) => {
    if (source) {
      const link = decodeURI(source)
      const href = link.match(/href="([^"]*)/)[1]

      return (
        <View
          style={{
            backgroundColor: Colors.xxligthGray,
            borderRadius: 8,
            marginTop: 6
          }}>
          <LinkPreview text={href} />
        </View>
      )
    }

    return null
  }

  const renderItemTweet = ({ item }) => {
    const { user, text, source, entities = null } = item

    return (
      <TouchableOpacity
        onPress={() => goToDetailTweet(item)}
        style={{
          width: '100%',
          flexDirection: 'row',
          paddingHorizontal: 12
        }}>
        <CircleAvatar
          text={user.name}
          imageUrl={user.profile_image_url}
          size={46}
        />
        <View style={{ flex: 1, paddingRight: 20 }}>
          <View style={{ flexDirection: 'row' }}>
            <TitleLabel text={user.name} fontSize={16} iconSize={13} />
            <SubTitleLabel text={user.screen_name} fontSize={16} />
          </View>
          <View style={{ width: '100%' }}>
            <DescriptionLabel text={text} />
          </View>
          {entities && entities.hashtags ? (
            <HashTags hashtags={entities.hashtags} />
          ) : null}
          {renderSource(source)}
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              justifyContent: 'space-between',
              paddingTop: 20
            }}>
            <IconText icon="message-circle" text={0} />
            <IconText icon="repeat" text={item.retweet_count} />
            <IconText icon="heart" text={item.favorite_count} />
            <IconText icon="share-2" />
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <View style={{ flex: 1, backgroundColor: Colors.background }}>
      {data && data.length > 0 ? (
        <FlatList
          data={data}
          keyExtractor={keyExtractor}
          renderItem={renderItemTweet}
          ListHeaderComponent={headerList}
          ItemSeparatorComponent={renderSeparator}
          refreshing={loading}
          onRefresh={refreshHandler}
        />
      ) : null}
    </View>
  )
}

export default BaseList
