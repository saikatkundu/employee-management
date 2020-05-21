import { SubmissionError } from 'redux-form'
import { loginData } from '../../data/loginData'
import { CHECK_SESSION, CHECK_SESSION_FAILURE, CHECK_SESSION_SUCCESS, CLEAR_SESSION, USER_LOGIN, USER_LOGIN_FAILURE, USER_LOGIN_SUCCESS } from './authTypes'

export const loginUser = (values) => {
    console.log(values)
    return dispatch => {

        dispatch({
            type: USER_LOGIN
        })
        if (loginData.username !== values.username) {
            dispatch({
                type: USER_LOGIN_FAILURE,
                authError: 'User does not exist'
            })
            throw new SubmissionError({
                username: 'User does not exist',
                _error: 'Login failed!'
            })
        } else if (values.password !== loginData.password) {
            dispatch({
                type: USER_LOGIN_FAILURE
            })
            throw new SubmissionError({
                password: 'Wrong password',
                _error: 'Login failed!'
            })
        } else {
            localStorage.setItem("hasSession", true)
            dispatch({
                type: USER_LOGIN_SUCCESS
            })
        }
    }

}

export const checkSession = () => {
    return dispatch => {
        dispatch({ type: CHECK_SESSION })
        if (localStorage.getItem("hasSession")) {
            dispatch({ type: CHECK_SESSION_SUCCESS })
        } else {
            dispatch({ type: CHECK_SESSION_FAILURE })
        }
    }
}

export const clearSession = () => {
    return dispatch => {
        localStorage.removeItem("hasSession")
        dispatch({ type: CLEAR_SESSION })
    }
}