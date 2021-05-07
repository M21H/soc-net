import React from 'react'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import ProfileMenu from './ProfileMenu/ProfileMenu'
import { Route, Switch } from 'react-router-dom'
import MyPostContainer from './ProfileMenu/MyPosts/MyPostContainer'

const Profile = ({ profile, userStatus, updateUserStatus }) => {
	return (
		<div>
			<ProfileInfo profile={profile} userStatus={userStatus} updateUserStatus={updateUserStatus} />
			<ProfileMenu />
			<Switch>
				<Route path='/profile/posts' render={() => <MyPostContainer />} />
			</Switch>
		</div>
	)
}

export default Profile
