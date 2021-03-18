import React from 'react'
import style from './ProfileInfo.module.css'

const ProfileInfo = () => {
  return (
    <div className={style.profileInfo}>
      <div className={style.profileInfo__bg}>
        <img
          src='https://olympus.crumina.net/wp-content/uploads/buddypress/members/1/cover-image/5c220b12b44cd-bp-cover-image.jpg'
          alt=''
        />
      </div>
    </div>
  )
}

export default ProfileInfo
