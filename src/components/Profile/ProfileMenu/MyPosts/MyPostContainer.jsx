import React from 'react'
import { addPostAC, updateNewPostAC } from '../../../../redux/profile_reducer'
import MyPosts from './MyPosts'

const MyPostContainer = props => {
  let state = props.store.getState()

  let onChange = text => {
    let action = updateNewPostAC(text)
    props.store.dispatch(action)
  }

  let addPost = () => {
    props.store.dispatch(addPostAC())
  }

  return (
    <MyPosts
      updateNewPost={onChange}
      addPost={addPost}
      posts={state.profilePage.posts}
      newPostText={state.profilePage.newPostText}
    />
  )
}

export default MyPostContainer
