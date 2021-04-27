import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Textarea } from '../../../../common/FormsControls/FormsControls'
import { required, maxLenght } from '../../../../utils/validators/validators'
import style from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = ({ posts, addPost }) => {
  let postItem = posts.map(post => (
    <Post key={post.id} {...post} />
  ))

  let onAddPost = values => {
    addPost(values.newPostText)
  }

  return (
    <>
      <AddNewPostForm onSubmit={onAddPost} />
      {postItem}
    </>
  )
}

const maxLenght10 = maxLenght(10)

let AddNewPostForm = ({ handleSubmit }) => {
  return (
    <form className={style.myPosts} onSubmit={handleSubmit}>
      <Field
        component={Textarea}
        placeholder='write message'
        validate={[required, maxLenght10]}
        name={'newPostText'}
      />
      <button>Add post</button>
    </form>
  )
}

AddNewPostForm = reduxForm({ form: 'AddNewPostForm' })(AddNewPostForm)

export default MyPosts
