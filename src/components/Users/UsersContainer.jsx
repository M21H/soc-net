import { connect } from 'react-redux'
import {
  setUsersAC,
  followAC,
  unfollowAC,
} from '../../redux/users_reducer'
import Users from './Users'

const mapStateToProps = state => {
  return {
    users: state.usersPage.users,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    follow: userId => {
      dispatch(followAC(userId))
    },
    unfollow: userId => {
      dispatch(unfollowAC(userId))
    },
    setUsers: users => {
      dispatch(setUsersAC(users))
    },
  }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer
