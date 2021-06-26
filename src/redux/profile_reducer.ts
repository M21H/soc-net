import { stopSubmit } from 'redux-form'
import { profileAPI, ResultCodeEnum } from '../api/api'
import { PhotosType, PostType, ProfileType } from '../type/types'

const ADD_POST = 'soc-net/profile/ADD_POST'
const SET_USER_PROFILE = 'soc-net/profile/SET_USER_PROFILE'
const SET_USER_STATUS = 'soc-net/profile/SET_USER_STATUS'
const SEVE_PHOTO_SUCCESS = 'soc-net/profile/SEVE_PHOTO_SUCCESS'


export type InitialStateType = typeof initialState

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

const profileReducer = (state = initialState, action: any): InitialStateType => {
	switch (action.type) {
		case ADD_POST: {
			let newPost = {
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
		case SET_USER_PROFILE:
			return {
				...state,
				profile: action.profile,
			}
		case SET_USER_STATUS:
			return {
				...state,
				userStatus: action.userStatus,
			}
		case SEVE_PHOTO_SUCCESS:
			return {
				...state,
				profile: { ...state.profile, photos: action.photos } as ProfileType,
			}
		default:
			return state
	}
}

type AddPostACType = {
	type: typeof ADD_POST
	newPostText: string
}
export const addPostAC = (newPostText: string): AddPostACType => ({
	type: ADD_POST,
	newPostText,
})


type SetUserStatusType = {
	type: typeof SET_USER_STATUS
	userStatus: string
}
export const setUserStatus = (userStatus: string): SetUserStatusType => ({
	type: SET_USER_STATUS,
	userStatus,
})


type SetUserProfileType = {
	type: typeof SET_USER_PROFILE
	profile: ProfileType
}
export const setUserProfile = (profile: ProfileType): SetUserProfileType => ({
	type: SET_USER_PROFILE,
	profile,
})


type SavePhotoSuccess = {
	type: typeof SEVE_PHOTO_SUCCESS
	photos: PhotosType
}
export const savePhotoSuccess = (photos: PhotosType): SavePhotoSuccess => ({
	type: SEVE_PHOTO_SUCCESS,
	photos,
})

export const getUserProfile = (userId: number) => async (dispatch: any) => {
	const data = await profileAPI.getProfile(userId)
	dispatch(setUserProfile(data))
}

export const getUserStatus = (userId: number) => async (dispatch: any) => {
	const data = await profileAPI.getStatus(userId)
	dispatch(setUserStatus(data))
}

export const updateUserStatus = (status: string) => async (dispatch: any) => {
	try {
		const data = await profileAPI.updateStatus(status)
		if (data.resultCode === ResultCodeEnum.Success) {
			dispatch(setUserStatus(status))
		}
	} catch (error) {
		console.log(error)
	}
}

export const savePhoto = (file: any) => async (dispatch: any) => {
	const data = await profileAPI.savePhoto(file)
	if (data.resultCode === 0) {
		dispatch(savePhotoSuccess(data.data.photos))
	}
}

export const saveProfile = (profile: ProfileType) => async (dispatch: any, getState: any) => {
	const userId = getState().auth.userId
	const data = await profileAPI.saveProfile(profile)
	if (data.resultCode === ResultCodeEnum.Success) {
		dispatch(getUserProfile(userId))
	} else {
		// dispatch(stopSubmit('edit-profile', { contacts: { facebook: response.data.messages[0] } }))
		dispatch(stopSubmit('edit-profile', { _error: data.messages[0] }))
		return Promise.reject(data.messages[0])
	}
}

export default profileReducer
