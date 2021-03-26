import * as types from '../constants/ActionTypes'

export const getUserInfo = () => ({
  type: types.GET_USER_PROFILE
})

export const userInfoLoading = () => ({
  type: types.USER_PROFILE_LOADING
})

export const userInfoSuccess = (payload) => ({
  type: types.USER_PROFILE_SUCCESS,
  payload
})

export const userInfoError = (payload) => ({
  type: types.USER_PROFILE_ERROR,
  payload
})
