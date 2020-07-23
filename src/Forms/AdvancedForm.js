import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Select from 'react-select'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import {useFormik} from 'formik'
import * as Yup from 'yup'
 
import './AdvancedForm.css'

const languageOptions = [
    {
        label: 'Java',
        value: 'java',
    },
    {
        label: 'Javascript',
        value: 'javascript',
    },
    {
        label: 'C++',
        value: 'c++',
    },
    {
        label: 'Python',
        value: 'python',
    },
    {
        label: 'Others',
        value: 'others',
    }
]

const AdvancedForm = () => {
    const [startDate, setStartDate] = useState(new Date())
    const [selectedLanguage, setSelectedLanguage] = useState('')
    
    const validationSchema = Yup.object({
        languages: Yup
                    .string()
                    .required('Select atleast 1 Language'),
        request: Yup
                    .string()
                    .required('Select a request type'),
        priority: Yup
                    .string()
                    .required('Select the priotiy'),
        keyImpact: Yup
                    .string()
                    .required('Select a key-impact'),
    })

    const {handleBlur, handleChange, handleSubmit, setSubmitting,
             values, errors, touched, isSubmitting, setFieldValue, setFieldTouched
    } = useFormik({
        initialValues: {
            languages: selectedLanguage,
            request: '',
            priority: '',
            keyImpact: '',
        },
        validationSchema,
        onSubmit: () => {
            setSubmitting(true)
            // eslint-disable-next-line no-undef
            alert(JSON.stringify(values, null, 2))
        }
    })

    const handleLanguagesSelection = (option) => {
        setSelectedLanguage(option)
    }

    return (
        <div className = 'adv-form-wrapper'>
            <div className = 'adv-form-header'>
                <div>Github Request Management</div>
                <NavLink className = 'go-back' to = '/'>
                    Go to Home
                </NavLink>
            </div>
            <div className = 'adv-form-title-container'>
                <div className = 'adv-form-titlebar'>Place Request</div>
                <input
                    className = 'adv-form-search'
                    placeholder = 'Search requests'
                    type = 'text'
                />
            </div>
            <form className = 'form-container' onSubmit = { handleSubmit }>
                <div className = 'adv-form-content'>
                    <div className = 'adv-form-basic-content'>
                        <div className = 'adv-form-basic-content-title'>
                            New Request
                        </div>
                        <div className = 'adv-form-basic-content-container'>
                            <div className = 'tag-container'>
                                <label>Tag/Keyword</label>
                                <Select
                                    className = 'basic-multi-select'
                                    classNamePrefix = 'select'
                                    error = { errors.languages }
                                    id = 'languages'
                                    isMulti
                                    name = 'languages'
                                    onBlur = { () => setFieldTouched("languages", true) }
                                    onChange = { (opt, e) => {
                                        handleLanguagesSelection(opt)
                                        handleChange('languages')
                                        setFieldValue('languages', opt)
                                      } }
                                    options = { languageOptions }
                                    touched = { touched.languages }
                                    value = { values.languages }
                                />
                                {
                                    touched.languages && errors.languages ?
                                        <div className = 'form-error'>{errors.languages}</div>
                                        : null
                                }
                            </div>
                            <div className = 'type-request-container'>
                                <div className = 'type-of-request'>
                                    Type of Request
                                </div>
                                <div className = 'type-request'>
                                    <input
                                        id = 'feature'
                                        name = 'request'
                                        onChange = { handleChange }
                                        type = 'radio'
                                        value = 'feature'
                                    />
                                    <label htmlFor = 'feature'>Feature</label>
                                    <input
                                        id = 'api'
                                        name = 'request'
                                        onChange = { handleChange }
                                        type = 'radio'
                                        value = 'api'
                                    />
                                    <label htmlFor = 'api'>API</label>
                                    <input
                                        id = 'other'
                                        name = 'request'
                                        onChange = { handleChange }
                                        type = 'radio'
                                        value = 'other'
                                    />
                                    <label htmlFor = 'other'>Other</label>
                                    {
                                        touched.request && errors.request ?
                                            <div className = 'form-error'>{errors.request}</div>
                                            : null
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className = 'adv-form-content-row-1'>
                        <div className = 'form-content-box'>
                            <div className = 'date-picker-container'>
                                <div className = 'date-picker-label'>
                                    Required By
                                </div>
                                <div className = 'datepicker-container'>
                                    <DatePicker
                                        className = 'custom-date-picker'
                                        dateFormat = 'dd-MMM-yyyy'
                                        dropdownMode = 'select'
                                        minDate = { new Date() }
                                        onChange = { (date) => setStartDate(date) }
                                        peekNextMonth
                                        selected = { startDate }
                                        showMonthDropdown
                                    />
                                </div>
                                <div className = 'priority-selection-container'>
                                    <div className = 'priority-label'>
                                        Priority
                                    </div>
                                    <div className = 'priority-value-container'>
                                        <div>
                                            <input
                                                id = 'high'
                                                name = 'priority'
                                                onChange = { handleChange }
                                                type = 'radio'
                                                value = 'High'
                                            />
                                            <label htmlFor = 'high'>High</label>
                                        </div>
                                        <div>
                                            <input
                                                id = 'medium'
                                                name = 'priority'
                                                onChange = { handleChange }
                                                type = 'radio'
                                                value = 'medium'
                                            />
                                            <label htmlFor = 'medium'>Medium</label>
                                        </div>
                                        <div>
                                            <input
                                                id = 'low'
                                                name = 'priority'
                                                onChange = { handleChange }
                                                type = 'radio'
                                                value = 'low'
                                            />
                                            <label htmlFor = 'low'>Low</label>
                                        </div>
                                        {
                                            touched.priority && errors.priority ?
                                                <div className = 'form-error'>{errors.priority}</div>
                                                : null
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className = 'form-content-box'>
                            <div className = 'req-info-container'>
                                <div className = 'language-label'>Language</div>
                                <Select
                                    className = 'req-info-select'
                                    classNamePrefix = 'select'
                                    defaultValue = { languageOptions[2] }
                                    name = 'colors'
                                    options = { languageOptions }
                                />
                                <div className = 'language-label'>Language</div>
                                <Select
                                    className = 'req-info-select'
                                    classNamePrefix = 'select'
                                    defaultValue = { languageOptions[2] }
                                    name = 'colors'
                                    options = { languageOptions }
                                />
                                <div className = 'language-label'>Language</div>
                                <Select
                                    className = 'req-info-select'
                                    classNamePrefix = 'select'
                                    defaultValue = { languageOptions[2] }
                                    name = 'colors'
                                    options = { languageOptions }
                                />
                            </div>
                        </div>
                        <div className = 'form-content-box'>
                            <div className = 'key-impact-container'>
                                <div className = 'key-impact-label'>Key Impact</div>
                                <div className = 'impact-value-container'>
                                    <div>
                                        <input
                                            id = 'customer-satisfaction'
                                            name = 'keyImpact'
                                            onChange = { handleChange }
                                            type = 'checkbox'
                                            value = 'customer-satisfaction'
                                        />
                                        <label htmlFor = 'customer-satisfaction'>
                                            Customer satisfaction
                                        </label>
                                    </div>
                                    <div>
                                        <input
                                            id = 'compliance'
                                            name = 'keyImpact'
                                            onChange = { handleChange }
                                            type = 'checkbox'
                                            value = 'compliance'
                                        />
                                        <label htmlFor = 'compliance'>
                                            Compliance
                                        </label>
                                    </div>
                                    <div>
                                        <input
                                            id = 'productivity'
                                            name = 'keyImpact'
                                            onChange = { handleChange }
                                            type = 'checkbox'
                                            value = 'productivity'
                                        />
                                        <label htmlFor = 'productivity'>
                                            Productivity
                                        </label>
                                    </div>
                                    <div>
                                        <input
                                            id = 'safety'
                                            name = 'keyImpact'
                                            onChange = { handleChange }
                                            type = 'checkbox'
                                            value = 'safety'
                                        />
                                        <label htmlFor = 'safety'>Safety</label>
                                    </div>
                                    <div>
                                        <input
                                            id = 'cost-saving'
                                            name = 'keyImpact'
                                            onChange = { handleChange }
                                            type = 'checkbox'
                                            value = 'cost-saving'
                                        />
                                        <label htmlFor = 'cost-saving'>
                                            Cost Saving
                                        </label>
                                    </div>
                                    <div>
                                        <input
                                            id = 'top-line'
                                            name = 'keyImpact'
                                            onChange = { handleChange }
                                            type = 'checkbox'
                                            value = 'top-line'
                                        />
                                        <label htmlFor = 'top-line'>Top Line</label>
                                    </div>
                                    {
                                            touched.keyImpact && errors.keyImpact ?
                                                <div className = 'form-error'>{errors.keyImpact}</div>
                                                : null
                                        }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className = 'adv-form-content-row-2'>
                        <div className = 'form-content-box'>
                            <div className = 'description-container'>
                                <div className = 'description-label'>Description</div>
                                <textarea 
                                    className = 'description-input'
                                    placeholder = 'Explain your request'
                                    type = 'text'
                                />
                            </div>
                        </div>
                        <div className = 'form-content-box'>
                            <div className = 'description-container'>
                                <div className = 'description-label'>Documents</div>
                                <input 
                                    className = 'documents-upload-input'
                                    placeholder = 'Feedback if any'
                                    type = 'file'
                                />
                            </div>
                        </div>
                        <div className = 'form-content-box'>
                            <div className = 'description-container'>
                                <div className = 'description-label'>Feedback</div>
                                <textarea 
                                    className = 'description-input'
                                    placeholder = 'Feedback if any'
                                    type = 'text'
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <button disabled = { isSubmitting } type = 'submit'> Place Request</button>
            </form>
        </div>
    )
}

export default AdvancedForm
