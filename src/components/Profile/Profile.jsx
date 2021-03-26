import React from 'react'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import style from './Profile.module.css'
import ProfileMenu from './ProfileMenu/ProfileMenu'
import { Route, Switch } from 'react-router-dom'
import MyPostContainer from './ProfileMenu/MyPosts/MyPostContainer'

const Profile = () => {
  return (
    <div className={style.profile}>
      <ProfileInfo />
      <ProfileMenu />
      <Switch>
        <Route path='/profile/posts' render={() => <MyPostContainer />} />
      </Switch>
    </div>
  )
}

export default Profile
