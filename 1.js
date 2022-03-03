import { ErrorMessage, Field, Form, Formik, } from 'formik'
import * as Yup from 'yup';
import React, { useState } from 'react'

function Formikyup() {
    const [val, setVal] = useState([])

    const initialValue = {
        name: '',
        phone: '',
        email: '',
        password: ''
    }
    const onSubmit = (val) =>{
        console.log('hghb',val);
      }
    const validate = Yup.object({
        name: Yup.string().matches(/^[a-zA-Z\-]+$/).required('Please enter name'),
        phone: Yup.number()
            .typeError("That doesn't look like a phone number")
            .positive("A phone number can't start with a minus")
            .integer("A phone number can't include a decimal point")
            .min(8)
            .required('A phone number is required'),
        email: Yup.string().email('enter valid email').required('please enter email'),
        password: Yup.string().matches(/^[a-zA-Z0-9!@#$%^&*]{6,16}$/).required('please enter password'),
    })
    return (
        <div>
            <div>
                <Formik initialValues={initialValue} onSubmit={onSubmit} validationSchema={validate}>
                    {() => {
                        return (
                            <Form>
                                <label>Name : </label>
                                <Field type='text' name='name' className='input' /><br />
                                <span className='error'><ErrorMessage name='name'>{values=>values}</ErrorMessage></span><br/>
                                <label>Phone number : </label>
                                <Field type='phone' name='phone' /><br />
                                <span className='error'><ErrorMessage name='phone'>{values=>values}</ErrorMessage></span><br />
                                <label>Email : </label>
                                <Field type='email' name='email' /><br />
                                <span className='error'><ErrorMessage name='email'>{values=>values}</ErrorMessage></span><br />
                                <label>password : </label>
                                <Field type='password' name='password' /><br />
                                <span className='error'><ErrorMessage name='password'>{values=>values}</ErrorMessage></span><br />
                                <label>Gender : </label>
                                <Field type='checkbox' name='male' />
                                <label>Male </label>
                                <Field type='checkbox' name='female' />
                                <label>FeMale </label><br /><br />
                                <button type='submit'>Sumbit  </button>
                            </Form>
                        )
                    }}
                </Formik>
            </div>
            <div>
                <table>

                </table>
            </div>
        </div>
    )
}

export default Formikyup