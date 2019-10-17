const initialState = {
    user: {},
    topic: {}
};

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case 'GET_USER':
            return {
                ...state,
                user: {...action.user}
            };
        case 'GET_TOPIC':
            return {
                ...state,
                topic: {...action.topic}
            };
        default:
            return state;
    }
};