import React from 'react'
import { Link } from 'react-router-dom'
import "./booking.css"
import { Formik, Form, Field,ErrorMessage } from 'formik'

import home from "../../assets/home.jpg"


const validate = values => {
  const errors = {};

  if (!values.name) {
    errors.name = 'Enter your Name';
  } else if (values.name.length < 3) {
    errors.name = 'Name must be at least 3 characters long';
  }

  if (!values.email) {
    errors.email = 'Please enter your Email';
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
  ) {
    errors.email = 'Invalid email address';
  }

  if (!values.phone) {
    errors.phone = 'Enter your phone number';
  } else if (!/^\d{10}$/i.test(values.phone)) {
    errors.phone = 'Phone number must be 10 digits';
  }
   
  return errors;
};

const Booking = () => {
  return (
    <section className='form-booking'>    
     <div className="form-container">
    <h2>Book a Vehicle</h2>
    <Formik
      initialValues={{ name: '', email: '', phone: '', vehicle: '' }}
      validate={validate}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values)
          setSubmitting(false);
        
      }}
    >
      {({ isSubmitting }) => (
        <Form className="form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <Field type="text" name="name" />
            <ErrorMessage name="name" component="div" className="error" />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" className="error" />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <Field type="text" name="phone" />
            <ErrorMessage name="phone" component="div" className="error" />
          </div>

          <div className="form-group">
              <label htmlFor="pickUpDate">Pick-Up Date</label>
              <Field type="date" name="pickUpDate" />
              <ErrorMessage name="pickUpDate" component="div" className="error" />
            </div>

          <div className="form-group">
              <label htmlFor="dropOffDate">Drop-Off Date</label>
              <Field type="date" name="dropOffDate" />
              <ErrorMessage name="dropOffDate" component="div" className="error" />
            </div>

          {/* <div className="form-group">
            <label htmlFor="vehicle">Vehicle</label>
            <Field as="select" name="vehicle">
              <option value="">Select a vehicle</option>
              <option value="Audi Q5">Audi Q5</option>
              <option value="BMW X3">BMW X3</option>
              <option value="Mercedes GLC">Mercedes GLC</option>
              <option value="Toyota RAV4">Toyota RAV4</option>
            </Field>
            <ErrorMessage name="vehicle" component="div" className="error" />
          </div> */}

          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  </div>
    <div className="image1">
          <img src={home} alt="car" />
    </div>

    </section>
  )
}

export default Booking

