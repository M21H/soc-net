import React from 'react'
import { sendMessageAC, updateNewMessageAC } from '../../redux/dialogs_reducer'
import Dialogs from './Dialogs'

const DialogsContainer = props => {
  let state = props.store.getState().dialogsPage

  let onChange = (text) => {
    props.store.dispatch(updateNewMessageAC(text))
  }

  let sendMessage = () => {
    props.store.dispatch(sendMessageAC())
  }

  return (
    <Dialogs
      sendMessage={sendMessage}
      updateNewMessage={onChange}
      dialogsPage={state}
    />
  )
}

export default DialogsContainer
