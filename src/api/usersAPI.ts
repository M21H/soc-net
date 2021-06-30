import { GetItemsType, instance } from "./api";

const usersAPI = {
	getUsers(currentPage = 1, pageSize = 10) {
		return instance
			.get<GetItemsType>(`users?page=${currentPage}&count=${pageSize}`)
			.then(({ data }) => data)
	},
}

export default usersAPI