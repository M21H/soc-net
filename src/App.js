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
                profilePage={props.state.profilePage}
                addPost={props.addPost}
                updateNewPostChange={props.updateNewPostChange}
              />
            )}
          />
          <Route
            path='/dialogs'
            render={() => <Dialogs dialogsPage={props.state.dialogsPage} />}
          />
        </Switch>
      </div>
    </div>
  )
}

export default App
