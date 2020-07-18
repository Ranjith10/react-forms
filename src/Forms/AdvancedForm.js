import React from 'react'
import { NavLink } from 'react-router-dom'

import './AdvancedForm.css'

const AdvancedForm = () => {
    return (
        <div className='adv-form-wrapper'>
            <div className='adv-form-header'>
                <div>Github Request Management</div>
                <NavLink to='/' className='go-back'>
                    Go to Home
                </NavLink>
            </div>
            <div className='adv-form-title-container'>
                <div className='adv-form-titlebar'>Place Request</div>
                <input
                    type='text'
                    className='adv-form-search'
                    placeholder='Search requests'
                />
            </div>
            <div className='adv-form-content'>
                <div className='adv-form-basic-content'>
                    <div className='adv-form-basic-content-title'>
                        Place Request
                    </div>
                    <div className='adv-form-basic-content-container'>
                        <input type='text' placeholder='Add a tag/keyword' />
                        <div className='type-request-container'>
                            <div>1</div>
                            <div>2</div>
                            <div>3</div>
                        </div>
                    </div>
                </div>
                <div className='adv-form-content-row-1'>
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                </div>
                <div className='adv-form-content-row-2'>
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                </div>
            </div>
        </div>
    )
}

export default AdvancedForm
