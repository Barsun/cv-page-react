import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Router, Route } from 'react-router'
import createHistory from 'history/createBrowserHistory'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import mainReducer from './Reducers'
import watchFetchSearchData from './Sagas.js'


import './index.css';

//history 
const history = createHistory()

//saga middleware
const sagaMiddleware = createSagaMiddleware()

//redux store with saga middleware
const store = createStore(
  mainReducer,
  applyMiddleware(sagaMiddleware)
)
// activate the saga(s)
sagaMiddleware.run(watchFetchSearchData)

//fetch initial data
store.dispatch({type: 'FETCH_SEARCH_DATA'})


ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <div>
        <Route path='/' component={App} />
      </div>
    </Router>
    </Provider>,
    document.getElementById('root')
);
