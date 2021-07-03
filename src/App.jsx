import React from 'react'
import './App.css'
import { Suspense } from 'react'
import { Redirect, Route, Switch } from 'react-router'
import Preloader from './common/Preloader/Preloader'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import TopSearchForm from './components/TopSearchForm/TopSearchForm'
import { NotFound } from './pages'
import { initializeApp } from './redux/app_reducer'
import { useDispatch, useSelector } from 'react-redux'
import { authRoutes, publicRoutes } from './routes/routes'
import { LOGIN_ROUTE, PROFILE_ROUTE } from './routes/const'

export const App = () => {
	const dispatch = useDispatch()
	const { initialized } = useSelector(({ app }) => app)
	const { isAuth } = useSelector(({ auth }) => auth)

	React.useEffect(() => {
		dispatch(initializeApp())
	}, [])

	if (!initialized) {
		return <Preloader />
	}

	return (
		<div>
			<Sidebar />
			<div className='app__main'>
				<TopSearchForm />
				<Header />
				<Suspense fallback={<div>Loading...</div>}>
					<Switch>
						<Redirect exact from='/' to={PROFILE_ROUTE} />
						{isAuth &&
							authRoutes.map(({ path, Component }) => (
								<Route key={path} path={path} component={Component} exact />
							))}

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
