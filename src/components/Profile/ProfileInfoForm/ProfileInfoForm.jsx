import React from 'react'
import styles from './ProfileInfoForm.module.css'
import InfoIcon from '@material-ui/icons/Info'
import { createField, Input, Textarea } from '../../../common/FormsControls/FormsControls'
import { reduxForm } from 'redux-form'

const ProfileInfoForm = ({ handleSubmit, profile: { contacts }, error }) => {
	return (
		<form onSubmit={handleSubmit}>
			<div className={styles.profileInfo__title}>
				<InfoIcon className={styles.profileInfo__icon} />
				<p className={styles.profileInfo__text}>Profile info</p>
				<button>save</button>
				{error && <div style={{ color: 'red' }}>{error}</div>}
			</div>

			<div className={styles.profileInfo__fullName}>
				<b>Full name: </b>
				{createField('Full name', 'fullName', [], Input)}
			</div>

			<div className={styles.profileInfo__aboutMe}>
				<b>About me:</b>
				{createField('About me', 'aboutMe', [], Textarea)}
			</div>

			<div className={styles.profileInfo__lookingForAJob}>
				<b>Looking for a job:</b>
				{createField('', 'lookingForAJob', [], Input, { type: 'checkbox' })}

				<div>
					<b>My skills: </b>
					{createField('My skills', 'lookingForAJobDescription', [], Textarea)}
				</div>
			</div>

			<div className={styles.profileInfo__contacts}>
				<b>Contacts: </b>
				{Object.keys(contacts).map(key => {
					return (
						<div key={key}>
							<b>
								{key}: {createField(key, 'contacts.' + key, [], Input)}
							</b>
						</div>
					)
				})}
			</div>
		</form>
	)
}

const ProfileInfoFormReduxForm = reduxForm({ form: 'edit-profile' })(ProfileInfoForm)

export default ProfileInfoFormReduxForm
