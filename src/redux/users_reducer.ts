import { UserType } from './../type/types';
import { followAPI, ResultCodeEnum, usersAPI } from '../api/api'
import { AppStateType, InferActionsTypes } from './store';
import { ThunkAction } from 'redux-thunk';
import { Dispatch } from 'redux';

// const TOGGLE_FOLLOWING = 'soc-net/users/TOGGLE_FOLLOWING'
// const SET_USERS = 'soc-net/users/SET_USERS''
// const SET_CURRENT_PAGE = 'soc-net/users/SET_CURRENT_PAGE'
// const SET_USERS_COUNT = 'soc-net/users/SET_USERS_COUNT'
// const TOGGLE_IS_FETCHING = 'soc-net/users/TOGGLE_IS_FETCHING'
// const TOGGLE_IS_FOLLOWING_PROGRESS = 'soc-net/users/TOGGLE_IS_FOLLOWING_PROGRESS'


type InitialState = typeof initialState

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
		case 'SET_USERS':
			return {
				...state,
				users: action.users,
			}
		case 'TOGGLE_FOLLOWING':
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
		case 'SET_CURRENT_PAGE':
			return {
				...state,
				currentPage: action.currentPage,
			}
		case 'SET_USERS_COUNT':
			return {
				...state,
				totalUsersCount: action.totalCount,
			}
		case "TOGGLE_IS_FETCHING":
			return {
				...state,
				isFetching: action.isFetching,
			}
		case 'TOGGLE_IS_FOLLOWING_PROGRESS':
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

type ActionsTypes = InferActionsTypes<typeof actions>

export const actions = {
	toggleFollowSuccess: (userId: number) => ({ type: 'TOGGLE_FOLLOWING', userId, } as const),
	setUsers: (users: Array<UserType>) => ({ type: 'SET_USERS', users, } as const),
	setCurrentPage: (currentPage: number) => ({ type: 'SET_CURRENT_PAGE', currentPage, } as const),
	setUsersCount: (totalCount: number) => ({ type: 'SET_USERS_COUNT', totalCount, } as const),
	toggleIsFetching: (isFetching: boolean) => ({ type: 'TOGGLE_IS_FETCHING', isFetching, } as const),
	setToggleFollowingInProgress: (isFetching: boolean, userId: number) => ({
		type: 'TOGGLE_IS_FOLLOWING_PROGRESS',
		isFetching,
		userId,
	} as const),
}

type DispatchType = Dispatch<ActionsTypes>
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>

export const getUsers = (currentPage: number, pageSize: number): ThunkType => async (dispatch: any) => {
	dispatch(actions.toggleIsFetching(true))
	dispatch(actions.setCurrentPage(currentPage))
	const data = await usersAPI.getUsers(currentPage, pageSize)
	dispatch(actions.toggleIsFetching(false))
	dispatch(actions.setUsers(data.items))
	dispatch(actions.setUsersCount(data.totalCount))
}

const _followUnfollow = async (dispatch: DispatchType, userId: number, apiFollowUnfollow: any) => {
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
