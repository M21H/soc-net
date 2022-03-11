import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import { useAppSelector } from '../redux/store'
import { RouteName } from './routes'
import { authRoutes, publicRoutes } from './routes'

const NotFound = React.lazy(() => import('../pages/NotFound/NotFound'))

export const AppRoutes: React.FC = () => {
	const { isAuth } = useAppSelector(({ auth }) => auth)

	return (
		<React.Suspense fallback={<div>Loading...</div>}>
			<>
				{isAuth ? (
					<Switch>
						<Redirect from={RouteName.LOGIN_ROUTE && RouteName.LOGIN_ROUTE} to={RouteName.PROFILE_ROUTE} />
						{authRoutes.map((route) => (
							<Route key={route.path} {...route} />
						))}
						<Route path='*' component={NotFound} />
					</Switch>
				) : (
					<Switch>
						<Redirect from={RouteName.MAIN_ROUTE} to={RouteName.PROFILE_ROUTE} exact />
						{publicRoutes.map((route) => (
							<Route key={route.path} {...route} />
						))}
						<Redirect to={RouteName.LOGIN_ROUTE} />
					</Switch>
				)}
			</>
		</React.Suspense>
	)
}
