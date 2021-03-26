import { combineReducers } from 'redux'
import profile from './Profile.reducer'
import timeline from './Timeline.reducer'
import tweets from './Tweets.reducer'
import postTweet from './PostTweet.reducer'

const rootReducer = combineReducers({
  profile,
  timeline,
  tweets,
  postTweet
})

export default rootReducer
