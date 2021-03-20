import React from 'react'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import style from './Profile.module.css'
import ProfileMenu from './ProfileMenu/ProfileMenu'
import MyPosts from './ProfileMenu/MyPosts/MyPosts'
import { Route, Switch } from 'react-router-dom'

const Profile = () => {
  return (
    <div className={style.profile}>
      <ProfileInfo />
      <ProfileMenu />
      <Switch>
        <Route path='/profile/posts' component={MyPosts} />
      </Switch>
    </div>
  )
}

export default Profile
