export default (state = {}, action = {}) => {
    return { ...action.user };
};