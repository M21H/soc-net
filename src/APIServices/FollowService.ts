import { instance, ResponseType } from './api'

class FollowService {
	static async follow(userId: number) {
		const { data } = await instance.post<ResponseType>(`follow/${userId}`)
		return data
	}
	static async unfollow(userId: number) {
		const { data } = await instance.delete<ResponseType>(`follow/${userId}`)
		return data
	}
}

export default FollowService

// const followAPI = {
// 	follow(userId: number) {
// 		return instance.post<ResponseType>(`follow/${userId}`).then(({ data }) => data)
// 	},
// 	unfollow(userId: number) {
// 		return instance.delete<ResponseType>(`follow/${userId}`).then(({ data }) => data)
// 	},
// }

// export default followAPI
