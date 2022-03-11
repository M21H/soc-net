import { GetItemsType, instance } from './api'

class UsersService {
	static async getUsers(currentPage = 1, pageSize = 10, term = '', friend: null | boolean = null) {
		const { data } = await instance
			.get<GetItemsType>(
				`users?page=${currentPage}&count=${pageSize}&term=${term}${friend === null ? '' : `&friend=${friend}`}`
			)
		return data
	}
}

export default UsersService

// const usersAPI = {
// 	getUsers(currentPage = 1, pageSize = 10, term = '', friend: null | boolean = null) {
// 		return instance
// 			.get<GetItemsType>(
// 				`users?page=${currentPage}&count=${pageSize}&term=${term}${friend === null ? '' : `&friend=${friend}`}`
// 			)
// 			.then(({ data }) => data)
// 	},
// }

// export default usersAPI
