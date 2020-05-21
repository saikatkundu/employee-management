import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchEmployee } from '../../redux'
import Spinner from '../common/Spinner'
import EmployeeProfile from './EmployeeProfile'

const EmployeeList = (props) => {
    const {
        employeeList, fetchingEmployee,
        fetchEmployee
    } = props
    useEffect(() => {
        fetchEmployee()
        return () => {
            fetchEmployee()
        }
    }, [fetchEmployee])
    if (fetchingEmployee) {
        return <Spinner />
    }
    return (
        <div className="row col-sm-12 d-flex justify-content-center">

            <EmployeeProfile employee={employeeList} />
        </div>
    )

}

const mapStateToProps = (state) => {
    const { employeeList, fetchingEmployee } = state.employee
    return {
        employeeList, fetchingEmployee
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchEmployee: () => dispatch(fetchEmployee())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeList)
