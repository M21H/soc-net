import React from 'react'
// import { DIALOGS_ROUTE, LOGIN_ROUTE, PROFILE_ROUTE, USERS_ROUTE, CHAT_ROUTE } from '../utils/const'

const Profile = React.lazy(() => import('../pages/Profile/Profile'))
const Dialogs = React.lazy(() => import('../pages/Dialogs/Dialogs'))
const Users = React.lazy(() => import('../pages/Users/Users'))
const Login = React.lazy(() => import('../pages/Login/Login'))
const Chat = React.lazy(() => import('../pages/Chat/Chat'))

export enum RouteName {
	MAIN_ROUTE = '/',
	PROFILE_ROUTE = '/profile',
	DIALOGS_ROUTE = '/dialogs',
	USERS_ROUTE = '/users',
	LOGIN_ROUTE = '/login',
	CHAT_ROUTE = '/chat',
}

export const authRoutes = [
	{
		path: `${RouteName.PROFILE_ROUTE}/:userId?`,
		component: Profile,
		exact: true,
	},
	{
		path: RouteName.DIALOGS_ROUTE,
		component: Dialogs,
		exact: true,
	},
	{
		path: RouteName.USERS_ROUTE,
		component: Users,
		exact: false,
	},
	{
		path: RouteName.CHAT_ROUTE,
		component: Chat,
		exact: true,
	},

]

export const publicRoutes = [
	{
		path: RouteName.USERS_ROUTE,
		component: Users,
		exact: false,
	},
	{
		path: RouteName.LOGIN_ROUTE,
		component: Login,
		exact: true,
	},
]
