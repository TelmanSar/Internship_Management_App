import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/authentication';
import {runInterceptor}from '../config/config'

runInterceptor();

export default () => {
    return createStore(
        combineReducers({
            auth: authReducer
        }),
        applyMiddleware(thunk)
    );
};