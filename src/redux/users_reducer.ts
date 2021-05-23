import { UserType } from './../type/types';
import { followAPI, usersAPI } from '../api/api'

const TOGGLE_FOLLOWING = 'soc-net/users/TOGGLE_FOLLOWING'
const SET_USERS = 'soc-net/users/SET_USERS'
const SET_CURRENT_PAGE = 'soc-net/users/SET_CURRENT_PAGE'
const SET_USERS_COUNT = 'soc-net/users/SET_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'soc-net/users/TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'soc-net/users/TOGGLE_IS_FOLLOWING_PROGRESS'


type InitialState = typeof initialState

const initialState = {
	users: [] as Array<UserType>,
	totalItemsCount: 0,
	pageSize: 10,
	currentPage: 1,
	isFetching: false,
	followingInProgress: [] as Array<number>, //array of users id
}

const usersReducer = (state = initialState, action: any): InitialState => {
	switch (action.type) {
		case SET_USERS:
			return {
				...state,
				users: action.users,
			}
		case TOGGLE_FOLLOWING:
			return {
				...state,
				users: state.users.map(user => {
					if (user.id === action.userId) {
						if (user.followed === false) {
							return { ...user, followed: true }
						} else if (user.followed === true) {
							return { ...user, followed: false }
						}
					}
					return user
				}),
			}
		case SET_CURRENT_PAGE:
			return {
				...state,
				currentPage: action.currentPage,
			}
		case SET_USERS_COUNT:
			return {
				...state,
				totalItemsCount: action.totalCount,
			}
		case TOGGLE_IS_FETCHING:
			return {
				...state,
				isFetching: action.isFetching,
			}
		case TOGGLE_IS_FOLLOWING_PROGRESS:
			return {
				...state,
				followingInProgress: action.followingInProgress
					? [...state.followingInProgress, action.userId]
					: state.followingInProgress.filter(id => id !== action.userId),
			}
		default:
			return state
	}
}


type ToggleFollowSuccessType = {
	type: typeof TOGGLE_FOLLOWING
	userId: number
}
const toggleFollowSuccess = (userId: number): ToggleFollowSuccessType => ({
	type: TOGGLE_FOLLOWING,
	userId,
})


type SetUsersType = {
	type: typeof SET_USERS
	users: Array<UserType>
}
const setUsers = (users: Array<UserType>): SetUsersType => ({
	type: SET_USERS,
	users,
})


type SetCurrentPageType = {
	type: typeof SET_CURRENT_PAGE
	currentPage: number
}
const setCurrentPage = (currentPage: number): SetCurrentPageType => ({
	type: SET_CURRENT_PAGE,
	currentPage,
})


type SetUsersCountType = {
	type: typeof SET_USERS_COUNT
	totalCount: number
}
const setUsersCount = (totalCount: number): SetUsersCountType => ({
	type: SET_USERS_COUNT,
	totalCount,
})


type ToggleIsFetchingType = {
	type: typeof TOGGLE_IS_FETCHING
	isFetching: boolean
}
const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingType => ({
	type: TOGGLE_IS_FETCHING,
	isFetching,
})


type SetFollowingInProgressType = {
	type: typeof TOGGLE_IS_FOLLOWING_PROGRESS
	isFetching: boolean
	userId: number
}
const setFollowingInProgress = (isFetching: boolean, userId: number): SetFollowingInProgressType => ({
	type: TOGGLE_IS_FOLLOWING_PROGRESS,
	isFetching,
	userId,
})


export const requestUsers = (currentPage: number, pageSize: number) => async (dispatch: any) => {
	dispatch(toggleIsFetching(true))
	dispatch(setCurrentPage(currentPage))
	const data = await usersAPI.getUsers(currentPage, pageSize)
	dispatch(toggleIsFetching(false))
	dispatch(setUsers(data.items))
	dispatch(setUsersCount(data.totalCount))
}

const followUnfollow = async (dispatch: any, userId: number, apiMethod: any) => {
	dispatch(setFollowingInProgress(true, userId))
	const response = await apiMethod(userId)
	if (response.data.resultCode === 0) {
		dispatch(toggleFollowSuccess(userId))
	}
	dispatch(setFollowingInProgress(false, userId))
}

export const follow = (userId: number) => async (dispatch: any) => {
	followUnfollow(dispatch, userId, followAPI.follow.bind(followAPI))
}

export const unfollow = (userId: number) => async (dispatch: any) => {
	followUnfollow(dispatch, userId, followAPI.unfollow.bind(followAPI))
}

export default usersReducer
