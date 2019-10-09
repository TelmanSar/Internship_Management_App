import {API_BASE_URL} from '../general/config';
import axios from 'axios';

const addUser = (user) => ({
    type: 'ADD_USER',
    user
});

export const startAddUser = (user) => {
    return (dispatch) => {
        return axios.post(API_BASE_URL + '/users', {...user})
            .then(() => dispatch(addUser({...user})))
    }
};


const getUsers = (users) => ({
    type: 'GET_USERS',
    users
});

export const startGetUsers = () => {
    return (dispatch) => {
        const users = [];
        return axios.get(API_BASE_URL + '/users')
            .then(data => {
                users.push(...data.data);
                dispatch(getUsers(users))
            });
    };
};


const updateUser = (id, updates) => ({
    type: 'UPDATE_USER',
    id,
    updates
});

export const startUpdateUser = (id, updates) => {
    return (dispatch) => {
        return axios.put(API_BASE_URL + '/users/' + id, {
             ...updates
        }).then(() => {
            dispatch(updateUser(id, updates));
        });
    };
};


const removeUser = ({id}) => ({
    type: 'REMOVE_USER',
    id
});

export const startRemoveUser = ({id}) => {
    return (dispatch) => {
        return axios.delete(API_BASE_URL +'/users/' + id)
            .then(() => {
                dispatch(removeUser({id}));
            })
    }
};

