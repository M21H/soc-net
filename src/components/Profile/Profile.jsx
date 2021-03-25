import React from 'react'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import style from './Profile.module.css'
import ProfileMenu from './ProfileMenu/ProfileMenu'
import MyPosts from './ProfileMenu/MyPosts/MyPosts'
import { Route } from 'react-router-dom'

const Profile = props => {
  return (
    <div className={style.profile}>
      <ProfileInfo />
      <ProfileMenu />

      <Route
        path='/profile/posts'
        render={() => (
          <MyPosts
            dispatch={props.dispatch}
            posts={props.profilePage.posts}
            newPostText={props.profilePage.newPostText}
          />
        )}
      />
    </div>
  )
}

export default Profile
