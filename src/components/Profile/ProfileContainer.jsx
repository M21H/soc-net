import React, { Component } from 'react'
import Profile from './Profile'
import { connect } from 'react-redux'
import { setUserProfile } from '../../redux/profile_reducer'
import { withRouter } from 'react-router'
import { userAPI } from '../../api/api'

class ProfileContainer extends Component {
  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = 2
    }
    userAPI.getUserProfile(userId).then(data => this.props.setUserProfile(data))
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />
  }
}

const mapStateToProps = state => {
  return {
    profile: state.profilePage.profile,
  }
}

let WithRouterContainer = withRouter(ProfileContainer)

export default connect(mapStateToProps, { setUserProfile })(WithRouterContainer)
