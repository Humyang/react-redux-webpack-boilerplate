import React, { Component } from 'react';
import { Provider } from 'react-redux';
import App from './App.jsx';

import routes from '../routes.js'

export default class Root extends Component {
  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <Router history={hashHistory} routes={routes} />
      </Provider>
    );
  }
}
