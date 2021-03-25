import React from 'react'
import { addPostAC, updateNewPostAC } from '../../../../../redux/state'
import style from './MessageSender.module.css'

//rename MessageSender to PostSender

const MessageSender = props => {
  let newPostElement = React.createRef()

  let onChange = () => {
    let text = newPostElement.current.value
    props.dispatch(updateNewPostAC(text))
  }

  let addPost = () => {
    props.dispatch(addPostAC())
  }

  return (
    <div className={style.messageSender}>
      <textarea
        ref={newPostElement}
        placeholder='write message'
        onChange={onChange}
        value={props.newPostText}
      ></textarea>
      <button onClick={addPost}>Add post</button>
    </div>
  )
}

export default MessageSender
