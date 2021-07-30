import { applyMiddleware, combineReducers, createStore, compose, Action } from 'redux'
import thunkMiddleware, { ThunkAction } from 'redux-thunk'
import { reducer as form } from 'redux-form'
import { profilePage, dialogsPage, usersPage, app, auth, chat } from './index'

const rootReducer = combineReducers({ profilePage, dialogsPage, usersPage, auth, app, form, chat })

type RootReducerType = typeof rootReducer

export type AppStateType = ReturnType<RootReducerType>

export type InferActionsTypes<T> = T extends { [key: string]: (...args: any[]) => infer U } ? U : never

export type BaseThunkType<A extends Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)))
// @ts-ignore
window.store = store

export default store
