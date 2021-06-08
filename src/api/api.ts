import axios from 'axios'
import { ProfileType } from '../type/types'

const instance = axios.create({
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	withCredentials: true,
	headers: {
		'API-KEY': 'fee6b2e0-2989-4355-870e-200f63c1eef4',
	},
})

export const securityAPI = {
	getCaptchaUrl() {
		return instance.get('/security/get-captcha-url')
	},
}

export enum ResultCodeEnum {
	Success = 0,
	Error = 1,
}

export enum ResultCodeForCaptcha {
	CaptchaIsRequired = 10,
}

type MeResponseType = {
	data: { id: number, email: string, login: string }
	resultCode: ResultCodeEnum
	messages: Array<string>
}

type LoginResponseType = {
	data: { userId: number }
	resultCode: ResultCodeEnum | ResultCodeForCaptcha
	messages: Array<string>
}

export const authAPI = {
	me() {
		return instance.get<MeResponseType>(`auth/me`).then(res => res.data)
	},
	login(email: string, password: string, rememberMe = false, captcha: null | string = null) {
		return instance.post<LoginResponseType>(`auth/login`, { email, password, rememberMe, captcha })
			.then(res => res.data)
	},
	logout() {
		return instance.delete(`auth/login`)
	},
}

export const usersAPI = {
	getUsers(currentPage = 1, pageSize = 10) {
		return instance
			.get(`users?page=${currentPage}&count=${pageSize}`)
			.then(response => response.data)
	},
}

export const followAPI = {
	follow(userId: number) {
		return instance.post(`follow/${userId}`)
	},
	unfollow(userId: number) {
		return instance.delete(`follow/${userId}`)
	},
}

export const profileAPI = {
	getProfile(userId: number) {
		return instance.get(`profile/${userId}`).then(response => response.data)
	},

	getStatus(userId: number) {
		return instance.get(`profile/status/${userId}`)
	},

	updateStatus(status: string) {
		return instance.put(`profile/status`, { status })
	},

	savePhoto(photoFile: any) {
		const formData = new FormData()
		formData.append('images', photoFile)
		return instance.put(`profile/photo`, formData, {
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		})
	},
	saveProfile(profile: ProfileType) {
		return instance.put(`/profile`, profile)
	},
}