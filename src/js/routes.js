import React from 'react'
import { Router,Route } from 'react-router'
import App from './containers/App'
// import UserPage from './containers/UserPage'
// import RepoPage from './containers/RepoPage'
import SecondView from './containers/views/SecondView.jsx'
import { browserHistory } from 'react-router'
export default (
    <Route path="/"  component={App}>
              <Route path="/secondview" component={SecondView} />
    </Route>
)
