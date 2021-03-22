import React from 'react'
import style from './Dialogs.module.css'
import DialogsItem from './DialogsItem/DialogsItem'
import MessageItem from './MessageItem.jsx/MessageItem'

const Dialogs = (props) => {
  // debugger
  let dialogsItem = props.dialogsPage.dialogs.map(d => (
    <DialogsItem name={d.name} id={d.id} />
    //add avatar to each person
  ))
  let messageItem = props.dialogsPage.messages.map(m => (
    <MessageItem message={m.message} id={m.id} />
  ))

  return (
    <div className={style.dialogs}>
      <div>{dialogsItem}</div>

      <div>{messageItem}</div>
    </div>
  )
}

export default Dialogs
