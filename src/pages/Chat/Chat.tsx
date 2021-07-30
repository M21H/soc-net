import React from 'react'
import { useDispatch } from 'react-redux'
import { MessageForm, Messages } from '../../components/Chat'
import { startMessagesListening, stopMessagesListening } from '../../redux/chat_reducer'

const Chat: React.FC = () => {

  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(startMessagesListening())
    return () => {
      dispatch(stopMessagesListening())
    }
  }, [])

  return (
    <div>
      <MessageForm />
      <Messages />
    </div>
  )
}

export default Chat
