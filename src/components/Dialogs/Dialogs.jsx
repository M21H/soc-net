import React from 'react'
import { sendMessageAC, updateNewMessageAC } from '../../redux/state'
import style from './Dialogs.module.css'
import DialogsItem from './DialogsItem/DialogsItem'
import MessageItem from './MessageItem.jsx/MessageItem'

const Dialogs = props => {
  let dialogsItem = props.dialogs.map(d => (
    <DialogsItem name={d.name} id={d.id} key={d.id} />
  ))

  let messageItem = props.messages.map(m => (
    <MessageItem message={m.message} id={m.id} key={m.id} />
  ))

  let newMessageElement = React.createRef()

  let onChange = (e) => {
    let text = newMessageElement.current.value
    // let text = e.target.value
    props.dispatch(updateNewMessageAC(text))
  }

  let sendMessage = () => {
    props.dispatch(sendMessageAC())
  }

  return (
    <div className={style.dialogs}>
      <div>{dialogsItem}</div>

      <div>
        {messageItem}
        <textarea
          ref={newMessageElement}
          value={props.newMessageText}
          onChange={onChange}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  )
}

export default Dialogs
