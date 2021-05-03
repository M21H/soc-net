import React from 'react'
import User from './User/User'
import Paginator from '../../common/Paginator/Paginator'

const Users = props => {
  return (
    <div>
      <Paginator
        usersCount={props.usersCount}
        pageSize={props.pageSize}
        currentPage={props.currentPage}
        onPageChange={props.onPageChange}
      />
      {props.users.map(user => (
        <User
          {...user}
          id={user.id}
          key={user.id}
          follow={props.follow}
          unfollow={props.unfollow}
          followingInProgress={props.followingInProgress}
        />
      ))}
    </div>
  )
}

export default Users
