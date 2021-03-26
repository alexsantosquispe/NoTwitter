import React from 'react'
import { View, Text } from 'react-native'
import BackgroundImage from './BackgroundImage'
import CircleAvatar from './CircleAvatar'
import Divider from './Divider'
import FollowingText from './FollowingText'
import IconText from './IconText'
import TitleLabel from './TitleLabel'
import SubTitleLabel from './SubTitleLabel'

const HeaderList = ({ profile }) => {
  const renderAvatarSection = () => {
    return (
      <View
        style={{
          marginLeft: 12,
          marginTop: -28
        }}>
        <CircleAvatar
          text={profile.name}
          imageUrl={profile.profile_image_url}
          size={72}
          fontSize={40}
          borderWidth={3}
        />
      </View>
    )
  }

  const renderUsernameSection = () => {
    return (
      <View style={{ marginLeft: 12 }}>
        <TitleLabel text={profile.name} />
        <SubTitleLabel text={profile.screen_name} />
      </View>
    )
  }

  const renderDateSection = () => {
    const createdAt = profile.created_at.toString()
    let date = new Date(createdAt)
    const result = date.toDateString()

    return (
      <View
        style={{
          marginTop: 20,
          marginLeft: 12
        }}>
        <IconText icon="calendar" text={`Joined ${result}`} fontSize={15} />
      </View>
    )
  }

  const renderFollowSection = () => {
    return (
      <View style={{ flexDirection: 'row' }}>
        <FollowingText count={profile.friends_count} text="Following" />
        <FollowingText count={profile.followers_count} text="Followers" />
      </View>
    )
  }

  return profile ? (
    <View>
      <BackgroundImage imageUrl={profile.profile_background_image_url} />
      {renderAvatarSection()}
      {renderUsernameSection()}
      {renderDateSection()}
      {renderFollowSection()}
      <Divider />
    </View>
  ) : null
}

export default HeaderList
