import React from 'react'
import { connect } from 'react-redux'
import TopSearchForm from './TopSearchForm'
import { getAuthUserData } from '../../redux/auth_reducer'

class TopSearchFormContainer extends React.Component {
  componentDidMount() {
    this.props.getAuthUserData()
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

export default connect(mapStateToProps, { getAuthUserData })(
  TopSearchFormContainer
)
