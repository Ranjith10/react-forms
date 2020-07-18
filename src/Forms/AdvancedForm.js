import React from 'react'
import { NavLink } from 'react-router-dom'
import Select from 'react-select'

import './AdvancedForm.css'

const colourOptions = [
    {
        label: 'red',
        value: 'red',
    },
    {
        label: 'blue',
        value: 'blue',
    },
    {
        label: 'black',
        value: 'black',
    },
    {
        label: 'violet',
        value: 'violet',
    },
]

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
            <form className='form-container'>
                <div className='adv-form-content'>
                    <div className='adv-form-basic-content'>
                        <div className='adv-form-basic-content-title'>
                            New Request
                        </div>
                        <div className='adv-form-basic-content-container'>
                            <div className='tag-container'>
                                <label>Tag/Keyword</label>
                                <Select
                                    defaultValue={[
                                        colourOptions[2],
                                        colourOptions[3],
                                    ]}
                                    isMulti
                                    name='colors'
                                    options={colourOptions}
                                    className='basic-multi-select'
                                    classNamePrefix='select'
                                />
                            </div>
                            <div className='type-request-container'>
                                <div className='type-of-request'>
                                    Type of Request
                                </div>
                                <div className='type-request'>
                                    <input
                                        type='radio'
                                        id='feature'
                                        name='request'
                                        value='male'
                                    />
                                    <label for='male'>Feature</label>
                                    <input
                                        type='radio'
                                        id='api'
                                        name='request'
                                        value='female'
                                    />
                                    <label for='female'>API</label>
                                    <input
                                        type='radio'
                                        id='other'
                                        name='request'
                                        value='other'
                                    />
                                    <label for='other'>Other</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='adv-form-content-row-1'>
                        <div className='form-content-box'>1</div>
                        <div className='form-content-box'>1</div>
                        <div className='form-content-box'>1</div>
                    </div>
                    <div className='adv-form-content-row-2'>
                        <div className='form-content-box'>1</div>
                        <div className='form-content-box'>1</div>
                        <div className='form-content-box'>1</div>
                    </div>
                </div>
                <button type='submit'>Place Request</button>
            </form>
        </div>
    )
}

export default AdvancedForm
