import { Route, Switch } from 'react-router'
import './App.css'
import DialogsContainer from './components/Dialogs/DialosContainer'
import Header from './components/Header/Header'
import Profile from './components/Profile/Profile'
import Sidebar from './components/Sidebar/Sidebar'
import TopSearchForm from './components/TopSearchForm/TopSearchForm'

function App(props) {
  return (
    <div className='app'>
      <Sidebar />
      <div className='app__main'>
        <TopSearchForm />
        <Header />
        <Switch>
          <Route
            path='/profile'
            render={() => <Profile store={props.store} />}
          />
          <Route
            path='/dialogs'
            render={() => <DialogsContainer store={props.store} />}
          />
        </Switch>
      </div>
    </div>
  )
}

export default App
