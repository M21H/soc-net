import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Preloader from './common/Preloader/Preloader'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import TopSearchForm from './components/TopSearchForm/TopSearchForm'
import { initializeApp } from './redux/app_reducer'
import { AppStateType } from './redux/store'
import { AppRoutes } from './routes/AppRoutes'

export const App = () => {
	const dispatch = useDispatch()
	const { initialized } = useSelector(({ app }: AppStateType) => app)

	React.useEffect(() => {
		dispatch(initializeApp())
	}, [])

	if (!initialized) return <Preloader />

	return (
		<>
			<Sidebar />
			<div style={{ marginLeft: 70 }}>
				<TopSearchForm />
				<Header />
				<AppRoutes />
			</div>
		</>
	)
}
