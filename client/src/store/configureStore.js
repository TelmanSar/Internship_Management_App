import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
//import usersReducer from '../reducers/users';
import authReducer from '../reducers/authentication';
import {runInterceptor}from '../config/config'

runInterceptor();

export default () => {
    return createStore(
        combineReducers({
            auth: authReducer,
            // users: usersReducer,
        }),
        applyMiddleware(thunk)
    );
};




