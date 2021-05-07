import { connect } from 'react-redux'
import { compose } from 'redux'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { sendMessageAC } from '../../redux/dialogs_reducer'
import Dialogs from './Dialogs'

const mapStateToProps = state => {
	return {
		dialogsPage: state.dialogsPage,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		sendMessage: newMessageText => {
			dispatch(sendMessageAC(newMessageText))
		},
	}
}

export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialogs)
