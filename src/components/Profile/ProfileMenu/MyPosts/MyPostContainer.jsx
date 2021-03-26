import React from 'react'
import { addPostAC, updateNewPostAC } from '../../../../redux/profile_reducer'
import StoreContext from '../../../../store_context'
import MyPosts from './MyPosts'

const MyPostContainer = () => {
  return (
    <StoreContext.Consumer>
      {store => {
        let state = store.getState()

        let onChange = text => {
          let action = updateNewPostAC(text)
          store.dispatch(action)
        }

        let addPost = () => {
          store.dispatch(addPostAC())
        }
        return (
          <MyPosts
            updateNewPost={onChange}
            addPost={addPost}
            posts={state.profilePage.posts}
            newPostText={state.profilePage.newPostText}
          />
        )
      }}
    </StoreContext.Consumer>
  )
}

export default MyPostContainer
