import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import authReducer from './auth/authReducer'
import employeeReducer from './employee/employeeReducer'

const rootReducer = combineReducers({
    form: formReducer,
    auth: authReducer,
    employee: employeeReducer
})

export default rootReducer