import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/authentication';
import usersReducer from '../reducers/users';
import topicsReducer from '../reducers/topics';
import lessonsReducer from '../reducers/lessons';
import editablesReducer from '../reducers/editables';
import {runInterceptor}from '../general/config';

runInterceptor();

export default () => {
    return createStore(
        combineReducers({
            auth: authReducer,
            users: usersReducer,
            topics: topicsReducer,
            lessons: lessonsReducer,
            editables: editablesReducer
        }),
        applyMiddleware(thunk)
    );
};