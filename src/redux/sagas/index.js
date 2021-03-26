import { all } from 'redux-saga/effects'
import { getUserInfo, getTimeline } from './Profile.saga'
import { searchTweet, postTweet } from './Tweets.saga'

export default function* rootSaga() {
  yield all([getUserInfo(), getTimeline(), searchTweet(), postTweet()])
}
