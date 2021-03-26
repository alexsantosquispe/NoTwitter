import { takeLatest, call, put } from 'redux-saga/effects'
import * as Api from '../../services/api'
import * as ProfileActions from '../actions/Profile.action'
import * as TimelineActions from '../actions/Timeline.action'
import * as types from '../constants/ActionTypes'

function* fetchUserInfo() {
  try {
    yield put(ProfileActions.userInfoLoading())
    const response = yield call(Api.getUserInfo)
    if (response && response.success) {
      yield put(ProfileActions.userInfoSuccess(response.data))
    } else {
      yield put(ProfileActions.userInfoError(response.error))
    }
  } catch (error) {
    yield put(ProfileActions.userInfoError(error))
  }
}

function* fetchTimeline() {
  try {
    yield put(TimelineActions.timeLineLoading())
    const response = yield call(Api.getUserTweets)
    if (response && response.success) {
      yield put(TimelineActions.timeLineSuccess(response.data))
    } else {
      yield put(TimelineActions.timeLineError(response.error))
    }
  } catch (error) {
    yield put(TimelineActions.timeLineError(response.error))
  }
}

export function* getUserInfo() {
  yield takeLatest(types.GET_USER_PROFILE, fetchUserInfo)
}

export function* getTimeline() {
  yield takeLatest(types.FETCH_TIMELINE, fetchTimeline)
}
