// require('react');
// require('react');
import React from 'react';
import ReactDOM from 'react-dom';

import Root from './container/Root';

import configureStore from './store/configureStore';

// require('../css/index.css');
import '../css/index.css';

// let state = null;
// try {
//     state = JSON.parse(localStorage.getItem('store'));
//
//     if(state.history === undefined){
//         state.history = [];
//     }
//     console.log('获取已有 store');
// } catch(e) {
//     state = {
//         content: [{text:''}],
//         history:[]
//     };
//     console.log('初始化 store');
// }
const store = configureStore(/*state*/);

ReactDOM.render(<Root store={store} ></Root>, document.getElementById('app'));
