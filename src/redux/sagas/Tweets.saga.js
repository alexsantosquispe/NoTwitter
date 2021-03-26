import { takeLatest, call, put } from 'redux-saga/effects'
import * as Api from '../../services/api'
import * as TweetsActions from '../actions/Tweets.action'
import * as PostTweetActions from '../actions/PostTweet.action'
import * as types from '../constants/ActionTypes'

function* searchTweetByQuery({ payload }) {
  try {
    yield put(TweetsActions.searchTweetLoading())
    const response = yield call(Api.searchTweetByQuery, payload)
    if (response && response.success) {
      yield put(TweetsActions.searchTweetSuccess(response.data))
    } else {
      yield put(TweetsActions.searchTweetError(response.error))
    }
  } catch (error) {
    yield put(TweetsActions.searchTweetError(error))
  }
}

function* sendTweet({ payload }) {
  try {
    yield put(PostTweetActions.postTweetLoading())
    const response = yield call(Api.sendTweet, payload)
    if (response && response.success) {
      yield put(PostTweetActions.postTweetSuccess(response.data))
    } else {
      yield put(PostTweetActions.postTweetError(response.error))
    }
  } catch (error) {
    yield put(PostTweetActions.postTweetError(response.error))
  }
}

export function* searchTweet() {
  yield takeLatest(types.SEARCH_TWEET, searchTweetByQuery)
}

export function* postTweet() {
  yield takeLatest(types.POST_TWEET, sendTweet)
}
