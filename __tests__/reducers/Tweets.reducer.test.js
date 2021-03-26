import * as types from '../../src/redux/constants/ActionTypes'
import TweetsReducer from '../../src/redux/reducers/Tweets.reducer'

describe('Tweets reducer', () => {
  const initialState = {
    loading: false,
    error: null,
    tweets: []
  }

  it('Initial state', () => {
    expect(TweetsReducer(undefined, {})).toEqual(initialState)
  })

  it('Tweets loading', () => {
    const result = {
      loading: true,
      error: null,
      tweets: []
    }
    expect(
      TweetsReducer(undefined, { type: types.SEARCH_TWEET_LOADING })
    ).toEqual(result)
  })

  it('Tweets Success', () => {
    const payload = {}
    const result = {
      loading: false,
      error: null,
      tweets: payload
    }
    expect(
      TweetsReducer(undefined, { type: types.SEARCH_TWEET_SUCCESS, payload })
    ).toEqual(result)
  })

  it('Tweets Error', () => {
    const payload = {}
    const result = {
      loading: false,
      error: payload,
      tweets: []
    }
    expect(
      TweetsReducer(undefined, { type: types.SEARCH_TWEET_ERROR, payload })
    ).toEqual(result)
  })
})
