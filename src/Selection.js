import React from 'react'
import { NavLink, Route, Switch } from 'react-router-dom'

import './Selection.css'

const Selection = () => {
    return (
        <div className='selection-wrapper'>
            <div className='selection-title'>Formik Forms</div>
            <div className='selection-subtitle'>
                Building React forms without the tears
            </div>
            <div className='selection-buttons-wrapper'>
                <NavLink to='/login-form' className='login-form-selection'>
                    <div className='login-form-title'>Simple Form</div>
                    <div className='login-form-subttitle'>
                        Login Form with 2 fields
                    </div>
                </NavLink>
                <NavLink to='/advanced-form' className='adv-form-selection'>
                    <div className='adv-form-title'>Advanced Form</div>
                    <div className='adv-form-subttitle'>
                        Form with multiple fields
                    </div>
                </NavLink>
            </div>
        </div>
    )
}

export default Selection
