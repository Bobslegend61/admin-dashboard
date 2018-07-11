import { EDIT_USER, DELETE_USER, GET_USERS, A_USER } from "../actions/types";

const initialState = {
    users: [],
    user: {},
    loggedIn: false
}

export default (state = initialState, { type, payload }) => {
    switch(type) {
        case GET_USERS:
            return {
                ...state,
                users: payload,
                loggedIn: true
            };
        case DELETE_USER:
            return {
                ...state,
                users: state.users.filter(user => user.id !== payload)
            }
        case EDIT_USER:
            return {
                ...state,
                users: payload
            }
        case A_USER:
            return {
                ...state,
                user: state.users.filter(user => Number(user.id) === Number(payload))[0]
            }
        default:
            return state
    }
}