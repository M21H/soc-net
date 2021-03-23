import React from 'react'
import style from './MessageSender.module.css'

const MessageSender = props => {
 
  let newPostElement = React.createRef()

  let onChange = () => {
    let text = newPostElement.current.value
    props.updateNewPostChange(text)
  }

  let addPost = () => {
    props.addPost()
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
