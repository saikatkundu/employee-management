import { userData } from '../../data/userData'
import { FETCH_EMPLOYEE, FETCH_EMPLOYEE_FAILURE, FETCH_EMPLOYEE_SUCCESS } from "./employeeTypes"

export const fetchEmployee = () => {
    return dispatch => {
        dispatch({
            type: FETCH_EMPLOYEE
        })
        if (userData && userData.user) {
            dispatch({
                type: FETCH_EMPLOYEE_SUCCESS,
                payload: userData.user
            })
        } else {
            dispatch({
                type: FETCH_EMPLOYEE_FAILURE
            })
        }
    }
}