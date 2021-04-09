import React from 'react'
import style from './Users.module.css'
import User from './User/User'

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
        <User
          {...u}
          id={u.id}
          key={u.id}
          follow={props.follow}
          unfollow={props.unfollow}

          followingInProgress={props.followingInProgress}
          setFollowingInProgress={props.setFollowingInProgress}
        />
      ))}
    </div>
  )
}

export default Users
