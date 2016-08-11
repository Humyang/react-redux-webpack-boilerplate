import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import {
  SELECT_SUBREDDIT, INVALIDATE_SUBREDDIT,
  REQUEST_POSTS, RECEIVE_POSTS
} from '../actions/action.js'

 export function selectedSubreddit(state = 'reactjs', action) {
    //  if (!action) {
    //      return state
    //  }
  switch (action.type) {
    case SELECT_SUBREDDIT:
      return action.subreddit
    default:
      return state
  }
}

 export function posts(state = {
  isFetching: false,
  didInvalidate: false,
  items: []
}, action) {
  switch (action.type) {
    case INVALIDATE_SUBREDDIT:
      return Object.assign({}, state, {
        didInvalidate: true
      })
    case REQUEST_POSTS:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case RECEIVE_POSTS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.posts,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}

 export function postsBySubreddit(state = {}, action) {
  switch (action.type) {
    case INVALIDATE_SUBREDDIT:
    case RECEIVE_POSTS:
    case REQUEST_POSTS:

      return Object.assign({}, state, {
        [action.subreddit]: posts(state[action.subreddit], action)
      })
    default:
      return state
  }
}

 export function setJumpUrl(state={},action){
    switch (action.type) {
        case 'SETURL':
            return Object.assign({}, state, {
                 value:action.url
            })
            break;
        default:
            return state
    }
}

// function wordList (state=['1','2','3'],action){
//     return state
// }

import {dataPanel,wordList} from './DataPanel.js'

const rootReducer = combineReducers({
  postsBySubreddit,
  selectedSubreddit,
  setJumpUrl,
  routing:routerReducer,
  wordList,
  dataPanel,
  count:()=>{
      return 0
  }
})
export default rootReducer

// export {
//     selectedSubreddit,
//     posts,
//     postsBySubreddit,
//     setJumpUrl
// }
