import { RootState } from '../store'


export const getAllUsers = (state: RootState) => {
	return state.usersPage.users
}

export const getTotalUsersCount = (state: RootState) => {
	return state.usersPage.totalUsersCount
}

export const getPageSize = (state: RootState) => {
	return state.usersPage.pageSize
}

export const getCurrentPage = (state: RootState) => {
	return state.usersPage.currentPage
}

export const getIsFetching = (state: RootState) => {
	return state.usersPage.isFetching
}

export const getToggleFollowingInProgress = (state: RootState) => {
	return state.usersPage.toggleFollowingInProgress
}

export const getUsersFilter = (state: RootState) => {
	return state.usersPage.filter
}
