import { FETCH_EMPLOYEE, FETCH_EMPLOYEE_FAILURE, FETCH_EMPLOYEE_SUCCESS } from "./employeeTypes"

const initialState = {
    employeeList: [],
    fetchingEmployee: false
}

const employeeReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_EMPLOYEE:
            return {
                ...state, fetchingEmployee: true
            }
        case FETCH_EMPLOYEE_SUCCESS:
            return {
                ...state, fetchingEmployee: false, employeeList: action.payload
            }
        case FETCH_EMPLOYEE_FAILURE:
            return {
                ...state, fetchingEmployee: false
            }
        default:
            return state
    }
}

export default employeeReducer