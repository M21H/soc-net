import { Route, Switch } from 'react-router'
import './App.css'
import Dialogs from './components/Dialogs/Dialogs'
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
            render={() => (
              <Profile
                dispatch={props.dispatch}
                profilePage={props.state.profilePage}
              />
            )}
          />
          <Route
            path='/dialogs'
            render={() => (
              <Dialogs
                dispatch={props.dispatch}
                dialogs={props.state.dialogsPage.dialogs}
                messages={props.state.dialogsPage.messages}
                newMessageText={props.state.dialogsPage.newMessageText}
              />
            )}
          />
        </Switch>
      </div>
    </div>
  )
}

export default App
