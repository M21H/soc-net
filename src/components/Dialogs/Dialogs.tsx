import style from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import MessageItem from './MessageItem.jsx/MessageItem'
import { actions } from '../../redux/dialogs_reducer'
import { useDispatch, useSelector } from 'react-redux'
import { AppStateType } from '../../redux/store'
import AddMessageForm from './AddMessageForm'

const Dialogs = () => {
	const dispatch = useDispatch()
	const { dialogs, messages } = useSelector(({ dialogsPage }: AppStateType) => dialogsPage)

	const onSendMessage = (value: NewMessageFormValueType) => {
		dispatch(actions.sendMessage(value.newMessageText))
	}

	return (
		<div className={style.dialogs}>
			<div>
				{dialogs.map(dialog => (
					<DialogItem key={dialog.id} {...dialog} />
				))}
			</div>

			<div>
				{messages.map(message => (
					<MessageItem key={message.id} {...message} />
				))}
				<AddMessageForm onSubmit={onSendMessage} />
			</div>
		</div>
	)
}

export type NewMessageFormValueType = {
	newMessageText: string
}


export default Dialogs

