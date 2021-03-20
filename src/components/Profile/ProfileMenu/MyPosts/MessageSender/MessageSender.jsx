import React from 'react'
import style from './MessageSender.module.css'

const MessageSender = () => {
  return (
    <div className={style.messageSender}>
      <textarea placeholder='write message'></textarea>
      <button>Add post</button>
    </div>
  )
}

export default MessageSender
