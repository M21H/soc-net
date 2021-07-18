import React, { Suspense } from 'react'

import { Redirect, Route, Switch } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import Preloader from './common/Preloader/Preloader'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import TopSearchForm from './components/TopSearchForm/TopSearchForm'
import { NotFound } from './pages'
import { initializeApp } from './redux/app_reducer'
import { authRoutes, publicRoutes } from './routes/routes'
import { LOGIN_ROUTE, MAIN_ROUTE, PROFILE_ROUTE } from './routes/const'
import { AppStateType } from './redux/store'

export const App = () => {
	const dispatch = useDispatch()
	const { initialized } = useSelector(({ app }: AppStateType) => app)
	const { isAuth } = useSelector(({ auth }: AppStateType) => auth)

	React.useEffect(() => {
		dispatch(initializeApp())
	}, [])

	if (!initialized) {
		return <Preloader />
	}

	return (
		<div>
			<Sidebar />
			<div style={{ marginLeft: 70 }}>
				<TopSearchForm />
				<Header />
				<Suspense fallback={<div>Loading...</div>}>
					<Switch>
						<Redirect exact from={MAIN_ROUTE} to={PROFILE_ROUTE} />
						{isAuth &&
							authRoutes.map(({ path, Component }) => <Route key={path} path={path} component={Component} exact />)}

						{publicRoutes.map(({ path, Component }) => (
							<Route key={path} path={path} component={Component} exact />
						))}
						<Redirect to={LOGIN_ROUTE} />
						<Route path='*' component={NotFound} />
					</Switch>
				</Suspense>
			</div>
		</div>
	)
}
