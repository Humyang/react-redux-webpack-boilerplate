import React from 'react';
import ReactDom from 'react-dom';

// import thunkMiddleware from 'redux-thunk'
// import createLogger from 'redux-logger'
// const loggerMiddleware = createLogger()
import { createStore, applyMiddleware } from 'redux'
import { selectSubreddit, fetchPosts,fetchPostsIfNeeded } from './actions/action.js'
import rootReducer from './reducers/index.js'

import configStore from './store/configureStore.js';

import Root from './containers/Root.js';

import {browserHistory} from 'react-router'

import { syncHistoryWithStore } from 'react-router-redux'

require("file?name=index.html!../index.html");

require('../css/index.css');

// Grab the state from a global injected into server-generated HTML
const initialState = window.__INITIAL_STATE__
// console.log("initialState:");
// console.log(initialState);
const store = configStore(initialState);

const history = syncHistoryWithStore(browserHistory, store)
ReactDom.render(
    <Root store={store} history={history}/>,
    document.getElementById('app')
)

// console.log(store.getState());

// fetchPostsIfNeeded('reactjs')

// store.dispatch(selectSubreddit('reactjs'))
//
// store.dispatch(fetchPosts('reactjs')).then(() =>
//   console.log(store.getState())
// )
