import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Select from 'react-select'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

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
    const [startDate, setStartDate] = useState(new Date())
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
                                        value='feature'
                                    />
                                    <label for='feature'>Feature</label>
                                    <input
                                        type='radio'
                                        id='api'
                                        name='request'
                                        value='api'
                                    />
                                    <label for='api'>API</label>
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
                        <div className='form-content-box'>
                            <div className='date-picker-container'>
                                <div className='date-picker-label'>
                                    Required By
                                </div>
                                <div className='datepicker-container'>
                                    <DatePicker
                                        selected={startDate}
                                        onChange={(date) => setStartDate(date)}
                                        peekNextMonth
                                        showMonthDropdown
                                        dateFormat='dd-MMM-yyyy'
                                        dropdownMode='select'
                                        minDate={new Date()}
                                        className='custom-date-picker'
                                    />
                                </div>
                                <div className='priority-selection-container'>
                                    <div className='priority-label'>
                                        Priority
                                    </div>
                                    <div className='priority-value-container'>
                                        <div>
                                            <input
                                                type='radio'
                                                id='high'
                                                name='priority'
                                                value='High'
                                            />
                                            <label for='high'>High</label>
                                        </div>
                                        <div>
                                            <input
                                                type='radio'
                                                id='medium'
                                                name='priority'
                                                value='medium'
                                            />
                                            <label for='medium'>Medium</label>
                                        </div>
                                        <div>
                                            <input
                                                type='radio'
                                                id='low'
                                                name='priority'
                                                value='low'
                                            />
                                            <label for='low'>Low</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='form-content-box'>
                            <div className='req-info-container'>
                                <div className='language-label'>Language</div>
                                <Select
                                    defaultValue={colourOptions[2]}
                                    name='colors'
                                    options={colourOptions}
                                    className='req-info-select'
                                    classNamePrefix='select'
                                />
                                <div className='language-label'>Language</div>
                                <Select
                                    defaultValue={colourOptions[2]}
                                    name='colors'
                                    options={colourOptions}
                                    className='req-info-select'
                                    classNamePrefix='select'
                                />
                                <div className='language-label'>Language</div>
                                <Select
                                    defaultValue={colourOptions[2]}
                                    name='colors'
                                    options={colourOptions}
                                    className='req-info-select'
                                    classNamePrefix='select'
                                />
                            </div>
                        </div>
                        <div className='form-content-box'>
                            <div className='key-impact-container'>
                                <div className='key-impact-label'>Priority</div>
                                <div className='impact-value-container'>
                                    <div>
                                        <input
                                            type='radio'
                                            id='customer-satisfaction'
                                            name='key-impact'
                                            value='customer-satisfaction'
                                        />
                                        <label for='customer-satisfaction'>
                                            Customer satisfaction
                                        </label>
                                    </div>
                                    <div>
                                        <input
                                            type='radio'
                                            id='compliance'
                                            name='key-impact'
                                            value='compliance'
                                        />
                                        <label for='compliance'>
                                            Compliance
                                        </label>
                                    </div>
                                    <div>
                                        <input
                                            type='radio'
                                            id='productivity'
                                            name='key-impact'
                                            value='productivity'
                                        />
                                        <label for='productivity'>
                                            Productivity
                                        </label>
                                    </div>
                                    <div>
                                        <input
                                            type='radio'
                                            id='safety'
                                            name='key-impact'
                                            value='safety'
                                        />
                                        <label for='safety'>Safety</label>
                                    </div>
                                    <div>
                                        <input
                                            type='radio'
                                            id='cost-saving'
                                            name='key-impact'
                                            value='cost-saving'
                                        />
                                        <label for='cost-saving'>
                                            Cost Saving
                                        </label>
                                    </div>
                                    <div>
                                        <input
                                            type='radio'
                                            id='top-line'
                                            name='key-impact'
                                            value='top-line'
                                        />
                                        <label for='top-line'>Top Line</label>
                                    </div>
                                </div>
                            </div>
                        </div>
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
