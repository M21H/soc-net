import { instance } from './api'

type getCaptchaResponseType = {
	url: string
}

class SecurityService {
	static async getCaptchaUrl() {
		const { data } = await instance.get<getCaptchaResponseType>('/security/get-captcha-url')
		return data
	}
}

export default SecurityService

// const securityAPI = {
// 	getCaptchaUrl() {
// 		return instance.get<getCaptchaResponseType>('/security/get-captcha-url').then(({ data }) => data)
// 	},
// }

// export default securityAPI
