import { VALID, LOGGED_OUT } from './../actions/action.jsx'

const userReducer = function(state = {status: 'LOGGED_OUT',filter: 'email'}, action) {
    if (typeof state === 'undefined') {
        return Object.assign({}, state, {
            status: 'LOGGED_OUT',
            filter: 'email'
        });
    }
    switch (action.type) {
        case 'LOGGED_OUT':
            console.log('logged out');

            return Object.assign({}, state, {
                status: action.type,
                filter: action.filter
            });
        case 'VALID_EMAIL':
            console.log('valid email');

            return Object.assign({}, state, {
                status: action.type,
                filter: action.filter
            });
        case 'VALID_LOGIN':
            console.log('valid credentials');

            return Object.assign({}, state, {
                status: action.type,
            });
        default:
            return state;
    }
};

export default userReducer;
