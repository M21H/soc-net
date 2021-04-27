import React from 'react'
import style from './Post.module.css'

const Post = ({message, likeCount}) => {
  //prosp = message, likeCount, id
  return <div className={style.post}>{message}
  <span>{likeCount}</span>
  </div>
}

export default Post
