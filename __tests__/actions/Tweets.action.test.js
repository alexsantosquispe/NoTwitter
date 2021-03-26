import * as types from '../../src/redux/constants/ActionTypes'
import * as TweetsAction from '../../src/redux/actions/Tweets.action'

describe('SearchTweet actions', () => {
  it('searchTweet ', () => {
    const result = {
      type: types.SEARCH_TWEET
    }
    expect(TweetsAction.searchTweet()).toEqual(result)
  })

  it('searchTweetLoading ', () => {
    const result = {
      type: types.SEARCH_TWEET_LOADING
    }
    expect(TweetsAction.searchTweetLoading()).toEqual(result)
  })

  it('searchTweetSuccess ', () => {
    const payload = {}
    const result = {
      type: types.SEARCH_TWEET_SUCCESS,
      payload
    }
    expect(TweetsAction.searchTweetSuccess(payload)).toEqual(result)
  })

  it('searchTweetError ', () => {
    const payload = {}
    const result = {
      type: types.SEARCH_TWEET_ERROR,
      payload
    }
    expect(TweetsAction.searchTweetError(payload)).toEqual(result)
  })
})
