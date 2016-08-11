import React, { Component } from 'react';
import { Provider } from 'react-redux';
import App from './App.jsx';
import {Router} from 'react-router'
import routes from '../../modules/routes.js'
export default class Root extends Component {
  render() {
    const { store,history } = this.props;
    return (
      <Provider store={store}>
        <Router history={history} routes={routes} />
      </Provider>
    );
  }
}
