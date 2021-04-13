import * as axios from 'axios'

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': 'fee6b2e0-2989-4355-870e-200f63c1eef4',
  },
})

export const userAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => response.data)
  },
  getPage(pageNumber = 1, pageSize = 10) {
    return instance
      .get(`users?page=${pageNumber}&count=${pageSize}`)
      .then(response => response.data)
  },
  getProfile(userId) {
    return instance
      .get(`profile/${userId}`)
      .then(response => response.data)
  },
  
  follow(userId) {
    return instance
      .post(`follow/${userId}`)
  },
  unfollow(userId) {
    return instance
      .delete(`follow/${userId}`)
  },
}

export const authAPI = {
  me() {
    return instance.get(`auth/me`)
  }
}