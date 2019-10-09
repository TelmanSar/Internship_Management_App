import {API_BASE_URL} from '../general/config';
import axios from 'axios';

const addTopic = (topic) => ({
    type: 'ADD_TOPIC',
    topic
});

export const startAddTopic = (topic) => {
    return (dispatch) => {
        return axios.post(API_BASE_URL + '/topics', {...topic})
            .then(() => dispatch(addTopic({...topic})))
    }
};


const getTopics = (topics) => ({
    type: 'GET_TOPICS',
    topics
});

export const startGetTopics = () => {
    return (dispatch) => {
        const topics = [];
        return axios.get(API_BASE_URL + '/topics')
            .then(data => {
                topics.push(...data.data);
                dispatch(getTopics(topics))
            });
    };
};


const updateTopic = (id, updates) => ({
    type: 'UPDATE_TOPIC',
    id,
    updates
});

export const startUpdateTopic = (id, updates) => {
    return (dispatch) => {
        return axios.put(API_BASE_URL + '/topics/' + id, {
            ...updates
        }).then(() => {
            dispatch(updateTopic(id, updates));
        });
    };
};


const removeTopic = ({id}) => ({
    type: 'REMOVE_TOPIC',
    id
});

export const startRemoveTopic = ({id}) => {
    return (dispatch) => {
        return axios.delete(API_BASE_URL + '/topics/' + id)
            .then(() => {
                dispatch(removeTopic({id}));
            })
    }
};

