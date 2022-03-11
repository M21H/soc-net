import { Avatar } from '@material-ui/core'
import React from 'react'
import { ChatMessageType } from '../../APIServices/chatAPI'

const Message: React.FC<{ message: ChatMessageType }> = ({ message }) => {
  return (
    <div>
      <div>
        <Avatar src={message.photo} />
        <i>{message.userName}</i>
      </div>
      <span>
        {message.message}
      </span>
      <hr />
    </div>
  )
}

export default Message