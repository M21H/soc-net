import { InjectedFormProps, reduxForm } from 'redux-form'
import { createField, Textarea } from '../../common/FormsControls/FormsControls'
import { maxLength, required } from '../../utils/validators/validators'
import { NewMessageFormValueType } from '../../pages/Dialogs'

const maxLength100 = maxLength(50)

type NewMessageFormValueKeysType = Extract<keyof NewMessageFormValueType, string>

type PropsType = {}

const AddMessageForm: React.FC<InjectedFormProps<NewMessageFormValueType, PropsType> & PropsType> = ({
	handleSubmit,
}) => {
	return (
		<form onSubmit={handleSubmit}>
			{createField<NewMessageFormValueKeysType>('Write message', 'newMessageText', [required, maxLength100], Textarea, {
				type: 'password',
			})}
			<button>Send</button>
		</form>
	)
}

export default reduxForm<NewMessageFormValueType>({ form: 'dialogAddMessageForm' })(AddMessageForm)
