import axios from 'axios'
import { UserType } from '../type/types'

export const instance = axios.create({
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	withCredentials: true,
	headers: {
		'API-KEY': process.env.REACT_APP_API_KEY,
	},
})

export type ResponseType<D = {}, RC = ResultCodeEnum> = {
	data: D
	messages: Array<string>
	resultCode: RC
}

export type GetItemsType = {
	items: Array<UserType>
	totalCount: number
	error: string | null
}

export enum ResultCodeEnum {
	Success = 0,
	Error = 1,
}

export enum ResultCodeForCaptchaEnum {
	CaptchaIsRequired = 10,
}