import React, { Fragment, useEffect } from 'react'
import { connect } from 'react-redux'
import { NavLink, Redirect } from 'react-router-dom'
import { checkSession, clearSession } from '../../redux'
import Spinner from '../common/Spinner'
import EmployeeList from '../employee/EmployeeList'

const Dashboard = (props) => {
    const {
        checkingSession, hasSession,
        checkSession, clearSession

    } = props
    useEffect(() => {
        checkSession()
        return () => {
            checkSession()
        }
    }, [checkSession])
    if (checkingSession) {
        return <Spinner />
    } else if (!hasSession) {
        return <Redirect to="/" />
    }
    return (
        <Fragment>
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg fixed-top ">
                <NavLink className="navbar-brand" to="/dashboard">E<span className="d-none d-sm-inline-block">mployee</span> M<span className="d-none d-sm-inline-block">anagement</span></NavLink>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <NavLink className="nav-link" to="/dashboard">Home <span className="sr-only">(current)</span></NavLink>
                    </li>
                </ul>
                <button className="mr-0 btn btn-outline-danger" type="button" onClick={clearSession}>
                    Log Out<i className="fas fa-sign-out-alt pl-1"></i>
                </button>
            </nav>
            <div className="container-fluid mt-5" role="main">
                <EmployeeList />
            </div>
        </Fragment>
    )
}


const mapStateToProps = state => {
    const { hasSession, checkingSession } = state.auth
    return {
        hasSession, checkingSession
    }
}

const mapDispatchToProps = dispatch => {
    return {
        checkSession: () => dispatch(checkSession()),
        clearSession: () => dispatch(clearSession())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)