import {API_BASE_URL} from './config'
import axios from 'axios';

const login = (token) => ({
    type: 'LOGIN_USER',
    token
});

export const startLogin = (userInfo = {}) => {
    return (dispatch) => {
        console.log("userInfo", userInfo);
        console.log("API_BASE_URL", API_BASE_URL);

        return axios.post(
            `${API_BASE_URL}/auth/login`,
            userInfo,
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            })
            .then(data => {
                console.log(data.data)
                return dispatch(login({
                    token: data['access_token']
                }))
            })
    }
};