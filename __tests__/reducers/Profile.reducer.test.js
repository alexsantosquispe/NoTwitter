import * as types from '../../src/redux/constants/ActionTypes'
import ProfileReducer from '../../src/redux/reducers/Profile.reducer'

describe('Profile reducer', () => {
  const initialState = {
    loading: false,
    error: null,
    profile: null
  }

  it('Initial state', () => {
    expect(ProfileReducer(undefined, {})).toEqual(initialState)
  })

  it('Profile loading', () => {
    const result = {
      loading: true,
      error: null,
      profile: null
    }
    expect(
      ProfileReducer(undefined, { type: types.USER_PROFILE_LOADING })
    ).toEqual(result)
  })

  it('Profile Success', () => {
    const payload = {}
    const result = {
      loading: false,
      error: null,
      profile: payload
    }
    expect(
      ProfileReducer(undefined, { type: types.USER_PROFILE_SUCCESS, payload })
    ).toEqual(result)
  })

  it('Profile Error', () => {
    const payload = {}
    const result = {
      loading: false,
      error: payload,
      profile: null
    }
    expect(
      ProfileReducer(undefined, { type: types.USER_PROFILE_ERROR, payload })
    ).toEqual(result)
  })
})
