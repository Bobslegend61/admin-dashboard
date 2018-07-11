import axios from "axios";
import { GET_USERS, EDIT_USER, CREATE_USER, DELETE_USER } from "./types";

export const getUsers = (username, password) => dispatch => {
    axios.post("http://localhost:4000/api/login", { username, password }).then(({ data: { success, data, msg } }) => {
        if(!success) {
            console.log(success)
        }else {
            dispatch({
                type: GET_USERS,
                payload: data
            })
        }
    })
}