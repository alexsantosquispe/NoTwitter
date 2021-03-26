import * as types from '../../src/redux/constants/ActionTypes'
import * as PostTweetActions from '../../src/redux/actions/PostTweet.action'

describe('Post Tweet actions', () => {
  it('postTweet ', () => {
    const payload = null
    const result = {
      type: types.POST_TWEET,
      payload
    }
    expect(PostTweetActions.postTweet(payload)).toEqual(result)
  })

  it('postTweetLoading ', () => {
    const result = {
      type: types.POST_TWEET_LOADING
    }
    expect(PostTweetActions.postTweetLoading()).toEqual(result)
  })

  it('postTweetSuccess ', () => {
    const payload = {}
    const result = {
      type: types.POST_TWEET_SUCCESS,
      payload
    }
    expect(PostTweetActions.postTweetSuccess(payload)).toEqual(result)
  })

  it('postTweetError ', () => {
    const payload = {}
    const result = {
      type: types.POST_TWEET_ERROR,
      payload
    }
    expect(PostTweetActions.postTweetError(payload)).toEqual(result)
  })

  it('onChangeTweet ', () => {
    const payload = ''
    const result = {
      type: types.ON_CHANGE_TWEET,
      payload
    }
    expect(PostTweetActions.onChangeTweet(payload)).toEqual(result)
  })

  it('resetPost ', () => {
    const result = {
      type: types.RESET
    }
    expect(PostTweetActions.resetPost()).toEqual(result)
  })
})
