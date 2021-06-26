import { connect } from 'react-redux'
import { follow, unfollow, getUsers } from '../../redux/users_reducer'
import React from 'react'
import Users from './Users'
import Preloader from '../../common/Preloader/Preloader'
import { compose } from 'redux'
import {
	getCurrentPage,
	getIsFetching,
	getPageSize,
	getAllUsers,
	getToggleFollowingInProgress,
	getTotalUsersCount,
} from '../../redux/reselectors/usersReselectors'
import { UserType } from '../../type/types'
import { AppStateType } from '../../redux/store'


type MapStatePropsType = {
	currentPage: number
	pageSize: number
	isFetching: boolean
	users: Array<UserType>
	totalUsersCount: number
	toggleFollowingInProgress: Array<number>
}

type MapDispatchPropsType = {
	follow: (userId: number) => void
	unfollow: (userId: number) => void
	getUsers: (currentPage: number, pageSize: number) => void
}

class UsersContainer extends React.Component<MapStatePropsType & MapDispatchPropsType> {
	componentDidMount() {
		this.props.getUsers(this.props.currentPage, this.props.pageSize)
	}

	onPageChanged = (pageNumber: number) => {
		this.props.getUsers(pageNumber, this.props.pageSize)
	}

	render() {
		return (
			<>
				{this.props.isFetching ? (
					<Preloader />
				) : (
					<Users
						users={this.props.users}
						totalUsersCount={this.props.totalUsersCount}
						pageSize={this.props.pageSize}
						follow={this.props.follow}
						unfollow={this.props.unfollow}
						currentPage={this.props.currentPage}
						onPageChanged={this.onPageChanged}
						toggleFollowingInProgress={this.props.toggleFollowingInProgress}
					/>
				)}
			</>
		)
	}
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
	return {
		users: getAllUsers(state),
		totalUsersCount: getTotalUsersCount(state),
		pageSize: getPageSize(state),
		currentPage: getCurrentPage(state),
		isFetching: getIsFetching(state),
		toggleFollowingInProgress: getToggleFollowingInProgress(state),
	}
}

export default compose(
	connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, {
		follow,
		unfollow,
		getUsers,
	})
)(UsersContainer)
