import React from 'react'
import styles from './Profile.module.css'
import PostContainer from './Posts/PostContainer'
import Status from './Status/Status'
import { Avatar, Button, IconButton } from '@material-ui/core'
import Preloader from '../../common/Preloader/Preloader'

export const Profile = ({ profile, userStatus, updateUserStatus, isOwner, savePhoto }) => {
	if (!profile) {
		return <Preloader />
	}

	const onMainPhotoSelected = e => {
		if (e.target.files.length) {
			savePhoto(e.target.files[0])
		}
	}

	return (
		<>
			<div className={styles.profile}>
				<div className={styles.profile__overlay} />
				<div className={styles.profile__container}>
					<div className={styles.profile__about}>
						<div>
							<IconButton>
								<Avatar className={styles.profile__avatar} src={profile.photos.large} />
								{/* <div>{isOwner && <input type='file' onChange={onMainPhotoSelected} />}</div> */}
							</IconButton>
						</div>

						<div className={styles.profile__fullname}>
							<p>{profile.fullName}</p>
							<Status userStatus={userStatus} updateUserStatus={updateUserStatus} />
						</div>
					</div>
				</div>
			</div>

			<ProfileInfo />
			<PostContainer />
		</>
	)
}

const ProfileInfo = () => {
	return <div>profile info</div>
}
