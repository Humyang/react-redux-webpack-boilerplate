import React, { Component } from 'react';
import { Provider } from 'react-redux';
import App from './APP.jsx';
import DevTools from './DevTools.jsx';

export default class Root extends Component {
  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
          <div style={{height:'100%'}}>
              <App />
              <DevTools />
          </div>
      </Provider>
    );
  }
}
