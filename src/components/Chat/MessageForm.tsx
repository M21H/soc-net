import React from 'react'

const READY = 'READY'
const PENDING = 'PENDING'

const MessageForm: React.FC<{ chatChannel: WebSocket | null }> = ({ chatChannel }) => {
  const [messageValue, setMessageValue] = React.useState('')
  const [status, setStatus] = React.useState<typeof PENDING | typeof READY>(PENDING)

  React.useEffect(() => {
    const openHandler = () => {
      setStatus(READY)
    }
    chatChannel?.addEventListener('open', openHandler)

    return () => {
      chatChannel?.removeEventListener('open', () => openHandler)
    }
  }, [chatChannel])

  const sendMessage = () => {
    if (!messageValue.trim()) {
      return alert('write message')
    } else {
      chatChannel?.send(messageValue.trim())
      setMessageValue('')
    }
  }

  return (
    <div>
      <textarea onChange={e => setMessageValue(e.target.value)} value={messageValue} />
      <button onClick={sendMessage} disabled={chatChannel === null || status === PENDING}>send</button>
    </div>
  )
}

export default MessageForm