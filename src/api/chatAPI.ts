//@ts-nocheck

type SubscriberType = (messages: ChatMessageType[]) => void

export type ChatMessageType = {
  message: string
  photo: string
  userId: number
  userName: string
}

let subscribers = [] as ChatMessageType[]

let ws: WebSocket | null = null

const closeHandler = () => {
  console.log('CLOSE WS')
  setTimeout(createChatChannel, 3000)
}

const messageHandler = (e: MessageEvent) => {
  const newMessages = JSON.parse(e.data)
  subscribers.forEach(sub => sub(newMessages))
}

const createChatChannel = () => {
  ws?.removeEventListener('close', closeHandler)
  ws?.close()
  ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
  ws?.addEventListener('close', closeHandler)
  ws?.addEventListener('message', messageHandler)
}

export const chatAPI = {
  start() {
    createChatChannel()
  },
  stop() {
    subscribers = []
    ws?.removeEventListener('close', closeHandler)
    ws?.removeEventListener('message', messageHandler)
    ws?.close()
  },
  subscribe(callback: SubscriberType) {
    subscribers.push(callback)
    return () => {
      subscribers = subscribers.filter(sub => sub !== callback)
    }
  },
  unsubscribe(callback: SubscriberType) {
    subscribers = subscribers.filter(sub => sub !== callback)
  },
  sendMessage(message: string) {
    ws?.send(message)
  }
}