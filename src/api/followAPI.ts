import { ResponseType } from "axios";
import { instance } from "./api";

const followAPI = {
	follow(userId: number) {
		return instance.post<ResponseType>(`follow/${userId}`).then(({ data }) => data)
	},
	unfollow(userId: number) {
		return instance.delete<ResponseType>(`follow/${userId}`).then(({ data }) => data)
	},
}

export default followAPI