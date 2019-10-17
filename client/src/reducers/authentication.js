export default (state = {}, action = {}) => {
    switch (action.type) {
        case 'LOGIN_USER':
            return { ...action.authenticatedUser };
        case 'LOGOUT_USER':
            return { };
        default:
            return state;
    }
};