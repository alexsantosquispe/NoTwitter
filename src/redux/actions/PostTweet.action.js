import * as types from '../constants/ActionTypes'

export const postTweet = (payload) => ({
  type: types.POST_TWEET,
  payload
})

export const postTweetLoading = () => ({
  type: types.POST_TWEET_LOADING
})

export const postTweetSuccess = (payload) => ({
  type: types.POST_TWEET_SUCCESS,
  payload
})

export const postTweetError = (payload) => ({
  type: types.POST_TWEET_ERROR,
  payload
})

export const onChangeTweet = (payload) => ({
  type: types.ON_CHANGE_TWEET,
  payload
})

export const resetPost = () => ({
  type: types.RESET
})
