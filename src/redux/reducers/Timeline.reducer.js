import * as types from '../constants/ActionTypes'

const initialState = {
  loading: false,
  error: null,
  timeline: []
}
const timelineReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.TIMELINE_LOADING:
      return {
        ...state,
        loading: true
      }
    case types.TIMELINE_SUCCESS:
      return {
        ...state,
        loading: false,
        timeline: payload,
        error: null
      }
    case types.TIMELINE_ERROR:
      return {
        ...state,
        loading: false,
        error: payload
      }
    default:
      return state
  }
}
export default timelineReducer
