import React from 'react'
import styles from './Profile.module.css'
import PostContainer from './Posts/PostContainer'
import Status from './Status/Status'
import { Avatar } from '@material-ui/core'
import Preloader from '../../common/Preloader/Preloader'
import { ProfileInfo } from './ProfileInfo/ProfileInfo'
import ProfileInfoFormReduxForm from './ProfileInfoForm/ProfileInfoForm'

export const Profile = ({
	profile,
	userStatus,
	updateUserStatus,
	isOwner,
	savePhoto,
	saveProfile,
}) => {
	const [editMode, setEditMode] = React.useState(false)

	if (!profile) {
		return <Preloader />
	}

	const onMainPhotoSelected = e => {
		if (e.target.files.length) {
			savePhoto(e.target.files[0])
		}
	}

	const onSubmit = formData => {
		saveProfile(formData).then(() => setEditMode(false)) //чекаєм поки санка зарезолвиться успішно => виходим з режиму едітмод
	}

	return (
		<>
			<div className={styles.profile}>
				<div className={styles.profile__overlay} />
				<div className={styles.profile__container}>
					<div className={styles.profile__about}>
						<div>
							<Avatar
								className={styles.profile__avatar}
								style={{ border: '3px solid white', width: '150px', height: '150px' }}
								src={profile.photos.large}
							/>
							<div>{isOwner && <input type='file' onChange={onMainPhotoSelected} />}</div>
						</div>

						<div className={styles.profile__fullname}>
							<p>{profile.fullName}</p>
							<Status userStatus={userStatus} updateUserStatus={updateUserStatus} />
						</div>
					</div>
				</div>
			</div>

			<div className={styles.profileData}>
				<div className={styles.profileData__container}>
					{editMode ? (
						<ProfileInfoFormReduxForm
							initialValues={profile}
							profile={profile}
							onSubmit={onSubmit}
						/>
					) : (
						<ProfileInfo
							profile={profile}
							isOwner={isOwner}
							goToEditMode={() => setEditMode(true)}
						/>
					)}
					<PostContainer />
				</div>
			</div>
		</>
	)
}
