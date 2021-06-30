import { UserType } from './../type/types';
import { ResultCodeEnum } from '../api/api'
import { usersAPI, followAPI } from '../api';
import { BaseThunkType, InferActionsTypes } from './store';
import { Dispatch } from 'redux';


type InitialState = typeof initialState
type ActionsTypes = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsTypes>

const initialState = {
	users: [] as Array<UserType>,
	totalUsersCount: 0,
	pageSize: 10,
	currentPage: 1,
	isFetching: false,
	toggleFollowingInProgress: [] as Array<number>, //array of users id
}

const usersReducer = (state = initialState, action: ActionsTypes): InitialState => {
	switch (action.type) {
		case 'USERS:SET_USERS':
			return {
				...state,
				users: action.users,
			}
		case 'USERS:TOGGLE_FOLLOWING':
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
		case 'USERS:SET_CURRENT_PAGE':
			return {
				...state,
				currentPage: action.currentPage,
			}
		case 'USERS:SET_USERS_COUNT':
			return {
				...state,
				totalUsersCount: action.totalCount,
			}
		case 'USERS:TOGGLE_IS_FETCHING':
			return {
				...state,
				isFetching: action.isFetching,
			}
		case 'USERS:TOGGLE_IS_FOLLOWING_PROGRESS':
			return {
				...state,
				toggleFollowingInProgress: action.isFetching
					? [...state.toggleFollowingInProgress, action.userId]
					: state.toggleFollowingInProgress.filter(id => id !== action.userId),
			}
		default:
			return state
	}
}



export const actions = {
	toggleFollowSuccess: (userId: number) => ({ type: 'USERS:TOGGLE_FOLLOWING', userId, } as const),
	setUsers: (users: Array<UserType>) => ({ type: 'USERS:SET_USERS', users, } as const),
	setCurrentPage: (currentPage: number) => ({ type: 'USERS:SET_CURRENT_PAGE', currentPage, } as const),
	setUsersCount: (totalCount: number) => ({ type: 'USERS:SET_USERS_COUNT', totalCount, } as const),
	toggleIsFetching: (isFetching: boolean) => ({ type: 'USERS:TOGGLE_IS_FETCHING', isFetching, } as const),
	setToggleFollowingInProgress: (isFetching: boolean, userId: number) => ({
		type: 'USERS:TOGGLE_IS_FOLLOWING_PROGRESS',
		isFetching,
		userId,
	} as const),
}

export const getUsers = (currentPage: number, pageSize: number): ThunkType => async dispatch => {
	dispatch(actions.toggleIsFetching(true))
	dispatch(actions.setCurrentPage(currentPage))
	const data = await usersAPI.getUsers(currentPage, pageSize)
	dispatch(actions.toggleIsFetching(false))
	dispatch(actions.setUsers(data.items))
	dispatch(actions.setUsersCount(data.totalCount))
}

const _followUnfollow = async (dispatch: Dispatch<ActionsTypes>, userId: number, apiFollowUnfollow: any) => {
	dispatch(actions.setToggleFollowingInProgress(true, userId))
	const data = await apiFollowUnfollow(userId)
	if (data.resultCode === ResultCodeEnum.Success) {
		dispatch(actions.toggleFollowSuccess(userId))
	}
	dispatch(actions.setToggleFollowingInProgress(false, userId))
}

export const follow = (userId: number): ThunkType => async (dispatch) => {
	_followUnfollow(dispatch, userId, followAPI.follow.bind(followAPI))
}

export const unfollow = (userId: number): ThunkType => async (dispatch) => {
	_followUnfollow(dispatch, userId, followAPI.unfollow.bind(followAPI))
}

export default usersReducer
