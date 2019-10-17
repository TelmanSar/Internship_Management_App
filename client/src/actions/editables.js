import axios from "axios";
import {API_BASE_URL} from "../general/config";

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

const getTopic = (topic) => ({
    type: 'GET_TOPIC',
    topic
});

export const startGetTopic = (id) => {
    return (dispatch) => {
        return axios.get(API_BASE_URL + `/topics/${id}`)
            .then(data => {
                const topic = data.data;
                dispatch(getTopic(topic))
            });
    };
};