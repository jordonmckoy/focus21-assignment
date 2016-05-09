import React from 'react'
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import App from './modules/app.jsx'
import Login from './modules/login.jsx'
import userReducer from './reducers/user-reducer.jsx'

// Create store and add reducers
const store = createStore(
  combineReducers({
    userReducer,
    routing: routerReducer
  })
)

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

render(
	<Provider store={store}>
		<Router history={history}>
			<Route path="/login" component={Login}/>
			<Route path="/" component={App}/>
		</Router>
	</Provider>,
	document.getElementById('mount')
);
