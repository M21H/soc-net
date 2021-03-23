let rerenderEntireTree = () => {
  console.log('state changed')
}

let state = {
  profilePage: {
    posts: [
      { id: 0, message: 'postMessage', likeCount: 32 },
      { id: 1, message: 'postMessage', likeCount: 33 },
      { id: 2, message: 'postMessage', likeCount: 1 },
      { id: 3, message: 'postMessage', likeCount: 100 },
    ],
    newPostText: 'max',
  },

  dialogsPage: {
    dialogs: [
      { id: 0, name: 'max' },
      { id: 1, name: 'tom' },
      { id: 2, name: 'eeee' },
      { id: 3, name: 'yyyy' },
    ],
    messages: [
      { id: 0, message: 'message' },
      { id: 1, message: 'message' },
      { id: 2, message: 'message' },
      { id: 3, message: 'message' },
    ],
  },
}

export const addPost = () => {
  let newPost = {
    id: 4,
    message: state.profilePage.newPostText,
    likeCount: 0,
  }
  state.profilePage.posts.push(newPost)
  state.profilePage.newPostText = ''
  rerenderEntireTree(state)
}

export const updateNewPostChange = newText => {
  state.profilePage.newPostText = newText
  rerenderEntireTree(state)
}

export const subscribe = (observer) =>  {
  rerenderEntireTree = observer
} 

export default state
