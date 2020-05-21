import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
import { checkSession, loginUser } from '../../redux'
import Button from '../common/Button'
import Spinner from '../common/Spinner'
import TextField from '../common/TextField'

const validate = values => {
    const errors = {}
    const requiredFields = [
        { name: 'username', label: 'Username' },
        { name: 'password', label: 'Password' }
    ]
    requiredFields.forEach(field => {
        if (!values[field.name]) {
            errors[field.name] = field.label + ' is Required'
        }
    })
    return errors
}

let Login = (props) => {
    const {
        handleSubmit,
        pristine, errors, valid,
        error,
        loggingIn, hasSession, checkingSession,
        checkSession
    } = props
    useEffect(() => {
        checkSession()
        return () => {
            checkSession()
        }
    }, [checkSession])
    if (checkingSession) {
        return <Spinner />
    } else if (hasSession) {
        return <Redirect to="dashboard" />
    }
    return (
        <div className="row h-100">
            <form onSubmit={handleSubmit} className="m-auto col-sm-12 col-md-6 align-middle">
                <div className="card rounded-0" >
                    <div className="card-header text-center m-0">
                        <h3 className="card-title">Login Form</h3>
                    </div>
                    <div className="card-body my-2">
                        <Field name="username" inputId="username"
                            component={TextField} labelText="Username"
                            smallBox noBorderRad required fullRow
                        />
                        <Field name="password" inputId="password"
                            component={TextField} labelText="Password"
                            smallBox noBorderRad required fullRow
                            type="password"
                        />
                        {error && <strong className="text-danger">{error}</strong>}
                    </div>
                    <div className="card-footer text-center">
                        <Button
                            buttonText="Login"
                            btnIcon="sign-in-alt"
                            disabled={pristine || errors || !valid}
                            onClick={handleSubmit}
                            onSubmit={handleSubmit}
                            processing={loggingIn}
                        />
                    </div>
                </div>
            </form>
        </div>
    )

}

const onSubmit = (values, dispatch) => {
    dispatch(loginUser(values));
};
Login = reduxForm({
    form: 'loginForm',
    validate,
    onSubmit
})(Login)

const mapStateToProps = state => {
    const { loggingIn, hasSession, checkingSession } = state.auth
    return { loggingIn, hasSession, checkingSession }
}

const mapDispatchToProps = dispatch => {
    return {
        checkSession: () => dispatch(checkSession())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)