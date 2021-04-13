import { userAPI } from "../api/api"

const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
const ADD_POST = 'ADD_POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

let initialState = {
  posts: [
    { id: 0, message: 'postMessage', likeCount: 32 },
    { id: 1, message: 'postMessage', likeCount: 33 },
    { id: 2, message: 'postMessage', likeCount: 1 },
    { id: 3, message: 'postMessage', likeCount: 100 },
  ],
  newPostText: '',
  profile: null,
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: Math.floor(Math.random() * 10000),
        message: state.newPostText,
        likeCount: 0,
      }
      return {
        ...state,
        posts: [newPost, ...state.posts],
        newPostText: '',
      }
    }
    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText,
      }
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      }
    default:
      return state
  }
}

export const updateNewPostAC = text => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
})

export const addPostAC = () => ({
  type: ADD_POST,
})

export const setUserProfile = profile => ({
  type: SET_USER_PROFILE,
  profile,
})

export const getUserProfile = userId => dispatch => {
  userAPI
    .getProfile(userId)
    .then(response => dispatch(setUserProfile(response)))
}

export default profileReducer
