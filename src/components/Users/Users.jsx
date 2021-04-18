import React from 'react'
import style from './Users.module.css'
import User from './User/User'

const Users = ({
  usersCount,
  pageSize,
  currentPage,
  onPageChange,
  users,
  ...props
}) => {
  
  const pagesCount = Math.ceil(usersCount / pageSize)
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
            className={currentPage === p ? style.active : null}
            onClick={() => onPageChange(p)}
          >
            {`${p} `}
          </span>
        ))}
      </div>
      {users.map(u => (
        <User
          {...u}
          id={u.id}
          key={u.id}
          follow={props.follow}
          unfollow={props.unfollow}
          followingInProgress={props.followingInProgress}
        />
      ))}
    </div>
  )
}

export default Users
