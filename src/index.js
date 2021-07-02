import React from 'react'
import ReactDOM from 'react-dom'
import reportWebVitals from './reportWebVitals'
import './index.css'
import { App } from './App'
import store from './redux/store'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

ReactDOM.render(
	// <React.StrictMode>
	<HashRouter>
		<Provider store={store}>
			<App />
		</Provider>
	</HashRouter>,
	// </React.StrictMode>,
	document.getElementById('root')
)

reportWebVitals()
