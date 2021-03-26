import React from 'react'
import { sendMessageAC, updateNewMessageAC } from '../../redux/dialogs_reducer'
import StoreContext from '../../store_context'
import Dialogs from './Dialogs'

const DialogsContainer = () => {
  return (
    <StoreContext.Consumer>
      {store => {
        let state = store.getState()

        let onChange = text => {
          store.dispatch(updateNewMessageAC(text))
        }

        let sendMessage = () => {
          store.dispatch(sendMessageAC())
        }

        return (
          <Dialogs
            sendMessage={sendMessage}
            updateNewMessage={onChange}
            dialogsPage={state.dialogsPage}
          />
        )
      }}
    </StoreContext.Consumer>
  )
}

export default DialogsContainer
