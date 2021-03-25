import React from 'react'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import style from './Profile.module.css'
import ProfileMenu from './ProfileMenu/ProfileMenu'
import { Route } from 'react-router-dom'
import MyPostContainer from './ProfileMenu/MyPosts/MyPostContainer'

const Profile = props => {
  return (
    <div className={style.profile}>
      <ProfileInfo />
      <ProfileMenu />

      <Route
        path='/profile/posts'
        render={() => <MyPostContainer store={props.store} />}
      />
    </div>
  )
}

export default Profile
