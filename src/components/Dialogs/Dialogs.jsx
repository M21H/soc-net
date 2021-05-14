import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Textarea } from '../../common/FormsControls/FormsControls'
import { maxLenght, required } from '../../utils/validators/validators'
import style from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import MessageItem from './MessageItem.jsx/MessageItem'

const Dialogs = ({ dialogsPage, sendMessage }) => {
	return (
		<div className={style.dialogs}>
			<div>
				{dialogsPage.dialogs.map(dialog => (
					<DialogItem key={dialog.id} {...dialog} />
				))}
			</div>

			<div>
				{dialogsPage.messages.map(message => (
					<MessageItem key={message.id} {...message} />
				))}
				<AddMessageForm onSubmit={value => sendMessage(value.newMessageText)} />
			</div>
		</div>
	)
}

const maxLenght100 = maxLenght(50)

let AddMessageForm = ({ handleSubmit }) => {
	return (
		<form onSubmit={handleSubmit}>
			<Field
				validate={[required, maxLenght100]}
				component={Textarea}
				name={'newMessageText'}
				placeholder='write message'
			/>
			<button>Send</button>
		</form>
	)
}

AddMessageForm = reduxForm({ form: 'dialogAddMessageForm' })(AddMessageForm)

export default Dialogs
