import React from 'react'
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

  let newMessageElement = React.createRef()

  let onChange = () => {
    let text = newMessageElement.current.value
    props.updateNewMessage(text)
  }

  let sendMessage = () => {
    props.sendMessage()
  }

  return (
    <div className={style.dialogs}>
      <div>{dialogsItem}</div>

      <div>
        {messageItem}
        <textarea
          ref={newMessageElement}
          value={props.dialogsPage.newMessageText}
          onChange={onChange}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  )
}

export default Dialogs
