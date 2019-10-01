import {API_BASE_URL} from '../data/config';
import axios from 'axios';

const login = (token) => ({
    type: 'LOGIN_USER',
    token
});

export const startLogin = (userCredentials = {}) => {
    return (dispatch) => {
        return axios.post(
            `${API_BASE_URL}/auth/login`,
            userCredentials)
            .then(data => {
                return dispatch(login({
                    token: data['access_token']
                }))
            })
    }
};