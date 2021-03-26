import * as types from '../../src/redux/constants/ActionTypes'
import * as TimelineActions from '../../src/redux/actions/Timeline.action'

describe('Timeline actions', () => {
  it('getTimeline ', () => {
    const result = {
      type: types.FETCH_TIMELINE
    }
    expect(TimelineActions.getTimeline()).toEqual(result)
  })

  it('timeLineLoading ', () => {
    const result = {
      type: types.TIMELINE_LOADING
    }
    expect(TimelineActions.timeLineLoading()).toEqual(result)
  })

  it('timeLineSuccess ', () => {
    const payload = {}
    const result = {
      type: types.TIMELINE_SUCCESS,
      payload
    }
    expect(TimelineActions.timeLineSuccess(payload)).toEqual(result)
  })

  it('timeLineError ', () => {
    const payload = {}
    const result = {
      type: types.TIMELINE_ERROR,
      payload
    }
    expect(TimelineActions.timeLineError(payload)).toEqual(result)
  })
})
