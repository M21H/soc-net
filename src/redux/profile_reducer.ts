import { FormAction, stopSubmit } from 'redux-form'
import { ResultCodeEnum } from '../api/api'
import { profileAPI } from '../api'
import { PhotosType, PostType, ProfileType } from '../type/types'
import { BaseThunkType, InferActionsTypes } from './store'

export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType | FormAction>

const initialState = {
	posts: [
		{ id: 0, message: 'postMessage', likeCount: 32 },
		{ id: 1, message: 'postMessage', likeCount: 33 },
		{ id: 2, message: 'postMessage', likeCount: 1 },
		{ id: 3, message: 'postMessage', likeCount: 100 },
	] as Array<PostType>,
	profile: null as ProfileType | null,
	userStatus: '',
	newPostText: '',
}

const profileReducer = (state = initialState, action: ActionsType): InitialStateType => {
	switch (action.type) {
		case 'PROFILE:ADD_POST': {
			const newPost = {
				id: Date.now(),
				message: action.newPostText,
				likeCount: Math.floor(Math.random() * 100),
			}
			return {
				...state,
				posts: [newPost, ...state.posts],
				newPostText: '',
			}
		}
		case 'PROFILE:SET_USER_PROFILE':
			return {
				...state,
				profile: action.profile,
			}
		case 'PROFILE:SET_USER_STATUS':
			return {
				...state,
				userStatus: action.userStatus,
			}
		case 'PROFILE:SAVE_PHOTO_SUCCESS':
			return {
				...state,
				profile: { ...state.profile, photos: action.photos } as ProfileType,
			}
		default:
			return state
	}
}

export const actions = {
	addPost: (newPostText: string) => ({ type: 'PROFILE:ADD_POST', newPostText } as const),
	setUserStatus: (userStatus: string) => ({ type: 'PROFILE:SET_USER_STATUS', userStatus } as const),
	setUserProfile: (profile: ProfileType) => ({ type: 'PROFILE:SET_USER_PROFILE', profile } as const),
	savePhotoSuccess: (photos: PhotosType) => ({ type: 'PROFILE:SAVE_PHOTO_SUCCESS', photos } as const),
}

export const getUserProfile =
	(userId: number): ThunkType =>
	async dispatch => {
		const data = await profileAPI.getProfile(userId)
		dispatch(actions.setUserProfile(data))
	}

export const getUserStatus =
	(userId: number): ThunkType =>
	async dispatch => {
		const data = await profileAPI.getStatus(userId)
		dispatch(actions.setUserStatus(data))
	}

export const updateUserStatus =
	(status: string): ThunkType =>
	async dispatch => {
		try {
			const data = await profileAPI.updateStatus(status)
			if (data.resultCode === ResultCodeEnum.Success) {
				dispatch(actions.setUserStatus(status))
			}
		} catch (error) {
			console.log(error)
		}
	}

export const savePhoto =
	(file: File): ThunkType =>
	async dispatch => {
		const data = await profileAPI.savePhoto(file)
		if (data.resultCode === ResultCodeEnum.Success) {
			dispatch(actions.savePhotoSuccess(data.data.photos))
		}
	}

export const saveProfile =
	(profile: ProfileType): ThunkType =>
	async (dispatch, getState) => {
		const { userId } = getState().auth
		const data = await profileAPI.saveProfile(profile)
		if (data.resultCode === ResultCodeEnum.Success) {
			if (userId != null) {
				dispatch(getUserProfile(userId))
			} else {
				throw new Error("userId can't be null")
			}
		} else {
			// dispatch(stopSubmit('edit-profile', { contacts: { facebook: response.data.messages[0] } }))
			dispatch(stopSubmit('edit-profile', { _error: data.messages[0] }))
			return Promise.reject(data.messages[0])
		}
	}

export default profileReducer
