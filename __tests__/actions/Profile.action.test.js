import * as types from '../../src/redux/constants/ActionTypes'
import * as ProfileActions from '../../src/redux/actions/Profile.action'

describe('Profile actions', () => {
  it('getUserInfo ', () => {
    const result = {
      type: types.GET_USER_PROFILE
    }
    expect(ProfileActions.getUserInfo()).toEqual(result)
  })

  it('userInfoLoading ', () => {
    const result = {
      type: types.USER_PROFILE_LOADING
    }
    expect(ProfileActions.userInfoLoading()).toEqual(result)
  })

  it('userInfoSuccess ', () => {
    const payload = {}
    const result = {
      type: types.USER_PROFILE_SUCCESS,
      payload
    }
    expect(ProfileActions.userInfoSuccess(payload)).toEqual(result)
  })

  it('userInfoError ', () => {
    const payload = {}
    const result = {
      type: types.USER_PROFILE_ERROR,
      payload
    }
    expect(ProfileActions.userInfoError(payload)).toEqual(result)
  })
})
