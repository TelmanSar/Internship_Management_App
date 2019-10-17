import {API_BASE_URL} from '../general/config';
import axios from 'axios';
import {history} from "../routes/AppRouter";


const addLesson = (lesson) => ({
    type: 'ADD_LESSON',
    lesson
});

//todo decide how to push back to other directory
export const startAddLesson = (lesson) => {
    return (dispatch) => {
        return axios.post(API_BASE_URL + '/lessons', {...lesson})
            .then(() => dispatch(addLesson({...lesson})))
            .then(() => {
                history.push("/lessons/");
            })
    }
};


const getLessons = (lessons) => ({
    type: 'GET_LESSONS',
    lessons
});

export const startGetLessons = (id) => {
    return (dispatch) => {
        const lessons = [];
        return axios.get(API_BASE_URL + '/lessons/' + id)
            .then(data => {
                lessons.push(...data.data);
                dispatch(getLessons(lessons))
            });
    };
};


const updateLesson = (id, updates) => ({
    type: 'UPDATE_LESSON',
    id,
    updates
});

export const startUpdateLesson = (id, updates) => {
    return (dispatch) => {
        return axios.put(API_BASE_URL + '/lessons/' + id, {
            ...updates
        }).then(() => {
            dispatch(updateLesson(id, updates));
        }).then(() => {
            history.push("/lessons");
        });
    };
};


const removeLesson = ({id}) => ({
    type: 'REMOVE_LESSON',
    id
});

export const startRemoveLesson = ({id}) => {
    return (dispatch) => {
        return axios.delete(API_BASE_URL + '/lessons/' + id)
            .then(() => {
                dispatch(removeLesson({id}));
            })
    }
};

