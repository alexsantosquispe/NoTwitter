import * as types from '../../src/redux/constants/ActionTypes'
import TimelineReducer from '../../src/redux/reducers/Timeline.reducer'

describe('Timeline reducer', () => {
  const initialState = {
    loading: false,
    error: null,
    timeline: []
  }
  it('Initial state', () => {
    expect(TimelineReducer(undefined, {})).toEqual(initialState)
  })

  it('Timeline loading', () => {
    const result = {
      loading: true,
      error: null,
      timeline: []
    }
    expect(
      TimelineReducer(undefined, { type: types.TIMELINE_LOADING })
    ).toEqual(result)
  })

  it('Timeline Success', () => {
    const payload = {}
    const result = {
      loading: false,
      error: null,
      timeline: payload
    }
    expect(
      TimelineReducer(undefined, { type: types.TIMELINE_SUCCESS, payload })
    ).toEqual(result)
  })

  it('Timeline Error', () => {
    const payload = {}
    const result = {
      loading: false,
      error: payload,
      timeline: []
    }
    expect(
      TimelineReducer(undefined, { type: types.TIMELINE_ERROR, payload })
    ).toEqual(result)
  })
})
