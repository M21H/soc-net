import { connect } from 'react-redux'
import { addPostAC, updateNewPostAC } from '../../../../redux/profile_reducer'
import MyPosts from './MyPosts'

const mapStateToProps = state => {
  return {
    newPostText: state.profilePage.newPostText,
    posts: state.profilePage.posts,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateNewPost: (text) => {
      dispatch(updateNewPostAC(text))
    },
    addPost: () => {
      dispatch(addPostAC())
    }
  }
}

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostContainer
