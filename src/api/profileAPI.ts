import { PhotosType, ProfileType } from "../type/types"
import { instance, ResponseType } from "./api"


type SavePhotoResponseType = {
	photos: PhotosType
}

const profileAPI = {
	getProfile(userId: number) {
		return instance.get<ProfileType>(`profile/${userId}`).then(({ data }) => data)
	},

	getStatus(userId: number) {
		return instance.get<string>(`profile/status/${userId}`).then(({ data }) => data)
	},

	updateStatus(status: string) {
		return instance.put<ResponseType>(`profile/status`, { status }).then(({ data }) => data)
	},

	savePhoto(photoFile: File) {
		const formData = new FormData()
		formData.append('images', photoFile)
		return instance.put<ResponseType<SavePhotoResponseType>>(`profile/photo`, formData, {
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		}).then(({ data }) => data)
	},
	saveProfile(profile: ProfileType) {
		return instance.put<ResponseType>(`/profile`, profile).then(({ data }) => data)
	},
}

export default profileAPI