import { Avatar } from '@material-ui/core'
import React from 'react'
import Preloader from '../../../common/Preloader/Preloader'
import style from './ProfileInfo.module.css'
import ProfileStatusWithHooks from './ProfileStatus/ProfileStatusWithHooks'

const ProfileInfo = ({ profile, userStatus, updateUserStatus }) => {
  if (!profile) {
    return <Preloader />
  }
  return (
    <div className={style.profileInfo}>
      <div className={style.container}>
        <div className={style.profileInfo__about}>
          <div className={style.profileInfo__avatar}>
            <Avatar
              src={profile.photos.large} //
              className={style.profileInfo__photos}
              style={{ width: '150px', height: '150px' }}
            />
          </div>

          <div className={style.profileInfo__fullname}>
            <p>{profile.fullName}</p>
            <ProfileStatusWithHooks
              userStatus={userStatus} 
              updateUserStatus={updateUserStatus}
            />
          </div>
        </div>
      </div>

      {/* <div style={{color: 'white'}}>
          <div className={style.profileInfo__aboutMe}>
            {props.profile.aboutMe}
          </div>
          <div className={style.profileInfo__contacts}>
            {props.profile.contacts.facebook}
            {props.profile.contacts.website}
            {props.profile.contacts.vk}
            {props.profile.contacts.twitter}
            {props.profile.contacts.instagram}
            {props.profile.contacts.youtube}
            {props.profile.contacts.github}
            {props.profile.contacts.mainLink}
          </div>
          <div className={style.profileInfo__lookingForAJob}>
            {props.profile.lookingForAJob}
          </div>
          <div className={style.profileInfo__lookingForAJobDescription}>
            {props.profile.lookingForAJobDescription}
          </div>
          <div className={style.profileInfo__fullName}>
            {props.profile.fullName}
          </div>
        </div> */}
    </div>
  )
}

export default ProfileInfo
