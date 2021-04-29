import React from 'react'
import { connect } from 'react-redux'
import { Route, Switch, withRouter } from 'react-router'
import { compose } from 'redux'
import './App.css'
import Preloader from './common/Preloader/Preloader'
import DialogsContainer from './components/Dialogs/DialosContainer'
import Header from './components/Header/Header'
import Login from './components/Login/Login'
import ProfileContainer from './components/Profile/ProfileContainer'
import Sidebar from './components/Sidebar/Sidebar'
import TopSearchFormContainer from './components/TopSearchForm/TopSearchFormContainer'
import UsersContainer from './components/Users/UsersContainer'
import { initializeApp } from './redux/app_reducer'

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
          <Switch>
            <Route
              path='/profile/:userId?'
              render={() => <ProfileContainer />}
            />
            <Route path='/dialogs' render={() => <DialogsContainer />} />
            <Route path='/users' render={() => <UsersContainer />} />
            <Route path='/login' component={Login} />
          </Switch>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  initialized: state.app.initialized,
})


//withRouter not necessarily
export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App)
