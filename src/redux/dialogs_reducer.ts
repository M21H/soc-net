const SEND_MESSAGE = 'soc-net/dialogs/SEND_MESSAGE'

export type InitialStateType = typeof initialState

type DialogType = {
	id: number
	name: string
}

type MessageType = {
	id: number
	message: string
}

const initialState = {
	dialogs: [
		{ id: 0, name: 'max' },
		{ id: 1, name: 'tom' },
		{ id: 2, name: 'eeee' },
		{ id: 3, name: 'yyyy' },
	] as Array<DialogType>,
	messages: [
		{ id: 0, message: 'message' },
		{ id: 1, message: 'message' },
		{ id: 2, message: 'message' },
		{ id: 3, message: 'message' },
	] as Array<MessageType>,
}

const dialogsReducer = (state = initialState, action: any): InitialStateType => {
	switch (action.type) {
		case SEND_MESSAGE:
			let newMessage = {
				id: 4,
				message: action.payload,
			}
			return {
				...state,
				messages: [...state.messages, newMessage],
			}
		default:
			return state
	}
}

export type SendMessageActionType = {
	type: typeof SEND_MESSAGE,
	payload: { newMessageText: string }

}

export const sendMessage = (newMessageText: string): SendMessageActionType => ({
	type: SEND_MESSAGE,
	payload: { newMessageText },
})

export default dialogsReducer
