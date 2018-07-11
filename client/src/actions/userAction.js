import axios from "axios";
import { GET_USERS, EDIT_USER, DELETE_USER, A_USER } from "./types";

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

export const getAUser = id => dispatch => {
    dispatch({
        type: A_USER,
        payload: id
    })
}

export const deleteUser = id => dispatch => {
    axios.delete(`http://localhost:4000/api/${ id }`).then(({ data: { id } }) => {
        dispatch({
            type: DELETE_USER,
            payload: id
        })
    })
}

export const editUser = ({ id, username, password }) => dispatch => {
    axios.put(`http://localhost:4000/api/edit/${ id }`, { username, password }).then(({ data: { success, data } }) => {
        dispatch({
            type: EDIT_USER,
            payload: data
        })
    })
}