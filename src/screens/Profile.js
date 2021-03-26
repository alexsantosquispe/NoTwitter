import React, { PureComponent } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import changeNavigationBarColor from 'react-native-navigation-bar-color'
import * as ProfileAction from '../redux/actions/Profile.action'
import * as TimelineActions from '../redux/actions/Timeline.action'
import {
  BaseList,
  CustomStatusBar,
  ErrorPage,
  FloatActionButton,
  HeaderList,
  LoadingPage
} from '../components'
import { NEW_TWEET } from '../navigation/RouteNames'
import { Colors, GlobalStyles } from '../styles'

class Profile extends PureComponent {
  constructor(props) {
    super(props)
    this.newTweet = this.newTweet.bind(this)
    this.getUserInfo = this.getUserInfo.bind(this)
    this.onRefreshTweets = this.onRefreshTweets.bind(this)
  }

  getUserInfo() {
    const { fetchUserInfo, fetchTimeline } = this.props
    fetchUserInfo()
    fetchTimeline()
  }

  onRefreshTweets() {
    const { fetchTimeline } = this.props
    fetchTimeline()
  }

  newTweet() {
    const { navigation, profile } = this.props
    navigation.navigate(NEW_TWEET, {
      user: profile,
      onBackCallback: this.onRefreshTweets
    })
  }

  componentDidMount() {
    changeNavigationBarColor(Colors.navigationBar, true)
    this.getUserInfo()
  }

  render() {
    const { loading, error, profile, timeline } = this.props
    return loading ? (
      <LoadingPage />
    ) : error ? (
      <ErrorPage onPressHandler={this.getUserInfo} />
    ) : (
      <View style={[GlobalStyles.mainContainer, { paddingBottom: 8 }]}>
        <CustomStatusBar />
        <BaseList
          data={timeline}
          headerList={() => <HeaderList profile={profile} />}
          loading={loading}
          refreshHandler={this.onRefreshTweets}
        />
        <FloatActionButton icon="plus" onPressHandler={this.newTweet} />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profile.profile,
    loading: state.profile.loading,
    error: state.profile.error,
    timeline: state.timeline.timeline
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchUserInfo: () => dispatch(ProfileAction.getUserInfo()),
  fetchTimeline: () => dispatch(TimelineActions.getTimeline())
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
