import { connect } from 'react-redux'
import { actions } from '../../../redux/profile_reducer'
import MyPosts from './Posts'

const mapStateToProps = state => {
	return {
		newPostText: state.profilePage.newPostText,
		posts: state.profilePage.posts,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		addPost: newPostText => {
			dispatch(actions.addPost(newPostText))
		},
	}
}

const PostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default PostContainer
