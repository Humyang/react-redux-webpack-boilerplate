import {createStore,applyMiddleware,compose} from 'redux';
import rootReducer from '../reducer';

// Middleware you want to use in production
// const enhaner = applyMiddleware(p1,p2,p3);
const enhancer = compose(
    applyMiddleware(
      thunkMiddleware // lets us dispatch() functions
    )
    // DevTools.instrument(),
    // persistState(getDebugSessionKey())
);
export default function configureStore(initialState){
    return createStore(rootReducer,initialState,enhancer);
}
