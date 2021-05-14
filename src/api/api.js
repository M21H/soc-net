import * as axios from 'axios'

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

export const authAPI = {
	me() {
		return instance.get(`auth/me`)
	},
	login(email, password, rememberMe = false, captcha = null) {
		return instance.post(`auth/login`, { email, password, rememberMe, captcha })
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
	follow(userId) {
		return instance.post(`follow/${userId}`)
	},
	unfollow(userId) {
		return instance.delete(`follow/${userId}`)
	},
}

export const profileAPI = {
	getProfile(userId) {
		return instance.get(`profile/${userId}`).then(response => response.data)
	},

	getStatus(userId) {
		return instance.get(`profile/status/${userId}`)
	},

	updateStatus(status) {
		return instance.put(`profile/status`, { status })
	},

	savePhoto(photoFile) {
		const formData = new FormData()
		formData.append('images', photoFile)
		return instance.put(`profile/photo`, formData, {
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		})
	},
	saveProfile(profile) {
		return instance.put(`/profile`, profile)
	},
}
