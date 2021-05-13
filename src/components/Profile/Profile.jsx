import React from 'react'
import styles from './Profile.module.css'
import AboutProfile from './AboutProfile/AboutProfile'
import PostContainer from './Posts/PostContainer'

const Profile = props => {
	return (
		<div>
			<AboutProfile
				profile={props.profile}
				userStatus={props.userStatus}
				updateUserStatus={props.updateUserStatus}
				savePhoto={props.savePhoto}
				isOwner={props.isOwner}
			/>
			<div className={styles.profile__posts}>
				<PostContainer />
			</div>
		</div>
	)
}

export default Profile
