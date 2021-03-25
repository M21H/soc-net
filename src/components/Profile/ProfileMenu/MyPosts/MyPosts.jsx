import React from 'react'
import style from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = props => {
  let postItem = props.posts.map(p => (
    <Post message={p.message} likeCount={p.likeCount} id={p.id} key={p.id} />
  ))

  let newPostElement = React.createRef()

  let onChange = () => {
    let text = newPostElement.current.value
    props.updateNewPost(text)
    // props.dispatch(updateNewPostAC(text))
  }

  let onAddPost = () => {
    props.addPost()
    // props.dispatch(addPostAC())
  }

  return (
    <div className={style.myPosts}>
      <textarea
        ref={newPostElement}
        placeholder='write message'
        onChange={onChange}
        value={props.newPostText}
      ></textarea>
      <button onClick={onAddPost}>Add post</button>
      {postItem}
    </div>
  )
}

export default MyPosts
