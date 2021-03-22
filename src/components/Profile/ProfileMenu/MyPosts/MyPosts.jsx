import React from 'react'
import MessageSender from './MessageSender/MessageSender'
import style from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {
  let postItem = props.posts.map(p => (
    <Post message={p.message} likeCount={p.likeCount} id={p.id} key={p.id} />
  ))

  return (
    <div className={style.myPosts}>
      <MessageSender />
      {postItem}
    </div>
  )
}

export default MyPosts
