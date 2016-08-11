export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT';
export function selectSubreddit(subreddit){
    return {
        type:SELECT_SUBREDDIT,
        subreddit
    }
}


// when press a "refresh" button to update it
export const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT'
export function invalidateSubreddit(subreddit){
    return {
        type:INVALIDATE_SUBREDDIT,
        subreddit
    }
}




// when it's time to fetch the posts for some subreddit,we will dispatch a REQUEST_POSTS action
export const REQUEST_POSTS = 'REQUEST_POSTS'
export function requestPosts(subreddit){
    return {
        type:REQUEST_POSTS,
        subreddit
    }
}

// when the network request comes through,we will dispatch RECEIVE_POSTS

export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export function receivePosts(subreddit,json){

    return {
        type:RECEIVE_POSTS,
        subreddit,
        posts:json.data.children.map(child=>child.data),
        receivedAt:Date.now()
    }
}
import fetch from 'isomorphic-fetch'
// 我们的第一个 thunk action creator
// 尽管与其他的 creator 有些不一样，但你可以像其他 creator 一样使用：
// store.dispatch(fetchPosts('reactjs'))
export function fetchPosts(subreddit){

//Thunk 中间件固定处理格式，使你可以在 creator 内使用 dispatch (在返回的 function 中) 。

    return function(dispatch){

        // 先抛出一个 dispatch 通知应用程序状态需要更新
        // 这 API 的调用表明开始执行操作
        dispatch(requestPosts(subreddit));

        // thunk 中间件调用的这个方法可以返回值，
        // 他会被传递作为dispatch 方法的返回值

        // 在这个例子，我们返回 promise 。
        // 可以在调用 fetchPosts 的位置继续使用 then 处理结果。
        return fetch(`http://www.reddit.com/r/${subreddit}.json`)
            .then(response => response.json())
            .then(json=>

                // 我们可以 dispatch 多次
                // 这里，我们更新 app state 为 API 调用返回的结果
                // store.dispatch(fetchPosts('reactjs')).then(() =>
                //   console.log(store.getState())
                // )

                dispatch(receivePosts(subreddit,json))
            )
    }
}

function shouldFetchPosts(state, subreddit) {
  const posts = state.postsBySubreddit[subreddit]
  if (!posts) {
    return true
  } else if (posts.isFetching) {
    return false
  } else {
    return posts.didInvalidate
  }
}

export function fetchPostsIfNeeded(subreddit) {
  // Note that the function also receives getState()
  // which lets you choose what to dispatch next.

  // This is useful for avoiding a network request if
  // a cached value is already available.
console.log(222);
  return (dispatch, getState) => {

    if (shouldFetchPosts(getState(), subreddit)) {
      // Dispatch a thunk from thunk!
      console.log(111);
      return dispatch(fetchPosts(subreddit))
    } else {
      // Let the calling code know there's nothing to wait for.
      return Promise.resolve()
    }
  }
}


export function setJumpUrl(url){
    return {
        type:'SETURL',
        url
    }
}



// Fetches a page of stargazers for a particular repo.
// Bails out if page is cached and user didn’t specifically request next page.
// Relies on Redux Thunk middleware.
// export function loadStargazers(fullName, nextPage) {
//   return (dispatch, getState) => {
//     const {
//       nextPageUrl = `repos/${fullName}/stargazers`,
//       pageCount = 0
//     } = getState().pagination.stargazersByRepo[fullName] || {}
//
//     if (pageCount > 0 && !nextPage) {
//       return null
//     }
//
//     return dispatch(fetchStargazers(fullName, nextPageUrl))
//   }
// }
