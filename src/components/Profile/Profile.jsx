import React from 'react'
import AboutProfile from './AboutProfile/AboutProfile'
import ProfileMenu from './ProfileMenu/ProfileMenu'
import { Route, Switch } from 'react-router-dom'
import MyPostContainer from './ProfileMenu/MyPosts/MyPostContainer'

const Profile = ({ profile, userStatus, updateUserStatus, savePhoto, isOwner }) => {
	return (
		<div>
			<AboutProfile
				profile={profile}
				userStatus={userStatus}
				updateUserStatus={updateUserStatus}
				savePhoto={savePhoto}
				isOwner={isOwner}
			/>
			<ProfileMenu />
			<Switch>
				<Route path='/profile/posts' render={() => <MyPostContainer />} />
			</Switch>
		</div>
	)
}

export default Profile
