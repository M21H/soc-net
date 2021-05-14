import { stopSubmit } from 'redux-form'
import { profileAPI } from '../api/api'

const ADD_POST = 'ADD_POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_USER_STATUS = 'SET_USER_STATUS'
const SEVE_PHOTO_SUCCESS = 'SEVE_PHOTO_SUCCESS'

let initialState = {
	posts: [
		{ id: 0, message: 'postMessage', likeCount: 32 },
		{ id: 1, message: 'postMessage', likeCount: 33 },
		{ id: 2, message: 'postMessage', likeCount: 1 },
		{ id: 3, message: 'postMessage', likeCount: 100 },
	],
	profile: null,
	userStatus: '',
}

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST: {
			let newPost = {
				id: Date.now(),
				message: action.newPostText,
				likeCount: 0,
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
				profile: { ...state.profile, photos: action.photos },
			}
		default:
			return state
	}
}

export const addPostAC = newPostText => ({
	type: ADD_POST,
	newPostText,
})

export const setUserStatus = userStatus => ({
	type: SET_USER_STATUS,
	userStatus,
})

export const setUserProfile = profile => ({
	type: SET_USER_PROFILE,
	profile,
})

export const savePhotoSuccess = photos => ({
	type: SEVE_PHOTO_SUCCESS,
	photos,
})

export const getUserProfile = userId => async dispatch => {
	const response = await profileAPI.getProfile(userId)
	dispatch(setUserProfile(response))
}

export const getUserStatus = userId => async dispatch => {
	const response = await profileAPI.getStatus(userId)
	dispatch(setUserStatus(response.data))
}

export const updateUserStatus = status => async dispatch => {
	const response = await profileAPI.updateStatus(status)
	if (response.data.resultCode === 0) {
		dispatch(setUserStatus(status))
	}
}

export const savePhoto = file => async dispatch => {
	const response = await profileAPI.savePhoto(file)
	if (response.data.resultCode === 0) {
		dispatch(savePhotoSuccess(response.data.data.photos))
	}
}

export const saveProfile = profile => async (dispatch, getState) => {
	const userId = getState().auth.userId
	const response = await profileAPI.saveProfile(profile)
	if (response.data.resultCode === 0) {
		dispatch(getUserProfile(userId))
	} else {
		// dispatch(stopSubmit('edit-profile', { contacts: { facebook: response.data.messages[0] } }))
		dispatch(stopSubmit('edit-profile', { _error: response.data.messages[0] }))
		return Promise.reject(response.data.messages[0])
	}
}

export default profileReducer
