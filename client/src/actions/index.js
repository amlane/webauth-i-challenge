import axios from 'axios';

export const REGISTER_START = "REGISTER_START";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

export const registerNewUser = creds => dispatch => {
    dispatch({ type: REGISTER_START })
    return axios 
    .post(`http://localhost:5175/api/auth/register`, creds)
    .then(res => {
        console.log("response1:", res)
        localStorage.setItem(
            'token',
            res.data.token
        )
        dispatch({ type: REGISTER_SUCCESS, payload: res.data })
    })
    .catch(err => {
        console.log(err)
    })
}

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const loginUser = creds => dispatch => {
    dispatch({ type: LOGIN_START })
    return axios
    .post(`http://localhost:5175/api/auth/login`, creds)
    .then(res => {
        console.log("response2:", res)
        localStorage.setItem(
            'token',
            res.data.token
        )
        dispatch({ type: LOGIN_SUCCESS, payload: res.data })
    })
    .catch(err => {
        console.log('error: ', err)
    })
}