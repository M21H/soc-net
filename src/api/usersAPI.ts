import { GetItemsType, instance } from "./api";

const usersAPI = {
	getUsers(currentPage = 1, pageSize = 10, term: string = '', friend: null | boolean = null) {
		return instance
			.get<GetItemsType>(`users?page=${currentPage}&count=${pageSize}&term=${term}` + (friend === null ? '' : `&friend=${friend}`))
			.then(({ data }) => data)
	},
}

export default usersAPI