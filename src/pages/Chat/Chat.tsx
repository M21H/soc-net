import React from 'react'
import { MessageForm, Messages } from '../../components/Chat'

const Chat: React.FC = () => {
  const [chatChannel, setChatChannel] = React.useState<WebSocket | null>(null)

  React.useEffect(() => {
    let ws: WebSocket
    const closeHandler = () => {
      console.log('CLOSE WS')
      setTimeout(createChatChannel, 3000)
    }
    const createChatChannel = () => {
      ws?.removeEventListener('close', closeHandler)
      ws?.close()

      ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
      ws?.addEventListener('close', closeHandler)
      setChatChannel(ws)
    }
    createChatChannel()

    return () => {
      ws.removeEventListener('close', closeHandler)
      ws.close()
    }
  }, [])

  return (
    <div>
      <MessageForm chatChannel={chatChannel} />
      <Messages chatChannel={chatChannel} />
    </div>
  )
}

export default Chat
