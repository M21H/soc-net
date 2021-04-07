import React from 'react'
import style from './User.module.css'
import userImg from '../../../assets/img/user.png'
import { Avatar } from '@material-ui/core'
import { NavLink } from 'react-router-dom'
import * as axios from 'axios'

const User = props => {
  return (
    <div className={style.user}>
      <NavLink to={'/profile/' + props.id}>
        <Avatar
          src={props.photos.small != null ? props.photos.small : userImg}
        />
      </NavLink>

      <div>{props.name}</div>
      <div>{props.status}</div>
      {props.followed ? (
        <button
          onClick={() => {
            axios
              .delete(
                `https://social-network.samuraijs.com/api/1.0/follow/${props.id}`,
                {
                  withCredentials: true,
                  headers: {
                    'API-KEY': 'fee6b2e0-2989-4355-870e-200f63c1eef4',
                  },
                }
              )
              .then(response => {
                if (response.data.resultCode === 0) {
                  props.unfollow(props.id)
                }
              })
          }}
        >
          Unfollow
        </button>
      ) : (
        <button
          onClick={() => {
            axios
              .post(
                `https://social-network.samuraijs.com/api/1.0/follow/${props.id}`,
                {},
                {
                  withCredentials: true,
                  headers: {
                    'API-KEY': 'fee6b2e0-2989-4355-870e-200f63c1eef4',
                  },
                }
              )
              .then(response => {
                if (response.data.resultCode === 0) {
                  props.follow(props.id)
                }
              })
          }}
        >
          Follow
        </button>
      )}
    </div>
  )
}

export default User
