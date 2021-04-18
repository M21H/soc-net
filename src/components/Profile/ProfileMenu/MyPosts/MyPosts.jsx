import React from 'react'
import { Field, reduxForm } from 'redux-form'
import style from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = ({ posts, updateNewPost, addPost, newPostText }) => {
  let postItem = posts.map(p => (
    <Post message={p.message} likeCount={p.likeCount} id={p.id} key={p.id} />
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

let AddNewPostForm = ({ handleSubmit }) => {
  return (
    <form className={style.myPosts} onSubmit={handleSubmit}>
      <Field
        component={'textarea'}
        name={'newPostText'}
        placeholder='write message'
      />
      <button>Add post</button>
    </form>
  )
}

AddNewPostForm = reduxForm({ form: 'AddNewPostForm' })(AddNewPostForm)

export default MyPosts
