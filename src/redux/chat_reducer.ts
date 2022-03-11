//@ts-nocheck

import { Dispatch } from 'redux'
import { FormAction } from 'redux-form'
import { chatAPI, ChatMessageType } from '../APIServices/chatAPI'
import { BaseThunkType, InferActionsTypes } from './store'

export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType | FormAction>

const initialState = {
	messages: [] as ChatMessageType[]
}

const chatReducer = (state = initialState, action: ActionsType): InitialStateType => {
	switch (action.type) {
		case 'CHAT:SET_MESSAGES':
			return {
				...state,
				messages: [...state.messages, ...action.payload]
			}
		default:
			return state
	}
}

export const actions = {
	setMessages: (messages: ChatMessageType[]) => ({
		type: 'CHAT:SET_MESSAGES',
		payload: messages
	}) as const
}

let _newMessageHandler: ((messages: ChatMessageType[]) => void) | null = null

const newMessageHandlerCreator = (dispatch: Dispatch) => {
	if (_newMessageHandler === null) {
		_newMessageHandler = (messages) => {
			dispatch(actions.setMessages(messages))
		}
		return _newMessageHandler
	}
}


export const startMessagesListening = (): ThunkType => async dispatch => {
	chatAPI.start()
	chatAPI.subscribe(newMessageHandlerCreator(dispatch))
}

export const stopMessagesListening = (): ThunkType => async dispatch => {
	chatAPI.unsubscribe(newMessageHandlerCreator(dispatch))
	chatAPI.stop()
}

export const sendMessage = (message: string): ThunkType => async dispatch => {
	chatAPI.sendMessage(message)
}

export default chatReducer
