import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { withRouter } from 'react-router'
import { getUserProfile, getUserStatus, updateUserStatus, savePhoto, saveProfile } from '../redux/profile_reducer'
import { Profile } from '../components/Profile/Profile'
import { PROFILE_ROUTE } from '../routes/const'

class ProfileContainer extends React.Component {
	refreshProfile() {
		let { userId } = this.props.match.params
		if (!userId) {
			userId = this.props.authorizedUserId
			if (!userId) {
				this.props.history.push(`${PROFILE_ROUTE}`)
			}
		} else if (Number(userId) === this.props.authorizedUserId) {
			this.props.history.push(`${PROFILE_ROUTE}`)
		}
		this.props.getUserProfile(userId)
		this.props.getUserStatus(userId)
	}

	componentDidMount() {
		this.refreshProfile()
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		if (this.props.match.params.userId !== prevProps.match.params.userId) {
			this.refreshProfile()
		}
	}

	render() {
		return (
			<Profile
				profile={this.props.profile}
				userStatus={this.props.userStatus}
				updateUserStatus={this.props.updateUserStatus}
				isOwner={!this.props.match.params.userId}
				savePhoto={this.props.savePhoto}
				saveProfile={this.props.saveProfile}
			/>
		)
	}
}

const mapStateToProps = state => {
	return {
		profile: state.profilePage.profile,
		userStatus: state.profilePage.userStatus,
		authorizedUserId: state.auth.userId,
		isAuth: state.auth.isAuth,
	}
}

export default compose(
	connect(mapStateToProps, {
		getUserProfile,
		getUserStatus,
		updateUserStatus,
		savePhoto,
		saveProfile,
	}),
	withRouter
)(ProfileContainer)
