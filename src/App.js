import React from 'react'
import { Suspense } from 'react'
import { connect } from 'react-redux'
import { Redirect, Route, Switch, withRouter } from 'react-router'
import { compose } from 'redux'
import './App.css'
import Preloader from './common/Preloader/Preloader'
import Header from './components/Header/Header'
import Login from './components/Login/Login'
import Sidebar from './components/Sidebar/Sidebar'
import TopSearchFormContainer from './components/TopSearchForm/TopSearchFormContainer'
import { initializeApp } from './redux/app_reducer'

const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialosContainer'))
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'))

class App extends React.Component {
	componentDidMount() {
		this.props.initializeApp()
	}

	render() {
		if (!this.props.initialized) {
			return <Preloader />
		}

		return (
			<div className='app'>
				<Sidebar />
				<div className='app__main'>
					<TopSearchFormContainer />
					<Header />
					<Suspense fallback={<div>Loading...</div>}>
						<Switch>
							<Redirect exact from='/' to='/profile' />
							<Route path='/profile/:userId?' render={() => <ProfileContainer />} />
							<Route path='/dialogs' render={() => <DialogsContainer />} />
							<Route path='/dialogs' render={() => <DialogsContainer />} />
							<Route path='/users' render={() => <UsersContainer />} />
							<Route path='/login' component={Login} />
							<Route path='*' render={() => <div>404 NOT FOUND</div>} />
						</Switch>
					</Suspense>
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	initialized: state.app.initialized,
})

export default compose(withRouter, connect(mapStateToProps, { initializeApp }))(App)
