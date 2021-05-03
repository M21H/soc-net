import profileReducer, { addPostAC } from './profile_reducer'

it('lenght of posts should be incremented', () => {
  // 1.test data
  let action = addPostAC('super-puper test')
  let state = {
    posts: [
      { id: 0, message: 'postMessage', likeCount: 32 },
      { id: 1, message: 'postMessage', likeCount: 33 },
      { id: 2, message: 'postMessage', likeCount: 1 },
      { id: 3, message: 'postMessage', likeCount: 100 },
    ],
  }
  //2. action
  let newState = profileReducer(state, action)
  //3. expetation
  expect(newState.posts.lenght).toBe(5)
  expect(newState.posts[4]).toBe('super-puper test')
})
