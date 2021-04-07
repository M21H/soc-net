import * as axios from 'axios'
import React from 'react'
import { connect } from 'react-redux'
import TopSearchForm from './TopSearchForm'
import { setAuthUserData } from '../../redux/auth_reducer'

class TopSearchFormContainer extends React.Component {
  componentDidMount() {
    axios
      .get('https://social-network.samuraijs.com/api/1.0/auth/me', {
        withCredentials: true,
      })
      .then(response => {
        if (response.data.resultCode === 0) {
          let { id, login, email } = response.data.data
          this.props.setAuthUserData(id, login, email)
        }
      })
  }

  render() {
    return <TopSearchForm {...this.props} />
  }
}

const mapStateToProps = state => {
  return {
    login: state.auth.login,
    isAuth: state.auth.isAuth,
  }
}

export default connect(mapStateToProps, { setAuthUserData })(
  TopSearchFormContainer
)
