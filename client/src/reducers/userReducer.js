import { CREATE_USER, EDIT_USER, DELETE_USER, GET_USERS } from "../actions/types";

const initialState = {
    users: [],
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
        default:
            return state
    }
}