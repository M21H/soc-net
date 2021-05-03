import React from 'react'
import userImg from '../../../assets/img/user.png'
import { Avatar } from '@material-ui/core'
import { NavLink } from 'react-router-dom'

const User = ({
  id,
  photos,
  name,
  status,
  followed,
  followingInProgress,
  unfollow,
  follow,
}) => {
  return (
    <div>
      <NavLink to={`/profile/${id}`}>
        <Avatar src={photos.small != null ? photos.small : userImg} />
      </NavLink>

      <div>{name}</div>
      <div>{status}</div>
      {followed ? (
        <button
          disabled={followingInProgress.some(userId => userId === id)}
          onClick={() => unfollow(id)}
        >
          Unfollow
        </button>
      ) : (
        <button
          disabled={followingInProgress.some(userId => userId === id)}
          onClick={() => follow(id)}
        >
          Follow
        </button>
      )}
    </div>
  )
}

export default User
