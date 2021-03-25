import dialogsReducer from './dialogs_reducer'
import profileReducer from './dialogs_reducer'
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
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)

    this._callSubscriber(this._state)
  },
}

export default store

window.store = store
