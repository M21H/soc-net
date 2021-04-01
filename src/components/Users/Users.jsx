import React from 'react'
import style from './Users.module.css'
import userImg from '../../assets/img/user.png'
import { Avatar } from '@material-ui/core'

const Users = props => {
  const pagesCount = Math.ceil(props.usersCount / props.pageSize)
  const pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  return (
    <div className={style.users}>
      <div>
        {pages.map((p, index) => (
          <span
            key={`${p}_${index}`}
            className={props.currentPage === p ? style.active : null}
            onClick={() => props.onPageChange(p)}
          >
            {`${p} `}
          </span>
        ))}
      </div>
      {props.users.map(u => (
        //---------------create User component--------------
        <div key={u.id}>
          <Avatar src={u.photos.small != null ? u.photos.small : userImg} />
          <div>{u.name}</div>
          <div>{u.status}</div>
          {u.followed ? (
            <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
          ) : (
            <button onClick={() => props.follow(u.id)}>Follow</button>
          )}
        </div>
        //------------------ User component------------------
      ))}
    </div>
  )
}

export default Users
