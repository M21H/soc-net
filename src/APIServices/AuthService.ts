import { instance, ResponseType, ResultCodeEnum, ResultCodeForCaptchaEnum } from './api'

type MeResponseDataType = {
	id: number
	email: string
	login: string
}

type LoginResponseDataType = {
	userId: number
}

class AuthService {
	static async me() {
		const { data } = await instance.get<ResponseType<MeResponseDataType>>(`auth/me`)
		return data
	}
	static async login(email: string, password: string, rememberMe = false, captcha: null | string = null) {
		const { data } = await instance
			.post<ResponseType<LoginResponseDataType, ResultCodeEnum | ResultCodeForCaptchaEnum>>(`auth/login`, {
				email,
				password,
				rememberMe,
				captcha,
			})
		return data
	}
	static async logout() {
		const { data } = await instance.delete<ResponseType>(`auth/login`)
		return data
	}
}

export default AuthService

// const authAPI = {
// 	me() {
// 		return instance.get<ResponseType<MeResponseDataType>>(`auth/me`).then(({ data }) => data)
// 	},
// 	login(email: string, password: string, rememberMe = false, captcha: null | string = null) {
// 		return instance
// 			.post<ResponseType<LoginResponseDataType, ResultCodeEnum | ResultCodeForCaptchaEnum>>(`auth/login`, {
// 				email,
// 				password,
// 				rememberMe,
// 				captcha,
// 			})
// 			.then(({ data }) => data)
// 	},
// 	logout() {
// 		return instance.delete<ResponseType>(`auth/login`).then(({ data }) => data)
// 	},
// }

// export default authAPI
