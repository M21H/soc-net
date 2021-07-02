import React from 'react'
import { DIALOGS_ROUTE, LOGIN_ROUTE, PROFILE_ROUTE, USERS_ROUTE } from './const'

const ProfileContainer = React.lazy(() => import('../components/Profile/ProfileContainer'))
const DialogsContainer = React.lazy(() => import('../components/Dialogs/DialogsContainer'))
const UsersContainer = React.lazy(() => import('../components/Users/UsersContainer'))
const Login = React.lazy(() => import('../pages/Login/Login'))

export const authRoutes = [
	{
		path: PROFILE_ROUTE + '/:userId?',
		Component: ProfileContainer,
	},
	{
		path: DIALOGS_ROUTE,
		Component: DialogsContainer,
	},
]

export const publicRoutes = [
	{
		path: USERS_ROUTE,
		Component: UsersContainer,
	},
	{
		path: LOGIN_ROUTE,
		Component: Login,
	},
]
