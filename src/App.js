import { Route, Switch } from 'react-router'
import './App.css'
import DialogsContainer from './components/Dialogs/DialosContainer'
import Header from './components/Header/Header'
import Login from './components/Login/Login'
import ProfileContainer from './components/Profile/ProfileContainer'
import Sidebar from './components/Sidebar/Sidebar'
import TopSearchFormContainer from './components/TopSearchForm/TopSearchFormContainer'
import UsersContainer from './components/Users/UsersContainer'

function App() {
  return (
    <div className='app'>
      <Sidebar />
      <div className='app__main'>
        <TopSearchFormContainer />
        <Header />
        <Switch>
          <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
          <Route path='/dialogs' render={() => <DialogsContainer />} />
          <Route path='/users' render={() => <UsersContainer />} />
          <Route path='/login' component={Login} />
        </Switch>
      </div>
    </div>
  )
}

export default App
