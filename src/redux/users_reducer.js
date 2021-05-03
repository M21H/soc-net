import { followAPI, usersAPI } from '../api/api'

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_USERS_COUNT = 'SET_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

let initialState = {
  users: [],
  usersCount: 0,
  pageSize: 10,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [],
}

const usersReducer = (state = initialState, action) => {
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
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      }
    case TOGGLE_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress: action.followingInProgress
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter(id => id !== action.userId),
      }
    default:
      return state
  }
}

export const followSuccess = userId => ({
  type: FOLLOW,
  userId,
})

export const unfollowSuccess = userId => ({
  type: UNFOLLOW,
  userId,
})

export const setUsers = users => ({
  type: SET_USERS,
  users,
})

export const setCurrentPage = currentPage => ({
  type: SET_CURRENT_PAGE,
  currentPage,
})

export const setUsersCount = totalCount => ({
  type: SET_USERS_COUNT,
  totalCount,
})

export const toggleIsFetching = isFetching => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
})

export const setFollowingInProgress = (followingInProgress, userId) => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  followingInProgress,
  userId,
})

export const requestUsers = (currentPage, pageSize) => async dispatch => {
  dispatch(toggleIsFetching(true))
  dispatch(setCurrentPage(currentPage))
  const data = await usersAPI.getUsers(currentPage, pageSize)
  dispatch(toggleIsFetching(false))
  dispatch(setUsers(data.items))
  dispatch(setUsersCount(data.totalCount))
}

const followUnfollow = async (dispatch, userId, apiMethod, action) => {
  dispatch(setFollowingInProgress(true, userId))
  const response = await apiMethod(userId)
  if (response.data.resultCode === 0) {
    dispatch(action(userId))
  }
  dispatch(setFollowingInProgress(false, userId))
}

export const follow = userId => async dispatch => {
  followUnfollow(
    dispatch,
    userId,
    followAPI.follow.bind(followAPI),
    followSuccess
  )
}

export const unfollow = userId => async dispatch => {
  followUnfollow(
    dispatch,
    userId,
    followAPI.unfollow.bind(followAPI),
    unfollowSuccess
  )
}

export default usersReducer
