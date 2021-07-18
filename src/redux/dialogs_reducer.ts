import { InferActionsTypes } from './store'

export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>

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

const dialogsReducer = (state = initialState, action: ActionsType): InitialStateType => {
	switch (action.type) {
		case 'DIALOGS:SEND_MESSAGE':
			return {
				...state,
				messages: [...state.messages, { id: 4, message: action.newMessageText }],
			}
		default:
			return state
	}
}

export const actions = {
	sendMessage: (newMessageText: string) => ({ type: 'DIALOGS:SEND_MESSAGE', newMessageText } as const),
}

export default dialogsReducer
