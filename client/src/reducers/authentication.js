export default (state = {}, action = {}) => {
    switch (action.type) {
        case 'LOGIN_USER':
            return { ...action.authenticatedUser };
        default:
            return state;
    }
};