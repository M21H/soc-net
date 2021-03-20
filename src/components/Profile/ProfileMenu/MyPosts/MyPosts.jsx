import React from 'react'
import MessageSender from './MessageSender/MessageSender'
import style from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {
  return (
    <div className={style.myPosts}>
      <MessageSender />
      <Post />
    </div>
  )
}

export default MyPosts
