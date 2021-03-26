import * as types from '../constants/ActionTypes'

const initialState = {
  tweetText: '',
  loading: false,
  error: null,
  post: null
}

const postReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.ON_CHANGE_TWEET:
      return {
        ...state,
        tweetText: payload
      }
    case types.POST_TWEET_LOADING:
      return {
        ...state,
        loading: true
      }
    case types.POST_TWEET_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        post: payload
      }
    case types.POST_TWEET_ERROR:
      return {
        ...state,
        loading: false,
        error: payload
      }
    case types.RESET:
      return {
        ...state,
        tweetText: '',
        loading: false,
        error: null,
        post: null
      }
    default:
      return state
  }
}
export default postReducer
