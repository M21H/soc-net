// import React from 'react'
// import styles from './ProfileInfoForm.module.css'

// export const ProfileInfoForm = ({ profile }) => {
// 	return (
// 		<form>
// 			<div className={styles.profileInfo__title}>
// 				<InfoIcon className={styles.profileInfo__icon} />
// 				<p className={styles.profileInfo__text}>Profile info</p>
// 				{isOwner && <button onClick={goToEditMode}>save</button>}
// 			</div>

// 			<div className={styles.profileInfo__aboutMe}>
// 				<b>About me:</b> {profile.aboutMe ? profile.aboutMe : <em>nothing</em>}
// 			</div>

// 			<div className={styles.profileInfo__lookingForAJob}>
// 				<b>Looking for a job:</b> {profile.lookingForAJob ? 'yes' : 'no'}
// 				{profile.lookingForAJob && (
// 					<div>
// 						<b>My skills: </b> {profile.lookingForAJobDescription}
// 					</div>
// 				)}
// 			</div>

// 			<div className={styles.profileInfo__contacts}>
// 				<b>Contacts: </b>
// 				{Object.keys(profile.contacts).map(key => {
// 					return <Contact key={key} title={key} value={profile.contacts[key]} />
// 				})}
// 			</div>
// 		</form>
// 	)
// }
