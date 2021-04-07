import React, { Component } from 'react'
import Profile from './Profile'
import * as axios from 'axios'
import { connect } from 'react-redux'
import { setUserProfile } from '../../redux/profile_reducer'
import { withRouter } from 'react-router'

class ProfileContainer extends Component {
  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = 2
    }
    axios
      .get('https://social-network.samuraijs.com/api/1.0/profile/' + userId)
      .then(response => this.props.setUserProfile(response.data))
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
