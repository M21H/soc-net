import React from 'react'
import { useDispatch } from 'react-redux'
import { sendMessage } from '../../redux/chat_reducer'

const READY = 'READY'
const PENDING = 'PENDING'

const MessageForm: React.FC<{}> = () => {
  const dispatch = useDispatch()
  const [messageValue, setMessageValue] = React.useState('')
  const [status, setStatus] = React.useState<typeof PENDING | typeof READY>(PENDING)

  const sendMessageHandler = () => {
    if (!messageValue.trim()) {
      return alert('write message')
    } else {
      dispatch(sendMessage(messageValue.trim()))
      setMessageValue('')
    }
  }

  return (
    <div>
      <textarea onChange={e => setMessageValue(e.target.value)} value={messageValue} />
      <button onClick={sendMessageHandler} disabled={false}>send</button>
    </div>
  )
}

export default MessageForm