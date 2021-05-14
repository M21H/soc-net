import { stopSubmit } from 'redux-form'
import { authAPI, securityAPI } from '../api/api'

const SET_AUTH_USER_DATA = 'SET_USER_DATA'
const SET_CAPTCHA_URL = 'SET_CAPTCHA_URL'

let initialState = {
	userId: null,
	login: null,
	email: null,
	isAuth: false,
	captchaUrl: null,
}

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_AUTH_USER_DATA:
			return {
				...state,
				...action.payload,
			}
		case SET_CAPTCHA_URL:
			return {
				...state,
				captchaUrl: action.captchaUrl,
			}
		default:
			return state
	}
}

export const setCaptchaUrl = captchaUrl => ({
	type: SET_CAPTCHA_URL,
	captchaUrl,
})

export const setAuthUserData = (userId, login, email, isAuth) => ({
	type: SET_AUTH_USER_DATA,
	payload: { userId, login, email, isAuth },
})

export const getAuthUserData = () => async dispatch => {
	let response = await authAPI.me()
	if (response.data.resultCode === 0) {
		let { id, login, email } = response.data.data
		dispatch(setAuthUserData(id, login, email, true))
	}
}

export const login = (email, password, rememberMe, captcha) => async dispatch => {
	let response = await authAPI.login(email, password, rememberMe, captcha)
	if (response.data.resultCode === 0) {
		dispatch(getAuthUserData())
	} else {
		if (response.data.resultCode === 10) {
			dispatch(getCaptchaUrl())
		}
		const message = response.data.messages.lenght !== 0 ? response.data.messages[0] : 'Some error'
		dispatch(stopSubmit('login', { _error: message }))
	}
}

export const getCaptchaUrl = () => async dispatch => {
	const response = await securityAPI.getCaptchaUrl()
	const captchaUrl = response.data.url
	dispatch(setCaptchaUrl(captchaUrl))
}

export const logout = () => async dispatch => {
	let response = await authAPI.logout()
	if (response.data.resultCode === 0) {
		dispatch(setAuthUserData(null, null, null, false))
	}
}

export default authReducer
