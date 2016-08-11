import {createStore,applyMiddleware,compose} from 'redux';
import rootReducer from '../reducers/index.js';

// Middleware you want to use in production
import thunkMiddleware from 'redux-thunk'

export default function configureStore(initialState){
    return createStore(rootReducer,initialState,applyMiddleware(
            thunkMiddleware// lets us dispatch() functions
          ))
}
