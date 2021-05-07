import React from 'react'
import User from './User/User'
import Paginator from '../../common/Paginator/Paginator'

const Users = props => {
	return (
		<div>
			<Paginator
				totalItemsCount={props.totalItemsCount}
				pageSize={props.pageSize}
				currentPage={props.currentPage}
				onPageChanged={props.onPageChanged}
			/>
			{props.users.map(user => (
				<User
					{...user}
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
