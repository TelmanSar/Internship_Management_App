import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/authentication';
import usersReducer from '../reducers/users'
import {runInterceptor}from '../data/config'

runInterceptor();

export default () => {
    return createStore(
        combineReducers({
            auth: authReducer,
            users: usersReducer
        }),
        applyMiddleware(thunk)
    );
};