const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
const ADD_POST = 'ADD_POST'
const UPDATE_NEW_MEASSAGE_TEXT = 'UPDATE_NEW_MEASSAGE_TEXT'
const SEND_MESSAGE = 'SEND_MESSAGE'

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 0, message: 'postMessage', likeCount: 32 },
        { id: 1, message: 'postMessage', likeCount: 33 },
        { id: 2, message: 'postMessage', likeCount: 1 },
        { id: 3, message: 'postMessage', likeCount: 100 },
      ],
      newPostText: '',
    },

    dialogsPage: {
      dialogs: [
        { id: 0, name: 'max' },
        { id: 1, name: 'tom' },
        { id: 2, name: 'eeee' },
        { id: 3, name: 'yyyy' },
      ],
      messages: [
        { id: 0, message: 'message' },
        { id: 1, message: 'message' },
        { id: 2, message: 'message' },
        { id: 3, message: 'message' },
      ],
      newMessageText: '',
    },
  },
  _callSubscriber() {
    console.log('state changed')
  },
  getState() {
    return this._state
  },
  subscribe(observer) {
    this._callSubscriber = observer
  },
  dispatch(action) {
    debugger
    if (action.type === ADD_POST) {
      let newPost = {
        id: 4,
        message: this._state.profilePage.newPostText,
        likeCount: 0,
      }
      this._state.profilePage.posts.push(newPost)
      this._state.profilePage.newPostText = ''
      this._callSubscriber(this._state)

    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText
      this._callSubscriber(this._state)

    } else if (action.type === UPDATE_NEW_MEASSAGE_TEXT) {
      this._state.dialogsPage.newMessageText = action.newText
      this._callSubscriber(this._state)

    } else if (action.type === SEND_MESSAGE) {
      let newMessage = {
        id: 4,
        message: this._state.dialogsPage.newMessageText,
      }
      this._state.dialogsPage.messages.push(newMessage)
      this._state.dialogsPage.newMessageText = ''
      this._callSubscriber(this._state)
    }
  },
}

export const updateNewPostAC = text => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
})

export const addPostAC = () => ({
  type: ADD_POST,
})

export const updateNewMessageAC = text => ({
  type: UPDATE_NEW_MEASSAGE_TEXT,
  newText: text,
})

export const sendMessageAC = () => ({
  type: SEND_MESSAGE,
})


export default store

window.store = store
