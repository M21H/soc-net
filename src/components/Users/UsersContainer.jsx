import { connect } from 'react-redux'
import {
  setUsers,
  follow,
  unfollow,
  setCurrentPage,
  setUsersCount,
  toggleIsFetching,
  setFollowingInProgress,
} from '../../redux/users_reducer'
import React, { Component } from 'react'
import Users from './Users'
import Preloader from '../../common/Preloader/Preloader'
import { userAPI } from '../../api/api'

class UsersContainer extends Component {
  componentDidMount() {
    toggleIsFetching(true)
    userAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
      this.props.toggleIsFetching(false)
      this.props.setUsers(data.items)
      this.props.setUsersCount(data.totalCount)
    })
  }

  onPageChange = pageNumber => {
    this.props.setCurrentPage(pageNumber)
    this.props.toggleIsFetching(true)
    userAPI.getPage(pageNumber, this.props.pageSize).then(data => {
      this.props.setUsers(data.items)
      this.props.toggleIsFetching(false)
    })
  }

  render() {
    return (
      <>
        {this.props.isFetching ? (
          <Preloader />
        ) : (
          <Users
            users={this.props.users}
            usersCount={this.props.usersCount}
            pageSize={this.props.pageSize}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            currentPage={this.props.currentPage}
            onPageChange={this.onPageChange}
            
            followingInProgress={this.props.followingInProgress}
            setFollowingInProgress={this.props.setFollowingInProgress}
          />
        )}
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    users: state.usersPage.users,
    usersCount: state.usersPage.usersCount,
    pageSize: state.usersPage.pageSize,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     follow: userId => {
//       dispatch(followAC(userId))
//     },
//     unfollow: userId => {
//       dispatch(unfollowAC(userId))
//     },
//     setUsers: users => {
//       dispatch(setUsersAC(users))
//     },
//     setCurrentPage: pageNumber => {
//       dispatch(setCurrentPageAC(pageNumber))
//     },
//     setUsersCount: totalCount => {
//       dispatch(setUsersCountAC(totalCount))
//     },
//     toggleIsFetching: isFetching => {
//       dispatch(toggleIsFetchingAC(isFetching))
//     },
//   }
// }

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setUsersCount,
  toggleIsFetching,
  setFollowingInProgress,
})(UsersContainer)
