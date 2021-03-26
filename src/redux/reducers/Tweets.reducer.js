import * as types from '../constants/ActionTypes'

const initialState = {
  loading: false,
  error: null,
  tweets: []
}

const tweetsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.SEARCH_TWEET_LOADING:
      return {
        ...state,
        loading: true
      }
    case types.SEARCH_TWEET_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        tweets: payload
      }
    case types.SEARCH_TWEET_ERROR:
      return {
        ...state,
        loading: false,
        error: payload
      }
    default:
      return state
  }
}

export default tweetsReducer
