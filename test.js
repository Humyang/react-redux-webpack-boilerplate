let i = 0;
const logger = store=>next=>action=> {
    // i++;
    store.index ++;
    console.log("store index b:"+store.index);
  let result = next(action)
   // next++;
  // console.log(next);
 console.log("store index a :"+store.index);
  return result
}
const logger2 = store=>next=>action=> {
    // i++;
    // store.index =i;
        store.index ++;
console.log("store index b :"+store.index);
  let result = next(action)
   // next++;
  // console.log(next);
 console.log("store index a :"+store.index);
  return result
}
const logger3 = store=>next=>action=> {
    // i++;
    // store.index =i;
        store.index ++;
         console.log("store index b:"+store.index);
  let result = next(action)
   // next++;
  // console.log(next);
 console.log("store index a:"+store.index);
  return result
}
function applyMiddleware(store, middlewares) {

  middlewares = middlewares.slice()
  middlewares.reverse()

  let dispatch = store.dispatch;
    // let i = 0;
  middlewares.forEach(middleware =>
      {
        // store.index = i++;
        i++;
        store.index =i;
        dispatch = middleware(store)(dispatch);
        console.log("store index2 :"+store.index);
        // dispatch = 5;
    }
  )

  return Object.assign({}, store, { dispatch })
}

let store = {
    index:0,
    dispatch:function(){
        console.log(111);
    },
    getState:function(){
        return this.dispatch;
    }
}

let newStore = applyMiddleware(store,[logger,logger2,logger3]);

console.log("store index3 :"+store.index);
newStore.dispatch('my_action');
