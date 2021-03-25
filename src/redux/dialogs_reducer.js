const UPDATE_NEW_MEASSAGE_TEXT = 'UPDATE_NEW_MEASSAGE_TEXT'
const SEND_MESSAGE = 'SEND_MESSAGE'

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MEASSAGE_TEXT:
      state.newMessageText = action.newText
      return state
    case SEND_MESSAGE:
      let newMessage = {
        id: 4,
        message: state.newMessageText,
      }
      state.messages.push(newMessage)
      state.newMessageText = ''
      return state
    default:
      return state
  }
}

export const updateNewMessageAC = text => ({
  type: UPDATE_NEW_MEASSAGE_TEXT,
  newText: text,
})

export const sendMessageAC = () => ({
  type: SEND_MESSAGE,
})

export default dialogsReducer
