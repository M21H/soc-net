import React from 'react'
import User from './User/User'
import Paginator from '../../common/Paginator/Paginator'
import { UserType } from '../../type/types'

type PropsType = {
	totalUsersCount: number
	pageSize: number
	currentPage: number
	users: Array<UserType>
	toggleFollowingInProgress: Array<number>
	onPageChanged: (pageNumber: number) => void
	follow: (userId: number) => void
	unfollow: (userId: number) => void
}

const Users: React.FC<PropsType> = (props) => {
	return (
		<div>
			<Paginator
				totalItemsCount={props.totalUsersCount}
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
					toggleFollowingInProgress={props.toggleFollowingInProgress}
				/>
			))}
		</div>
	)
}

export default Users
