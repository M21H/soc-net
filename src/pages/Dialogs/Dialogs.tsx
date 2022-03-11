import { useDispatch, useSelector } from 'react-redux'
import style from './Dialogs.module.css'
import DialogItem from '../../components/Dialogs/DialogItem'
import MessageItem from '../../components/Dialogs/MessageItem'
import { actions } from '../../redux/dialogs_reducer'
import AddMessageForm from '../../components/Dialogs/AddMessageForm'
import { useAppSelector } from '../../redux/store'

export type NewMessageFormValueType = {
	newMessageText: string
}

const Dialogs = () => {
	const dispatch = useDispatch()
	const { dialogs, messages } = useAppSelector(({ dialogsPage }) => dialogsPage)

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

export default Dialogs
