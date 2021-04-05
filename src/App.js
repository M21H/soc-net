import { Route, Switch } from 'react-router'
import './App.css'
import DialogsContainer from './components/Dialogs/DialosContainer'
import Header from './components/Header/Header'
import ProfileContainer from './components/Profile/ProfileContainer'
import Sidebar from './components/Sidebar/Sidebar'
import TopSearchForm from './components/TopSearchForm/TopSearchForm'
import UsersContainer from './components/Users/UsersContainer'

function App() {
  return (
    <div className='app'>
      <Sidebar />
      <div className='app__main'>
        <TopSearchForm />
        <Header />
        <Switch>
          <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
          <Route path='/dialogs' render={() => <DialogsContainer />} />
          <Route path='/users' render={() => <UsersContainer />} />
        </Switch>
      </div>
    </div>
  )
}

export default App
