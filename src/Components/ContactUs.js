import { ErrorMessage, Field, FormikProvider, useFormik } from 'formik';
import React, { useRef, useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import * as Yup from 'yup';
import emailjs from '@emailjs/browser';
import { PopUpModal, isValidMobileNumber, showNotification } from '../CommonFunctions';
import FullPageLoader from '../FullPageLoader ';
import './ContactUs.css'
import Connectwus from './Connectwus';


const ContactUs = () => {
    const [initialValues, setInitialValues] = useState({
        name: '',
        email: '',
        mobile: '',
        message: ''
    })
    const form = useRef();
    const [loading, setLoading] = useState(false);

    const handleFormSubmit = async (values) => {
        setLoading(true);

        if (isValid) {
            try {
                const res = await emailjs.sendForm(
                    'service_h73ad44',
                    'template_vw8rphe',
                    form.current,
                    {
                        publicKey: 'g_PtHhDqQ9W3NOBeN',
                    }
                );

                if (res?.text === 'OK') {
                    console.log('SUCCESS!', res);
                    resetForm();
                    setFieldValue('message', '');
                    showNotification('success', 'Mail sent successfully');
                } else {
                    let data = 'Failed To Send Mail';
                    let msg = 'Error';
                    PopUpModal(msg, data || '');
                }
            } catch (error) {
                console.log('FAILED...', error);
                showNotification('error', error);
            } finally {
                setLoading(false);
            }
        }
    };


    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        email: Yup.string().email('Invalid email address').required('Email is required'),
        mobile: Yup.string()
            .matches(/^[6-9]\d{9}$/, 'Invalid mobile number')
            .required('Mobile Number is required'),
        message: Yup.string().required('Message is required'),
    });

    const formik = useFormik({
        initialValues: initialValues, enableReinitialize: true, validationSchema: validationSchema,
        onSubmit: (values, { resetForm }) => {
            console.log("dbhcsdshdvsdv", values);
            handleFormSubmit(values)
        }
    })
    const { values, setFieldValue, handleSubmit, isSubmitting, isValid, validateForm, handleChange, resetForm } = formik;
    return (
        <>
            <div id="contact" className='outer-page-content-container mt-1'>
            <Connectwus />
                <div className="contact-us-layout">
                    <section>
                        <div className="cnt-container">
                            <div className="cnt-form-1" style={{ padding: "20px", background: "skyblue" }}>
                                <h2 style={{ textAlign: "center" }}>Send Mesaage</h2>
                                <FormikProvider value={formik} >
                                    <form ref={form} noValidate onSubmit={handleSubmit}>
                                        <Col>
                                            <label htmlFor='name'>Name</label><small className="text-danger form-text ms-1">*</small>
                                            <Field className="form-control my-2" type='text' name='name'></Field>
                                            <small className="text-danger form-text"><ErrorMessage name={'name'} /></small><br />

                                            <label htmlFor='email'>Email</label><small className="text-danger form-text ms-1">*</small>
                                            <Field className="form-control my-2" type='text' name='email'></Field>
                                            <small className="text-danger form-text"><ErrorMessage name={'email'} /></small><br />

                                            <label htmlFor='mobile'>Mobile Number</label><small className="text-danger form-text ms-1">*</small>
                                            <Field className="form-control my-2" maxLength={10} type='text' name='mobile'
                                                onChange={(e) => {
                                                    if (isValidMobileNumber(e.target.value)) {
                                                        setFieldValue("mobile", e.target.value)
                                                    }

                                                }}></Field>
                                            <small className="text-danger form-text"><ErrorMessage name={'mobile'} /></small><br />

                                            <label htmlFor='message'>Message</label><small className="text-danger form-text ms-1">*</small>
                                            <textarea value={values?.message} className="form-control my-2" name='message' onChange={(e) => {
                                                setFieldValue("message", e.target.value)
                                            }}></textarea>
                                            <small className="text-danger form-text"><ErrorMessage name={'message'} /></small><br />
                                            <Row>
                                                <Col xs={12} sm={12} md={12} lg={5} xl={5} xxl={5}></Col>
                                                <Col xs={12} sm={12} md={12} lg={2} xl={2} xxl={2} className='mb-3'>
                                                    <Button variant='warning' type='submit' style={{}} onClick={() => {
                                                        console.log(values);
                                                        console.log(form.current);
                                                    }}>
                                                        Submit
                                                    </Button>
                                                </Col>
                                                <Col xs={12} sm={12} md={12} lg={5} xl={5} xxl={5}></Col>
                                            </Row>
                                        </Col>
                                    </form>
                                </FormikProvider>
                            </div>
                            {loading && <FullPageLoader />}
                            <div className='m-3'>

                            </div>

                            <div className="cnt-form-2">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3843.193028801522!2d79.76499547512573!3d15.581332285029696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTXCsDM0JzUyLjgiTiA3OcKwNDYnMDMuMyJF!5e0!3m2!1sen!2sin!4v1707791351681!5m2!1sen!2sin"
                                    width="600"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    title="Map"
                                />
                            </div>

                        </div>
                    </section>
                </div>


            </div>
        </>
    )
}

export default ContactUs
