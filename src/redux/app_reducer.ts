import { getAuthUserData } from './auth_reducer'
import { BaseThunkType, InferActionsTypes } from './store'

export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType>

const initialState = {
	initialized: false,
}

const appReducer = (state = initialState, action: ActionsType): InitialStateType => {
	switch (action.type) {
		case 'APP:INITIALIZED_SUCCESS':
			return {
				...state,
				initialized: true,
			}
		default:
			return state
	}
}

export const actions = {
	initializedSuccess: () => ({
		type: 'APP:INITIALIZED_SUCCESS' as const,
	}),
}

export const initializeApp = (): ThunkType => async dispatch => {
	const promise = dispatch(getAuthUserData())
	promise.then(() => {
		dispatch(actions.initializedSuccess())
	})
}

export default appReducer
