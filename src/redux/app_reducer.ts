import { getAuthUserData } from './auth_reducer'

const INITIALIZED_SUCCESS = 'soc-net/app/INITIALIZED_SUCCESS'

export type InitialStateType = {
	initialized: boolean
}

const initialState: InitialStateType = {
	initialized: false,
}

const appReducer = (state = initialState, action: any): InitialStateType => {
	switch (action.type) {
		case INITIALIZED_SUCCESS:
			return {
				...state,
				initialized: true,
			}
		default:
			return state
	}
}

type InitializedSuccessActionType = {
	type: typeof INITIALIZED_SUCCESS
}

const initializedSuccess = (): InitializedSuccessActionType => ({
	type: INITIALIZED_SUCCESS,
})


export const initializeApp = () => (dispatch: any) => {
	let promise = dispatch(getAuthUserData())
	promise.then(() => {
		dispatch(initializedSuccess())
	})
}

export default appReducer
