import ReactDOM from 'react-dom'
import reportWebVitals from './reportWebVitals'
import { App } from './App'
import { store } from './redux/store'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import './index.css'

ReactDOM.render(
	<BrowserRouter>
		<Provider store={store}>
			<App />
		</Provider>
	</BrowserRouter>,
	document.getElementById('root')
)

reportWebVitals()
