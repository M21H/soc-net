import React from 'react'
import AboutProfile from './AboutProfile/AboutProfile'
import ProfileMenu from './ProfileMenu/ProfileMenu'
import { Route, Switch } from 'react-router-dom'
import PostContainer from './ProfileMenu/Posts/PostContainer'

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
				<Route path='/profile/posts' render={() => <PostContainer />} />
			</Switch>
		</div>
	)
}

export default Profile
