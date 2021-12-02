import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGOUT, USER_REGISTER_SUCCESS, USER_REGISTER_FAIL
} from "../constants/UserConstants";
import UsersService from "../../services/UsersService";

export const loginUser = (email, password) => (dispatch) => {
    dispatch({ type: USER_LOGIN_REQUEST })

    const data = {
        'username': email,
        'password': password
    }

    UsersService.loginUser(data)
        .then(response => {
            dispatch({
                type: USER_LOGIN_SUCCESS,
                payload: response.data
            })
            localStorage.setItem('userInfo', JSON.stringify(response.data))
        })
        .catch(error => {
            dispatch({
                type: USER_LOGIN_FAIL,
                payload: error.response && error.response.data.detail
                    ? error.response.data.detail
                    : error.message
            })
        })
}

export const registerUser = (name, email, password) => (dispatch) => {
    dispatch({ type: USER_LOGIN_REQUEST });

    const data = {
        'name': name,
        'email': email,
        'password': password
    }

    UsersService.registerUser(data)
        .then(response => {
            dispatch({
                type: USER_REGISTER_SUCCESS,
                payload: response.data
            })
        }).catch(error => {
            dispatch({
                type: USER_REGISTER_FAIL,
                payload: error.response && error.response.data.detail
                    ? error.response.data.detail
                    : error.message
            })
    })
}

export const logoutUser = () => (dispatch) => {
    localStorage.removeItem('userInfo');
    dispatch({
        type: USER_LOGOUT
    })
}
