// users: state.usersPage.users,
// usersCount: state.usersPage.usersCount,
// pageSize: state.usersPage.pageSize,
// currentPage: state.usersPage.currentPage,
// isFetching: state.usersPage.isFetching,
// followingInProgress: state.usersPage.followingInProgress,

export const getUsers = state => {
  return state.usersPage.users
}

export const getUsersCount = state => {
  return state.usersPage.usersCount
}

export const getPageSize = state => {
  return state.usersPage.pageSize
}

export const getCurrentPage = state => {
  return state.usersPage.currentPage
}

export const getIsFetching = state => {
  return state.usersPage.isFetching
}

export const getFollowingInProgress = state => {
  return state.usersPage.followingInProgress
}