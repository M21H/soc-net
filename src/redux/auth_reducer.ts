import { stopSubmit } from 'redux-form'
import { authAPI, securityAPI } from '../api/api'

const SET_AUTH_USER_DATA = 'soc-net/auth/SET_USER_DATA'
const SET_CAPTCHA_URL = 'soc-net/auth/SET_CAPTCHA_URL'


export type InitialStateType = typeof initialState

const initialState = {
	userId: null as number | null,
	login: null as string | null,
	email: null as string | null,
	isAuth: false,
	captchaUrl: null as string | null,
}

const authReducer = (state = initialState, action: any): InitialStateType => {
	switch (action.type) {
		case SET_AUTH_USER_DATA:
			return {
				...state,
				...action.payload,
			}
		case SET_CAPTCHA_URL:
			return {
				...state,
				captchaUrl: action.payload,
			}
		default:
			return state
	}
}

type SetAuthUserDataActionPayloadType = {
	userId: number | null
	login: string | null
	email: string | null
	isAuth: boolean
}
export type SetAuthUserDataActionType = {
	type: typeof SET_AUTH_USER_DATA
	payload: SetAuthUserDataActionPayloadType
}
export const setAuthUserData = (userId: number | null, login: string | null, email: string | null, isAuth: boolean): SetAuthUserDataActionType => ({
	type: SET_AUTH_USER_DATA,
	payload: { userId, login, email, isAuth },
})


export type SetCaptchaUrlActionType = {
	type: typeof SET_CAPTCHA_URL
	payload: { captchaUrl: string }
}
export const setCaptchaUrl = (captchaUrl: string): SetCaptchaUrlActionType => ({
	type: SET_CAPTCHA_URL,
	payload: { captchaUrl },
})


export const getAuthUserData = () => async (dispatch: any) => {
	let response = await authAPI.me()
	if (response.data.resultCode === 0) {
		let { id, login, email } = response.data.data
		dispatch(setAuthUserData(id, login, email, true))
	}
}


export const login = (email: string, password: string, rememberMe: boolean, captcha: string) => async (dispatch: any) => {
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


export const getCaptchaUrl = () => async (dispatch: any) => {
	const response = await securityAPI.getCaptchaUrl()
	const captchaUrl = response.data.url
	dispatch(setCaptchaUrl(captchaUrl))
}

export const logout = () => async (dispatch: any) => {
	let response = await authAPI.logout()
	if (response.data.resultCode === 0) {
		dispatch(setAuthUserData(null, null, null, false))
	}
}

export default authReducer
