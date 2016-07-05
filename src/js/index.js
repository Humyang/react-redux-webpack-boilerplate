// require('react');
// require('react');
import React from 'react';
import ReactDOM from 'react-dom';

import Root from './containers/Root';

import configureStore from './store/configureStore';
import {browserHistory} from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import '../css/index.css';

require("file?name=index.html!../index.html");

const store = configureStore(/*state*/);
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(<Root store={store} history={history}/>, document.getElementById('app'));
