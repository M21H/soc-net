import React from 'react'
import { Message } from '.'
import { useAppSelector } from '../../redux/store'

const Messages: React.FC<{}> = () => {
	const { messages } = useAppSelector(({ chat }) => chat)
	return (
		<>
			{messages.map((message, index) => (
				<Message key={index} message={message} />
			))}
		</>
	)
}

export default Messages
