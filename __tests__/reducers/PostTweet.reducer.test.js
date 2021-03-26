import * as types from '../../src/redux/constants/ActionTypes'
import PostTweetReducer from '../../src/redux/reducers/PostTweet.reducer'

describe('Post Tweet reducer', () => {
  const initialState = {
    tweetText: '',
    loading: false,
    error: null,
    post: null
  }

  it('Initial state', () => {
    expect(PostTweetReducer(undefined, {})).toEqual(initialState)
  })

  it('Post Tweet loading', () => {
    const result = {
      tweetText: '',
      loading: true,
      error: null,
      post: null
    }
    expect(
      PostTweetReducer(undefined, { type: types.POST_TWEET_LOADING })
    ).toEqual(result)
  })

  it('Post Tweet Success', () => {
    const payload = {}
    const result = {
      tweetText: '',
      loading: false,
      error: null,
      post: payload
    }
    expect(
      PostTweetReducer(undefined, { type: types.POST_TWEET_SUCCESS, payload })
    ).toEqual(result)
  })

  it('Post Tweet Error', () => {
    const payload = {}
    const result = {
      tweetText: '',
      loading: false,
      error: payload,
      post: null
    }
    expect(
      PostTweetReducer(undefined, { type: types.POST_TWEET_ERROR, payload })
    ).toEqual(result)
  })
})
