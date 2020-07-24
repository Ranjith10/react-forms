import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import {  NavLink } from 'react-router-dom'

import './Login.css'

const Login = () => {
    const validationSchema = yup.object({
        email: yup
            .string()
            .email('Please enter a valid Email address')
            .required(
                'Please enter a Email address. This is a mandatory Field'
            ),
        password: yup
            .string()
            .required('Please enter a password. This is a mandatory field')
            .min(8, 'Password is too short, minimum length is 8')
            .max(15, 'Password is too long, maximum length is 15'),
    })
    const {
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        errors,
        touched,
        isSubmitting,
        setSubmitting,
    } = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema,
        onSubmit: (values) => {
            setSubmitting(true)
            // eslint-disable-next-line no-undef
            alert(JSON.stringify(values, null, 2))
            setSubmitting(false)
        },
    })

    return (
        <div className = 'login-wrapper'>
            <div className = 'login-welcome-container'>
                <div className = 'login-welcome-content'>
                    Welcome to
                    <br /> Github Request Portal
                </div>
            </div>
            <div className = 'login-form-container'>
                <NavLink className = 'back-link-home' to = '/'>
                    Go to Home
                </NavLink>
                <div className = 'login-form-input-container'>
                    <form className = 'login-form' onSubmit = { handleSubmit }>
                        <label>Email</label>
                        <input
                            name = 'email'
                            onBlur = { handleBlur }
                            onChange = { handleChange }
                            value = { values.email }
                        />
                        {touched.email && errors.email ? (
                            <div className = 'input-error'>{errors.email}</div>
                        ) : null}
                        <label>Password</label>
                        <input
                            name = 'password'
                            onBlur = { handleBlur }
                            onChange = { handleChange }
                            type = 'password'
                            value = { values.password }
                        />
                        {touched.password && errors.password ? (
                            <div className = 'input-error'>{errors.password}</div>
                        ) : null}
                        <button disabled = { isSubmitting } type = 'submit'>
                            {' '}
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
