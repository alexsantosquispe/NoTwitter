import axios from 'axios'
import { baseUrl, user, userTweets, searchHashTags, tweet } from '../constants'
import { parse } from './Utils'

/**
 * Gets the user info
 * @returns - object {success: boolean, data: obejct result, error: object message}
 */
export const getUserInfo = async () => {
  let response = {
    success: false,
    data: null,
    error: null
  }
  try {
    const url = `${baseUrl}${user}`
    const result = await axios.get(url)
    if (result && result.status === 200) {
      response.success = true
      response.data = result.data
    } else {
      response.error = result.status
    }
  } catch (error) {
    response.error = error.message
  }
  return response
}

/**
 * Gest the time line for the current user
 * @returns {obejct} - {success: boolean, data: obejct result, error: object message}
 */
export const getUserTweets = async () => {
  let response = {
    success: false,
    data: null,
    error: null
  }
  try {
    const url = `${baseUrl}${userTweets}`
    const result = await axios.get(url)
    if (result && result.status === 200) {
      response.success = true
      response.data = result.data
    } else {
      response.error = result.status
    }
  } catch (error) {
    response.error = error.message
  }
  return response
}

/**
 * Gets the tweets that coincide with the quiery text sent
 * @param {string} text - The query text
 * @returns {object} - {success: boolean, data: obejct result, error: object message}
 */
export const searchTweetByQuery = async (text) => {
  let response = {
    success: false,
    data: null,
    error: null
  }
  try {
    const url = parse(`${baseUrl}${searchHashTags}${text}`)
    const result = await axios.get(url)
    if (result && result.status === 200) {
      response.success = true
      response.data = result.data
    } else {
      response.error = result.status
    }
  } catch (error) {
    response.error = error.message
  }
  return response
}

/**
 * Posts a new tweet
 * @param {string} text
 * @returns {object} - {success: boolean, data: obejct result, error: object message}
 */
export const sendTweet = async (text) => {
  let response = {
    success: false,
    data: null,
    error: null
  }
  try {
    const url = parse(`${baseUrl}${tweet}${text}`)
    const result = await axios.post(url)
    if (result && result.status === 201) {
      response.success = true
      response.data = result.data
    } else {
      response.error = result.status
    }
  } catch (error) {
    response.error = error.message
  }
  return response
}
