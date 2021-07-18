import { AppStateType } from '../store'

export const getAllUsers = (state: AppStateType) => {
	return state.usersPage.users
}

export const getTotalUsersCount = (state: AppStateType) => {
	return state.usersPage.totalUsersCount
}

export const getPageSize = (state: AppStateType) => {
	return state.usersPage.pageSize
}

export const getCurrentPage = (state: AppStateType) => {
	return state.usersPage.currentPage
}

export const getIsFetching = (state: AppStateType) => {
	return state.usersPage.isFetching
}

export const getToggleFollowingInProgress = (state: AppStateType) => {
	return state.usersPage.toggleFollowingInProgress
}

export const getUsersFilter = (state: AppStateType) => {
	return state.usersPage.filter
}
