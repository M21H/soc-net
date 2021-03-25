const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
const ADD_POST = 'ADD_POST'

let initialState = {
  posts: [
    { id: 0, message: 'postMessage', likeCount: 32 },
    { id: 1, message: 'postMessage', likeCount: 33 },
    { id: 2, message: 'postMessage', likeCount: 1 },
    { id: 3, message: 'postMessage', likeCount: 100 },
  ],
  newPostText: '',
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 4,
        message: state.newPostText,
        likeCount: 0,
      }
      state.posts.push(newPost)
      state.newPostText = ''
      return state
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText
      return state
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

export default profileReducer
