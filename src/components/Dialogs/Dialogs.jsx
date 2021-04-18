import React from 'react'
import { Field, reduxForm } from 'redux-form'
import style from './Dialogs.module.css'
import DialogsItem from './DialogsItem/DialogsItem'
import MessageItem from './MessageItem.jsx/MessageItem'

const Dialogs = ({ dialogsPage, updateNewMessage, sendMessage }) => {
  let dialogsItem = dialogsPage.dialogs.map(d => (
    <DialogsItem name={d.name} id={d.id} key={d.id} />
  ))

  let messageItem = dialogsPage.messages.map(m => (
    <MessageItem message={m.message} id={m.id} key={m.id} />
  ))

  let addNewMessage = value => {
    // alert(value.newMessageText)
    // console.log(value.newMessageText)
    sendMessage(value.newMessageText)
  }

  return (
    <div className={style.dialogs}>
      <div>{dialogsItem}</div>

      <div>
        {messageItem}
        <AddMessageFormRedux onSubmit={addNewMessage} />
      </div>
    </div>
  )
}

const AddMessageForm = ({ hendleSubmit }) => {
  return (
    <form onSubmit={hendleSubmit}>
      <Field
        component={'textarea'}
        name={'newMessageText'}
        placeholder='write message'
      />
      <button>Send</button>
    </form>
  )
}

const AddMessageFormRedux = reduxForm({ form: 'dialogAddMessageForm' })(
  AddMessageForm
)

export default Dialogs
