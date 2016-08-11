import React, { Component } from 'react';
import { Provider } from 'react-redux';
import App from './App.jsx';

// import SecondView from './views/SecondView.jsx';

import DevTools from './DevTools.jsx';

import {Router} from 'react-router'

import routes from '../../modules/routes.js'

class Root extends Component {

    // getChildren(){
    //     return {
    //         router:browserHistory
    //     }
    // }


  render() {
    const { store,history } = this.props;
    return (
      <Provider store={store}>
          <div >
            <Router history={history} routes={routes} />
              <DevTools />
          </div>
      </Provider>
    );
  }
}
// Root.childContextTypes = {
//     type:React.PropTypes.object
// };
export default Root
