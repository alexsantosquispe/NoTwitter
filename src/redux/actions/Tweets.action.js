import * as types from '../constants/ActionTypes'

export const searchTweet = (payload) => ({
  type: types.SEARCH_TWEET,
  payload
})

export const searchTweetLoading = () => ({
  type: types.SEARCH_TWEET_LOADING
})

export const searchTweetSuccess = (payload) => ({
  type: types.SEARCH_TWEET_SUCCESS,
  payload
})

export const searchTweetError = (payload) => ({
  type: types.SEARCH_TWEET_ERROR,
  payload
})
