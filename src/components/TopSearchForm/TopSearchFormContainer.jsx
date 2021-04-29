import React from 'react'
import { connect } from 'react-redux'
import TopSearchForm from './TopSearchForm'
import { logout } from '../../redux/auth_reducer'

class TopSearchFormContainer extends React.Component {
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

export default connect(mapStateToProps, { logout })(TopSearchFormContainer)
