import { PhotosType, ProfileType } from '../types/types'
import { instance, ResponseType } from './api'

type SavePhotoResponseType = {
	photos: PhotosType
}

class ProfileServices {
	static async getProfile(userId: number) {
		const { data } = await instance.get<ProfileType>(`profile/${userId}`)
		return data
	}
	static async getStatus(userId: number) {
		const { data } = await instance.get<string>(`profile/status/${userId}`)
		return data
	}
	static async updateStatus(status: string) {
		const { data } = await instance.put<ResponseType>(`profile/status`, { status })
		return data
	}
	static async savePhoto(photoFile: File) {
		const formData = new FormData()
		formData.append('images', photoFile)
		const { data } = await instance
			.put<ResponseType<SavePhotoResponseType>>(`profile/photo`, formData, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			})
		return data
	}
	static async saveProfile(profile: ProfileType) {
		const { data } = await instance.put<ResponseType>(`/profile`, profile)
		return data
	}
}

export default ProfileServices

// const profileAPI = {
// 	getProfile(userId: number) {
// 		return instance.get<ProfileType>(`profile/${userId}`).then(({ data }) => data)
// 	},

// 	getStatus(userId: number) {
// 		return instance.get<string>(`profile/status/${userId}`).then(({ data }) => data)
// 	},

// 	updateStatus(status: string) {
// 		return instance.put<ResponseType>(`profile/status`, { status }).then(({ data }) => data)
// 	},

// 	savePhoto(photoFile: File) {
// 		const formData = new FormData()
// 		formData.append('images', photoFile)
// 		return instance
// 			.put<ResponseType<SavePhotoResponseType>>(`profile/photo`, formData, {
// 				headers: {
// 					'Content-Type': 'multipart/form-data',
// 				},
// 			})
// 			.then(({ data }) => data)
// 	},
// 	saveProfile(profile: ProfileType) {
// 		return instance.put<ResponseType>(`/profile`, profile).then(({ data }) => data)
// 	},
// }

// export default profileAPI
