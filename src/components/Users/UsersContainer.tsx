import { connect } from 'react-redux'
import { follow, unfollow, getUsers, FilterType } from '../../redux/users_reducer'
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
	getUsersFilter,
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
	filter: FilterType
}

type MapDispatchPropsType = {
	follow: (userId: number) => void
	unfollow: (userId: number) => void
	getUsers: (currentPage: number, pageSize: number, filter: FilterType) => void
}

class UsersContainer extends React.Component<MapStatePropsType & MapDispatchPropsType> {
	componentDidMount() {
		const { currentPage, pageSize, filter } = this.props
		this.props.getUsers(currentPage, pageSize, filter)
	}

	onPageChanged = (pageNumber: number) => {
		const { pageSize, filter } = this.props
		this.props.getUsers(pageNumber, pageSize, filter)
	}

	onFilterChanged = (filter: FilterType) => {
		const { pageSize } = this.props
		this.props.getUsers(1, pageSize, filter)
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
						onFilterChanged={this.onFilterChanged}
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
		filter: getUsersFilter(state)
	}
}

export default compose(
	connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, {
		follow,
		unfollow,
		getUsers,
	})
)(UsersContainer)
