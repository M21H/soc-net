import React from 'react'
import { DIALOGS_ROUTE, LOGIN_ROUTE, PROFILE_ROUTE, USERS_ROUTE, CHAT_ROUTE } from './const'

const ProfileContainer = React.lazy(() => import('../pages/ProfileContainer'))
const Dialogs = React.lazy(() => import('../pages/Dialogs'))
const Users = React.lazy(() => import('../pages/Users'))
const Login = React.lazy(() => import('../pages/Login/Login'))
const Chat = React.lazy(() => import('../pages/Chat/Chat'))

export const authRoutes = [
	{
		path: `${PROFILE_ROUTE}/:userId?`,
		Component: ProfileContainer,
	},
	{
		path: DIALOGS_ROUTE,
		Component: Dialogs,
	},
	{
		path: CHAT_ROUTE,
		Component: Chat,
	},
]

export const publicRoutes = [
	{
		path: USERS_ROUTE,
		Component: Users,
	},
	{
		path: LOGIN_ROUTE,
		Component: Login,
	},
]
