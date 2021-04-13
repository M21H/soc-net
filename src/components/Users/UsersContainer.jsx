import { connect } from 'react-redux'
import { follow, unfollow, getUsers, getPage } from '../../redux/users_reducer'
import React, { Component } from 'react'
import Users from './Users'
import Preloader from '../../common/Preloader/Preloader'

class UsersContainer extends Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize)
  }

  onPageChange = pageNumber => {
    this.props.getPage(pageNumber, this.props.pageSize)
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
  getUsers,
  getPage,
})(UsersContainer)
