import React, { PureComponent } from 'react'
import { View, Image, Text } from 'react-native'
import { connect } from 'react-redux'
import { openCamera, openGallery } from '../services/gallery'
import changeNavigationBarColor from 'react-native-navigation-bar-color'
import * as PostTweetActions from '../redux/actions/PostTweet.action'
import {
  CustomStatusBar,
  CircleAvatar,
  HeaderBar,
  TextArea,
  Toolbar
} from '../components'
import { Colors, GlobalStyles } from '../styles'

class NewTweet extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      imageUri: null
    }
    this.goBack = this.goBack.bind(this)
    this.postNewTweet = this.postNewTweet.bind(this)
    this.onChangeTextHandler = this.onChangeTextHandler.bind(this)
    this.launchCamera = this.launchCamera.bind(this)
    this.launchGallery = this.launchGallery.bind(this)
  }

  componentDidMount() {
    changeNavigationBarColor(Colors.statusBar, true)
  }

  goBack() {
    const { navigation } = this.props
    navigation.goBack()
  }

  postNewTweet() {
    const { postTweet, tweetText } = this.props
    postTweet(tweetText)
  }

  onChangeTextHandler(text) {
    const { onChangeTweetText } = this.props
    onChangeTweetText(text)
  }

  componentDidUpdate() {
    const { route, post } = this.props
    const { onBackCallback } = route.params
    if (post) {
      onBackCallback()
      this.goBack()
    }
  }

  componentWillUnmount() {
    const { resetPost } = this.props
    resetPost()
  }

  launchCamera() {
    openCamera((response) => {
      this.setState({ imageUri: response.uri })
    })
  }

  launchGallery() {
    openGallery((response) => {
      this.setState({ imageUri: response.uri })
    })
  }

  render() {
    const { route, tweetText } = this.props
    const { user } = route.params

    return (
      <View style={GlobalStyles.mainContainer}>
        <CustomStatusBar />
        <HeaderBar
          title="New Tweet"
          icon="x"
          iconAction={this.goBack}
          rightButtonText="Tweet"
          rightButtonAction={this.postNewTweet}
          rightButtonDisabled={tweetText.length === 0}
        />
        <View style={{ paddingHorizontal: 12, paddingTop: 16 }}>
          <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
            <CircleAvatar imageUrl={user.profile_image_url} />
            <TextArea
              value={tweetText}
              onChangeText={this.onChangeTextHandler}
              placeholder="What's happening?"
            />
          </View>
        </View>
        {this.state.imageUri && (
          <View
            style={{
              alignSelf: 'center',
              width: '65%',
              height: 160,
              marginHorizontal: 12
            }}>
            <Image
              style={{
                width: '100%',
                height: 160,
                resizeMode: 'stretch',
                borderRadius: 16
              }}
              source={{ uri: this.state.imageUri }}
            />
            <Text>This image won't be sent</Text>
          </View>
        )}
        <Toolbar
          value={tweetText}
          limit={140}
          openGallery={this.launchGallery}
          openCamera={this.launchCamera}
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  tweetText: state.postTweet.tweetText,
  loading: state.postTweet.loading,
  post: state.postTweet.post,
  error: state.postTweet.error
})

const mapDispatchToProps = (dispatch) => ({
  postTweet: (text) => dispatch(PostTweetActions.postTweet(text)),
  onChangeTweetText: (text) => dispatch(PostTweetActions.onChangeTweet(text)),
  resetPost: () => dispatch(PostTweetActions.resetPost())
})

export default connect(mapStateToProps, mapDispatchToProps)(NewTweet)
