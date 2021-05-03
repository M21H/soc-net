import { connect } from 'react-redux'
import { follow, unfollow, requestUsers } from '../../redux/users_reducer'
import React, { Component } from 'react'
import Users from './Users'
import Preloader from '../../common/Preloader/Preloader'
import { compose } from 'redux'
import {
  getCurrentPage,
  getIsFetching,
  getPageSize,
  getUsers,
  getFollowingInProgress,
  getUsersCount,
} from '../../redux/reselectors/usersReselectors'

class UsersContainer extends Component {
  componentDidMount() {
    this.props.requestUsers(this.props.currentPage, this.props.pageSize)
  }

  onPageChange = pageNumber => {
    this.props.requestUsers(pageNumber, this.props.pageSize)
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
    users: getUsers(state),
    usersCount: getUsersCount(state),
    pageSize: getPageSize(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
    
  }
}

export default compose(
  connect(mapStateToProps, {
    follow,
    unfollow,
    requestUsers,
  })
)(UsersContainer)
