import {API_BASE_URL} from '../general/config';
import axios from 'axios';

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
                return dispatch(login({
                    ...meResponse.data
                }))
            })
    }
};