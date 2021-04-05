import React from 'react'
import style from './User.module.css'
import userImg from '../../../assets/img/user.png'
import { Avatar } from '@material-ui/core'
import { NavLink } from 'react-router-dom'

const User = props => {
  return (
    <div className={style.user}>
      <NavLink to={/profile/ + props.id}>
        <Avatar
          src={props.photos.small != null ? props.photos.small : userImg}
        />
      </NavLink>

      <div>{props.name}</div>
      <div>{props.status}</div>
      {props.followed ? (
        <button onClick={() => props.unfollow(props.id)}>Unfollow</button>
      ) : (
        <button onClick={() => props.follow(props.id)}>Follow</button>
      )}
    </div>
  )
}

export default User
