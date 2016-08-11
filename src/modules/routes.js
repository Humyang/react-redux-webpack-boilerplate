import React from 'react'
import { Route,IndexRoute } from 'react-router'
import App from '../js/containers/App'
// import UserPage from './containers/UserPage'
// import RepoPage from './containers/RepoPage'
//
// import SecondView from '../js/containers/views/SecondView.jsx'
// // import ThirdlyVIew from '../js/containers/views/ThirdlyVIew.jsx'
// import Repos from '../js/containers/views/Repos.js'
// import Repo from '../js/containers/views/Repo.js'
import Home from '../js/containers/views/Home.js'
import Tabs from '../js/containers/views/Tabs.jsx'
//
// import WordList from '../js/containers/views/WordList/WordList.js'
// import DataPanel from '../js/containers/views/DataPanel/DataPanel.js'
// import InputWord from '../js/containers/views/DataPanel/InputWord.js'

export default (
    <Route path="/"  component={App}>
        <IndexRoute component={Home} />
        {/*<Route path="repos" components={Repos} >
            <Route path="/repos/:userName/:repoName" component={Repo} />
        </Route>*/}
        <Route path="tabs" component={Tabs} >
            <IndexRoute component={Home} />
            {/*<Route path="wordlist" component={WordList} />
            <Route path="datapanel" component={DataPanel} >

            </Route>
            <Route path="datapanel/add" component={InputWord} />*/}
        </Route>
        {/*<Route path="secondview" component={SecondView} />*/}
        {/*<Route path="/thirdlyview" component={ThirdlyVIew} />*/}
    </Route>
)
