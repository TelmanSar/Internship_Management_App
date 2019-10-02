import axios from "axios";
import {API_BASE_URL} from "../data/config";


const getUser = (user) => ({
    type: 'GET_USER',
    user
});

export const startGetUser = (id) => {
    return (dispatch) => {
        return axios.get(API_BASE_URL + `/users/${id}`)
            .then(data => {
                const user = data.data;
                dispatch(getUser(user))
            });
    };
};
