import {createStore,applyMiddleware,compose} from 'redux';
import {persistState} from 'redux-devtools';
import rootReducer from '../reducer';
import DevTools from '../container/DevTools.jsx';


const enhancer = compose(
    applyMiddleware(),
    DevTools.instrument(),
    persistState(getDebugSessionKey())
);

function getDebugSessionKey(){
    const matches = window.location.href.match(/[?&]debug_session=([^&#]+)\b/);
    return (matches && matches.length > 0)? matches[1]:null;
}

export default function configureStore(initialState){
    const store = createStore(rootReducer,initialState,enhancer);

    if (module.hot) {
        module.hot.accept('../reducer',()=>{
            store.replaceReducer(require('../reducer'))
        })
    }
    return store;
}
