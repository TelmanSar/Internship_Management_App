import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
//import usersReducer from '../reducers/users';
import authReducer from '../reducers/authentication';
import axios from 'axios';

axios.interceptors.request.use(request => {
    console.log("axios interceptor request",request.url);

    const token = localStorage.getItem('access-token');
    if(token){
        request.headers['authorization'] = `Bearer ${token}`;
    }
    request.headers['Content-Type'] = 'application/json';
    return request;
});

axios.interceptors.response.use(response => {
    console.log("axios interceptor response" , response.headers['authorization']);
    const token = response.headers['authorization'];
    console.log(token);
    if(token){
        localStorage.setItem('access-token', token)
    }
    return response;
});

export default () => {
    return createStore(
        combineReducers({
            auth: authReducer,
            // users: usersReducer,
        }),
        applyMiddleware(thunk)
    );
};




