import { connect } from 'react-redux'
import { sendMessageAC, updateNewMessageAC } from '../../redux/dialogs_reducer'
import Dialogs from './Dialogs'

const mapStateToProps = state => {
  return {
    dialogsPage: state.dialogsPage,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    sendMessage: () => {
      dispatch(sendMessageAC())
    },
    updateNewMessage: text => {
      dispatch(updateNewMessageAC(text))
    },
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer
