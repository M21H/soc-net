const SEND_MESSAGE = 'SEND_MESSAGE'

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {
	switch (action.type) {
		case SEND_MESSAGE:
			let newMessage = {
				id: 4,
				message: action.newMessageText,
			}
			return {
				...state,
				messages: [...state.messages, newMessage],
			}
		default:
			return state
	}
}

export const sendMessage = newMessageText => ({
	type: SEND_MESSAGE,
	newMessageText,
})

export default dialogsReducer
