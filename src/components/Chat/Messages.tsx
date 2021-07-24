import React from 'react'
import { Message } from '.'


export type ChatMessageType = {
  message: string
  photo: string
  userId: number
  userName: string
}


const Messages: React.FC<{ chatChannel: WebSocket | null }> = ({ chatChannel }) => {
  const [messages, setMessages] = React.useState<ChatMessageType[]>([])

  React.useEffect(() => {
    const messageHandler = (e: MessageEvent) => {
      const newMessages = JSON.parse(e.data)
      setMessages(prevMessages => [...prevMessages, ...newMessages])
    }
    chatChannel?.addEventListener('message', messageHandler)

    return () => {
      chatChannel?.removeEventListener('message', messageHandler)
    }

  }, [chatChannel])

  return (
    <>
      {messages.map((message, index) => <Message key={index} message={message} />)}
    </>
  )
}

export default Messages