import {API_BASE_URL} from '../general/config';
import axios from 'axios';
import {history} from "../routes/AppRouter";


const login = (authenticatedUser) => {
    return {
        type: 'LOGIN_USER',
        authenticatedUser
    }
};

export const startLogin = (userCredentials = {}) => {
    return (dispatch) => {
        return axios.post(
            `${API_BASE_URL}/auth/login`,
            userCredentials)
            .then(
                () => (axios.get(`${API_BASE_URL}/auth/me`))
            ).then(meResponse => {
                localStorage.setItem('role_id',meResponse.data.role_id)
                return dispatch(login({
                    ...meResponse.data
                }))
            })
    }
};


const logOut = () => {
    return {
        type: 'LOGOUT_USER'
    }
};


export const startLogOut = () => {
    return dispatch => {
        return axios.post(`${API_BASE_URL}/auth/logout`)
            .then(() => {
                localStorage.removeItem('access-token');
                localStorage.removeItem('role_id');
                return dispatch(logOut())
            })
            .then(() => {
                history.push("/users");
            })
            .catch(() => {
                localStorage.removeItem('access-token');
                localStorage.removeItem('role_id');
            })
    }
};
