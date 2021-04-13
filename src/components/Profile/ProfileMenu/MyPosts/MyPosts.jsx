import React from 'react'
import style from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = props => {
  let postItem = props.posts.map(p => (
    <Post message={p.message} likeCount={p.likeCount} id={p.id} key={p.id} />
  ))

  let onChange = e => {
    let text = e.target.value
    props.updateNewPost(text)
  }

  let onAddPost = () => {
    props.addPost()
  }

  return (
    <div className={style.myPosts}>
      <textarea style={{outline: 'none', resize: 'none'}}
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
