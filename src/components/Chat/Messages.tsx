import React from 'react'
import { useSelector } from 'react-redux'
import { Message } from '.'
import { AppStateType } from '../../redux/store'

const Messages: React.FC<{}> = () => {
  const { messages } = useSelector(({ chat }: AppStateType) => chat)
  return (
    <>
      {messages.map((message, index) => <Message key={index} message={message} />)}
    </>
  )
}

export default Messages