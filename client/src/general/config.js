import axios from "axios";

export const API_BASE_URL = 'http://localhost:8000/api';

export function runInterceptor() {
    axios.interceptors.request.use(request => {

        const token = localStorage.getItem('access-token');
        if (token) {
            request.headers['authorization'] = `${token}`;
        }
        request.headers['Content-Type'] = 'application/json';
        request.headers['Accept'] = 'application/json';
        return request;
    });

    axios.interceptors.response.use(response => {
        const token = response.headers['authorization'];
        if (token) {
            localStorage.setItem('access-token', token)
        }
        return response;
    });

}
