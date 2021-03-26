import * as types from '../constants/ActionTypes'

const initialState = {
  loading: false,
  error: null,
  profile: null
}

const profileReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.USER_PROFILE_LOADING:
      return {
        ...state,
        loading: true
      }
    case types.USER_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        profile: payload
      }
    case types.USER_PROFILE_ERROR:
      return {
        ...state,
        loading: false,
        error: payload
      }
    default:
      return state
  }
}

export default profileReducer
