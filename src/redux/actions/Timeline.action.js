import * as types from '../constants/ActionTypes'

export const getTimeline = () => ({
  type: types.FETCH_TIMELINE
})

export const timeLineLoading = () => ({
  type: types.TIMELINE_LOADING
})

export const timeLineSuccess = (payload) => ({
  type: types.TIMELINE_SUCCESS,
  payload
})

export const timeLineError = (payload) => ({
  type: types.TIMELINE_ERROR,
  payload
})
