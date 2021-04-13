import React from 'react'
import { Redirect } from 'react-router'
import style from './Dialogs.module.css'
import DialogsItem from './DialogsItem/DialogsItem'
import MessageItem from './MessageItem.jsx/MessageItem'

const Dialogs = props => {
  let dialogsItem = props.dialogsPage.dialogs.map(d => (
    <DialogsItem name={d.name} id={d.id} key={d.id} />
  ))

  let messageItem = props.dialogsPage.messages.map(m => (
    <MessageItem message={m.message} id={m.id} key={m.id} />
  ))

  let onChange = e => {
    let text = e.target.value
    props.updateNewMessage(text)
  }

  let sendMessage = () => {
    props.sendMessage()
  }

  if (!props.isAuth) return <Redirect to={'/login'} />

  return (
    <div className={style.dialogs}>
      <div>{dialogsItem}</div>

      <div>
        {messageItem}
        <textarea
          placeholder='write message'
          value={props.dialogsPage.newMessageText}
          onChange={onChange}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  )
}

export default Dialogs
