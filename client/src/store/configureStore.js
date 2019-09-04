import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import usersReducer from '../reducers/users';


export default () => {
    return createStore(
        combineReducers({
            users: usersReducer,
        }),
        applyMiddleware(thunk)
    );
};