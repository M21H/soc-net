import { connect } from 'react-redux'
import {
  setUsers,
  follow,
  unfollow,
  setCurrentPage,
  setUsersCount,
  toggleIsFetching,
} from '../../redux/users_reducer'
import * as axios from 'axios'
import React, { Component } from 'react'
import Users from './Users'
import Preloader from '../../common/Preloader/Preloader'

class UsersContainer extends Component {
  componentDidMount() {
    this.props.toggleIsFetching(true)
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
        {
          withCredentials: true,
          // headers: {
          //   'API-KEY': 'fee6b2e0-2989-4355-870e-200f63c1eef4',
          // },
        }
      )
      .then(response => {
        this.props.toggleIsFetching(false)
        this.props.setUsers(response.data.items)
        this.props.setUsersCount(response.data.totalCount)
      })
  }

  onPageChange = pageNumber => {
    this.props.setCurrentPage(pageNumber)
    this.props.toggleIsFetching(true)
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`,
        {
          withCredentials: true,
          // headers: {
          //   'API-KEY': 'fee6b2e0-2989-4355-870e-200f63c1eef4',
          // },
        }
      )
      .then(response => {
        this.props.setUsers(response.data.items)
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
})(UsersContainer)
