import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { addPost, subscribe, updateNewPostChange } from './redux/state'
import { BrowserRouter } from 'react-router-dom'
import state from './redux/state'

let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state} addPost={addPost} updateNewPostChange={updateNewPostChange} />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  )
}

subscribe(rerenderEntireTree) 

rerenderEntireTree(state)
