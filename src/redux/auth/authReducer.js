import { CHECK_SESSION, CHECK_SESSION_FAILURE, CHECK_SESSION_SUCCESS, CLEAR_SESSION, USER_LOGIN, USER_LOGIN_FAILURE, USER_LOGIN_SUCCESS } from "./authTypes"

const initialState = {
    hasSession: false,
    loggingIn: false,
    checkingSession: true
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOGIN:
            return { ...state, loggingIn: true }
        case USER_LOGIN_SUCCESS:
            return {
                ...state,
                loggingIn: false,
                hasSession: true
            }
        case USER_LOGIN_FAILURE:
            return {
                ...state,
                loggingIn: false,
                hasSession: false
            }
        case CHECK_SESSION:
            return { ...state, checkingSession: true }

        case CHECK_SESSION_SUCCESS:
            return {
                ...state,
                checkingSession: false,
                hasSession: true
            }
        case CHECK_SESSION_FAILURE:
            console.log(action.authError);

            return {
                ...state,
                checkingSession: false,
                hasSession: false
            }
        case CLEAR_SESSION:
            return { ...state, hasSession: false }
        default:
            return state
    }
}

export default authReducer