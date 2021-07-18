import profileReducer, { actions, InitialStateType } from '../redux/profile_reducer'

it('length of posts should be incremented', () => {
	const state: InitialStateType = {
		posts: [
			{ id: 0, message: 'postMessage', likeCount: 32 },
			{ id: 1, message: 'postMessage', likeCount: 33 },
			{ id: 2, message: 'postMessage', likeCount: 1 },
			{ id: 3, message: 'postMessage', likeCount: 100 },
		],
		profile: null,
		userStatus: '',
		newPostText: '',
	}

	const action = actions.addPost('some text for new post')
	const newState = profileReducer(state, action)
	
	expect(newState.posts.length).toBe(5)
})
