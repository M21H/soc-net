import { FormAction, stopSubmit } from 'redux-form'
import { authAPI, securityAPI } from '../api'
import { ResultCodeEnum, ResultCodeForCaptchaEnum } from '../api/api'
import { BaseThunkType, InferActionsTypes } from './store'

export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType | FormAction>

const initialState = {
	userId: null as number | null,
	login: null as string | null,
	email: null as string | null,
	isAuth: false,
	captchaUrl: null as string | null,
}

const authReducer = (state = initialState, action: ActionsType): InitialStateType => {
	switch (action.type) {
		case 'AUTH:SET_AUTH_USER_DATA':
		case 'AUTH:SET_CAPTCHA_URL':
			return {
				...state,
				...action.payload,
			}
		default:
			return state
	}
}

export const actions = {
	setAuthUserData: (userId: number | null, login: string | null, email: string | null, isAuth: boolean) =>
		({
			type: 'AUTH:SET_AUTH_USER_DATA',
			payload: { userId, login, email, isAuth },
		} as const),

	setCaptchaUrl: (captchaUrl: string) =>
		({
			type: 'AUTH:SET_CAPTCHA_URL',
			payload: { captchaUrl },
		} as const),
}

export const getAuthUserData = (): ThunkType => async dispatch => {
	const data = await authAPI.me()
	if (data.resultCode === ResultCodeEnum.Success) {
		const { id, login, email } = data.data
		dispatch(actions.setAuthUserData(id, login, email, true))
	}
}

export const login =
	(email: string, password: string, rememberMe: boolean, captcha: string): ThunkType =>
	async dispatch => {
		const data = await authAPI.login(email, password, rememberMe, captcha)
		if (data.resultCode === ResultCodeEnum.Success) {
			dispatch(getAuthUserData())
		} else {
			if (data.resultCode === ResultCodeForCaptchaEnum.CaptchaIsRequired) {
				dispatch(getCaptchaUrl())
			}
			const message = data.messages.length !== 0 ? data.messages[0] : 'Some error'
			dispatch(stopSubmit('login', { _error: message }))
		}
	}

export const getCaptchaUrl = (): ThunkType => async dispatch => {
	const data = await securityAPI.getCaptchaUrl()
	const captchaUrl = data.url
	dispatch(actions.setCaptchaUrl(captchaUrl))
}

export const logout = (): ThunkType => async dispatch => {
	const data = await authAPI.logout()
	if (data.resultCode === ResultCodeEnum.Success) {
		dispatch(actions.setAuthUserData(null, null, null, false))
	}
}

export default authReducer
