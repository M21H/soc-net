import { Route, Switch } from 'react-router'
import './App.css'
import Header from './components/Header/Header'
import Profile from './components/Profile/Profile'
import Sidebar from './components/Sidebar/Sidebar'
import TopSearchForm from './components/TopSearchForm/TopSearchForm'

function App() {
  return (
    <div className='app'>
      <Sidebar />
      <div className='app__main'>
        <TopSearchForm />
        <Header />
        <Switch>
          <Route path='/profile' component={Profile}/>
        </Switch>

      </div>
    </div>
  )
}

export default App
