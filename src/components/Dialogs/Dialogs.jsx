import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Textarea } from '../../common/FormsControls/FormsControls'
import { maxLenght, required } from '../../utils/validators/validators'
import style from './Dialogs.module.css'
import DialogsItem from './DialogsItem/DialogsItem'
import MessageItem from './MessageItem.jsx/MessageItem'

const Dialogs = ({ dialogsPage, sendMessage }) => {
  let dialogsItem = dialogsPage.dialogs.map(dialog => (
    <DialogsItem key={dialog.id} {...dialog} />
  ))

  let messageItem = dialogsPage.messages.map(message => (
    <MessageItem key={message.id} {...message} />
  ))

  let addNewMessage = value => {
    sendMessage(value.newMessageText)
  }

  return (
    <div className={style.dialogs}>
      <div>{dialogsItem}</div>

      <div>
        {messageItem}
        <AddMessageForm onSubmit={addNewMessage} />
      </div>
    </div>
  )
}

const maxLenght100 = maxLenght(50)

let AddMessageForm = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <Field
        validate={[required, maxLenght100]}
        component={Textarea}
        name={'newMessageText'}
        placeholder='write message'
      />
      <button>Send</button>
    </form>
  )
}

AddMessageForm = reduxForm({ form: 'dialogAddMessageForm' })(AddMessageForm)

export default Dialogs
