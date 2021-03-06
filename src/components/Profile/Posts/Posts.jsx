import React from 'react'
import { Field, reduxForm } from 'redux-form'
import style from './Posts.module.css'
import Post from './Post/Post'
import { Textarea } from '../../../common/FormsControls/FormsControls'
import { maxLength, required } from '../../../utils/validators/validators'

const Posts = React.memo(({ posts, addPost }) => {
	return (
		<div>
			<AddNewPostForm onSubmit={values => addPost(values.newPostText)} />
			{posts.map(post => (
				<Post key={post.id} {...post} />
			))}
		</div>
	)
})

const maxLength10 = maxLength(10)

let AddNewPostForm = ({ handleSubmit }) => {
	return (
		<form className={style.myPosts} onSubmit={handleSubmit}>
			<Field component={Textarea} placeholder='write message' validate={[required, maxLength10]} name='newPostText' />
			<button>Add post</button>
		</form>
	)
}

AddNewPostForm = reduxForm({ form: 'AddNewPostForm' })(AddNewPostForm)

export default Posts
