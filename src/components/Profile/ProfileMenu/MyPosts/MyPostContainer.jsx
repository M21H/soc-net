import { connect } from 'react-redux'
import { addPostAC } from '../../../../redux/profile_reducer'
import MyPosts from './MyPosts'

const mapStateToProps = state => {
  return {
    newPostText: state.profilePage.newPostText,
    posts: state.profilePage.posts,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addPost: newPostText => {
      dispatch(addPostAC(newPostText))
    },
  }
}

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostContainer
