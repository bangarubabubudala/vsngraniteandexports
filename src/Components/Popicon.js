import { ErrorMessage, FormikProvider, useFormik } from 'formik';
import React, { useRef } from 'react'
import { useState, useEffect } from 'react';
import * as Yup from 'yup';
import { PopUpModal, SENTBUTTON, isValidMobileNumber, showNotification } from '../CommonFunctions';
import emailjs from '@emailjs/browser';
import FullPageLoader from '../FullPageLoader ';
import './Popicon.css'


const Popicon = () => {
  const [showForm, setShowForm] = useState(false);
  const [showCard, setShowCard] = useState(false);
  // const [showIcon, setShowIcon] = useState(false);
  const [showPopup, setShowPopup] = useState(true);

  const Buttonclick = () => {
    setShowForm(true);
    setShowCard(false);
    // setShowIcon(false);
  }
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
          setFieldValue('message', '');
          setShowForm(false);
          setShowCard(true);
          setShowPopup(false);
          resetForm()
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


  const xMark = () => {
    setShowForm(false);
    setShowCard(false);
    setShowPopup(true)
  }


  useEffect(() => {
    if (showCard) {
      const timer = setTimeout(() => {
        setShowForm(false);
        setShowCard(false);
        setShowPopup(true);
      }, 1000); // close card and show popup icon after 1 seconds
      return () => clearTimeout(timer); // cleanup on unmount
    }
  }, [showPopup]);

  const form = useRef();
  const [initialValues, setInitialValues] = useState({
    name: '',
    email: '',
    mobile: '',
    message: ''
  })


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
      <div className="popup-icon" >
        <div className="icon-circle">
          {/* on click this below icon display above enquire form  */}
          {showPopup && (
            <div className='pop-icon' onClick={Buttonclick}>
              <svg xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24" width="72" height="72"
                fill="currentColor">
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M12 11C14.7614 11 17 13.2386 17 16V22H15V16C15 14.4023 13.7511 13.0963 12.1763 13.0051L12 13C10.4023 13 9.09634 14.2489 9.00509 15.8237L9 16V22H7V16C7 13.2386 9.23858 11 12 11ZM5.5 14C5.77885 14 6.05009 14.0326 6.3101 14.0942C6.14202 14.594 6.03873 15.122 6.00896 15.6693L6 16L6.0007 16.0856C5.88757 16.0456 5.76821 16.0187 5.64446 16.0069L5.5 16C4.7203 16 4.07955 16.5949 4.00687 17.3555L4 17.5V22H2V17.5C2 15.567 3.567 14 5.5 14ZM18.5 14C20.433 14 22 15.567 22 17.5V22H20V17.5C20 16.7203 19.4051 16.0796 18.6445 16.0069L18.5 16C18.3248 16 18.1566 16.03 18.0003 16.0852L18 16C18 15.3343 17.8916 14.694 17.6915 14.0956C17.9499 14.0326 18.2211 14 18.5 14ZM5.5 8C6.88071 8 8 9.11929 8 10.5C8 11.8807 6.88071 13 5.5 13C4.11929 13 3 11.8807 3 10.5C3 9.11929 4.11929 8 5.5 8ZM18.5 8C19.8807 8 21 9.11929 21 10.5C21 11.8807 19.8807 13 18.5 13C17.1193 13 16 11.8807 16 10.5C16 9.11929 17.1193 8 18.5 8ZM5.5 10C5.22386 10 5 10.2239 5 10.5C5 10.7761 5.22386 11 5.5 11C5.77614 11 6 10.7761 6 10.5C6 10.2239 5.77614 10 5.5 10ZM18.5 10C18.2239 10 18 10.2239 18 10.5C18 10.7761 18.2239 11 18.5 11C18.7761 11 19 10.7761 19 10.5C19 10.2239 18.7761 10 18.5 10ZM12 2C14.2091 2 16 3.79086 16 6C16 8.20914 14.2091 10 12 10C9.79086 10 8 8.20914 8 6C8 3.79086 9.79086 2 12 2ZM12 4C10.8954 4 10 4.89543 10 6C10 7.10457 10.8954 8 12 8C13.1046 8 14 7.10457 14 6C14 4.89543 13.1046 4 12 4Z"></path></svg>
            </div>
          )}
          {showForm && (
            <div className="f-l-set">
              <div className="form-lp">
                <div style={{ background: 'rgb(255,255,255,0.3)', backdropFilter: 'blur(10px)' }}>
                  <div className="x-f-lp" onClick={xMark}>
                    <span style={{ cursor: 'pointer', paddingRight: '1rem', paddingTop: '1rem', }}>
                      <svg xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24" width="24" height="24"
                        fill="currentColor"><path fill="none" d="M0 0h24v24H0z">
                        </path>
                        <path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path></svg>
                    </span>
                  </div>
                  <div className="x-f-lp-icon">
                    <svg xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24" width="32" height="32"
                      fill="currentColor"><path fill="none" d="M0 0h24v24H0z">
                      </path>
                      <path d="M12 11C14.7614 11 17 13.2386 17 16V22H15V16C15 14.4023 13.7511 13.0963 12.1763 13.0051L12 13C10.4023 13 9.09634 14.2489 9.00509 15.8237L9 16V22H7V16C7 13.2386 9.23858 11 12 11ZM5.5 14C5.77885 14 6.05009 14.0326 6.3101 14.0942C6.14202 14.594 6.03873 15.122 6.00896 15.6693L6 16L6.0007 16.0856C5.88757 16.0456 5.76821 16.0187 5.64446 16.0069L5.5 16C4.7203 16 4.07955 16.5949 4.00687 17.3555L4 17.5V22H2V17.5C2 15.567 3.567 14 5.5 14ZM18.5 14C20.433 14 22 15.567 22 17.5V22H20V17.5C20 16.7203 19.4051 16.0796 18.6445 16.0069L18.5 16C18.3248 16 18.1566 16.03 18.0003 16.0852L18 16C18 15.3343 17.8916 14.694 17.6915 14.0956C17.9499 14.0326 18.2211 14 18.5 14ZM5.5 8C6.88071 8 8 9.11929 8 10.5C8 11.8807 6.88071 13 5.5 13C4.11929 13 3 11.8807 3 10.5C3 9.11929 4.11929 8 5.5 8ZM18.5 8C19.8807 8 21 9.11929 21 10.5C21 11.8807 19.8807 13 18.5 13C17.1193 13 16 11.8807 16 10.5C16 9.11929 17.1193 8 18.5 8ZM5.5 10C5.22386 10 5 10.2239 5 10.5C5 10.7761 5.22386 11 5.5 11C5.77614 11 6 10.7761 6 10.5C6 10.2239 5.77614 10 5.5 10ZM18.5 10C18.2239 10 18 10.2239 18 10.5C18 10.7761 18.2239 11 18.5 11C18.7761 11 19 10.7761 19 10.5C19 10.2239 18.7761 10 18.5 10ZM12 2C14.2091 2 16 3.79086 16 6C16 8.20914 14.2091 10 12 10C9.79086 10 8 8.20914 8 6C8 3.79086 9.79086 2 12 2ZM12 4C10.8954 4 10 4.89543 10 6C10 7.10457 10.8954 8 12 8C13.1046 8 14 7.10457 14 6C14 4.89543 13.1046 4 12 4Z"></path></svg>
                    <h2>Enquire</h2>
                  </div>
                  <div className="f-lp-pos">
                    <FormikProvider value={formik} >
                      <form ref={form} noValidate onSubmit={handleSubmit}>
                        <div className="contcat-from">
                          <div className="inputbox">
                            <input name='name' value={values?.name} type="text" onChange={(e) => {
                              setFieldValue("name", e.target.value)
                            }} />
                            <span style={{ fontWeight: "", color: "black" }}>Full Name</span>
                            <small className="text-danger form-text"><ErrorMessage name={'name'} /></small><br />
                          </div>
                          <div className="inputbox">
                            <input name='email' value={values?.email} type="email" onChange={(e) => {
                              setFieldValue("email", e.target.value)
                            }} />
                            <span style={{ fontWeight: "", color: "black" }}>Email</span>
                            <small className="text-danger form-text"><ErrorMessage name={'email'} /></small><br />
                          </div>
                          <div className="inputbox">
                            <input name='mobile' value={values?.mobile} maxLength={10} type="text"
                              onChange={(e) => {
                                if (isValidMobileNumber(e.target.value)) {
                                  setFieldValue("mobile", e.target.value)
                                }
                              }} />
                            <span style={{ fontWeight: "", color: "black" }}>Mobile Number</span>
                            <small className="text-danger form-text"><ErrorMessage name={'mobile'} /></small><br />
                          </div>
                          <div className="inputbox">
                            <textarea name='message' value={values?.message} type="text"
                              onChange={(e) => {
                                setFieldValue("message", e.target.value)
                              }} />
                            <span style={{ fontWeight: "", color: "black" }}>Message</span>
                            <small className="text-danger form-text"><ErrorMessage name={'message'} /></small><br />
                          </div>
                          <div style={{accentColor:"ButtonShadow"}} className="inputbox">
                            <div className="inputcenter">
                              <div>
                                <input type="submit" value="send" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </FormikProvider>
                  </div>
                </div>
              </div>

            </div>
          )}
          {loading && <FullPageLoader />}
          {showCard && (
            <div className='right-icon'>
              <div className='rightshow' >
                <SENTBUTTON size='40' />
              </div>
              <div>
                Sent Successfully
              </div>
            </div>
          )}
        </div>
      </div>


    </>
  )
}

export default Popicon
