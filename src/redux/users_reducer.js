const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_USERS_COUNT = 'SET_USERS_COUNT'

let initialState = {
  users: [],
  usersCount: 0,
  pageSize: 10,
  currentPage: 1,
}

const usersReducer = (state = initialState, action) => {
  debugger
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        users: action.users,
      }
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: true }
          }
          return u
        }),
      }
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: false }
          }
          return u
        }),
      }
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      }
    case SET_USERS_COUNT:
      return {
        ...state,
        usersCount: action.totalCount,
      }
    default:
      return state
  }
}

export const toggleFollowAC = userId => ({
  type: FOLLOW,
  userId,
})

export const followAC = userId => ({
  type: FOLLOW,
  userId,
})

export const unfollowAC = userId => ({
  type: UNFOLLOW,
  userId,
})

export const setUsersAC = users => ({
  type: SET_USERS,
  users,
})

export const setCurrentPageAC = currentPage => ({
  type: SET_CURRENT_PAGE,
  currentPage,
})

export const setUsersCountAC = totalCount => ({
  type: SET_USERS_COUNT,
  totalCount,
})

export default usersReducer
