import React from 'react'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import style from './Profile.module.css'

const Profile = () => {
  return (
    <div className={style.profile}>
      <ProfileInfo />
      <div className={style.profile__menu}>
        {/* <ProfileMenuRow /> */}
      </div>
    </div>
  )
}

export default Profile
