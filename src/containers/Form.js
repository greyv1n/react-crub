import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

function Form({
    cbAddUser,
    cbHideForm,
    cbChengeUser,
    typeBtn,
    selectedName,
    selectedPhone }) {

    const { handleSubmit, handleChange, values, touched, errors, handleBlur } = useFormik({
        initialValues: {
            name: selectedName,
            phone: selectedPhone
        },
        validationSchema: Yup.object({
            name: Yup.string().min(3, '*Min 3 characters').required('*Add name'),
            phone: Yup.string().min(6, 'Min 6 characters').required('*Add phone')
        }),
        onSubmit: ({ name, phone }) => {
            typeBtn === 'add'
                ? cbAddUser(name, phone)
                : cbChengeUser(name, phone)
        }
    })
    return (
        <>
            <h1> {(typeBtn).toUpperCase()} USER</h1>
            <div className='form-wrap' style={{ background: 'blue' }}>
                <form className='form' onSubmit={handleSubmit}>
                    <input
                        type="text"
                        id='name'
                        className='form-item'
                        placeholder='user name'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                    />
                    {touched.name && errors.name
                        ? <div className='form-left'>{errors.name}</div>
                        : null}
                    <input
                        type="text"
                        id='phone'
                        className='form-item'
                        placeholder='user phone'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.phone}
                    />
                    {touched.phone && errors.phone
                        ? <div className='form-right'>{errors.phone}</div>
                        : null}
                    <button type='submit' className='form-button'>{typeBtn}</button>
                </form>
                <button onClick={cbHideForm} className='form-button'>cancel</button>
            </div>
        </>
    )
}

export { Form }