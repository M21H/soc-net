import React from 'react'
import InfoIcon from '@material-ui/icons/Info'
import styles from './ProfileInfo.module.css'

export const ProfileInfo = ({
	profile: { fullName, aboutMe, lookingForAJob, lookingForAJobDescription, contacts },
	isOwner,
	goToEditMode,
}) => {
	return (
		<div className={styles.profileInfo}>
			<div className={styles.profileInfo__title}>
				<InfoIcon className={styles.profileInfo__icon} />
				<p className={styles.profileInfo__text}>Profile info</p>
				{isOwner && <button onClick={goToEditMode}>edit</button>}
			</div>

			<div className={styles.profileInfo__fullName}>
				<b>Full name: </b>
				{fullName}
			</div>

			<div className={styles.profileInfo__aboutMe}>
				<b>About me:</b> {aboutMe || <em>nothing</em>}
			</div>

			<div className={styles.profileInfo__lookingForAJob}>
				<b>Looking for a job:</b> {lookingForAJob ? 'yes' : 'no'}
				{lookingForAJob && (
					<div>
						<b>My skills: </b> {lookingForAJobDescription}
					</div>
				)}
			</div>

			<div className={styles.profileInfo__contacts}>
				<b>Contacts: </b>
				{Object.keys(contacts).map(key => {
					return <Contact key={key} title={key} value={contacts[key]} />
				})}
			</div>
		</div>
	)
}

const Contact = ({ title, value }) => {
	return (
		<p style={{ marginLeft: '20px' }}>
			<b>{title}</b>: {value || <em>nothing</em>}
		</p>
	)
}
