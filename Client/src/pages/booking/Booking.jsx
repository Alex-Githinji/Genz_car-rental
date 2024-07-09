import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useLocation, useNavigate } from 'react-router-dom';
import './booking.css';

const validate = values => {
  const errors = {};

  if (!values.name) {
    errors.name = 'Enter your Name';
  } else if (values.name.length < 3) {
    errors.name = 'Name must be at least 3 characters long';
  }

  if (!values.email) {
    errors.email = 'Please enter your Email';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.car) {
    errors.car = 'Enter your Car Name';
  } else if (values.car.length < 3) {
    errors.car = 'Car name must be at least 3 characters long';
  }

  if (!values.phoneNumber) {
    errors.phoneNumber = 'Enter your phone number';
  } else if (!/^\d{10}$/i.test(values.phoneNumber)) {
    errors.phoneNumber = 'Phone number must be 10 digits';
  }

  if (!values.startDate) {
    errors.startDate = 'Pick-Up Date is required';
  } else if (new Date(values.startDate).setHours(0, 0, 0, 0) < new Date().setHours(0, 0, 0, 0)) {
    errors.startDate = 'Pick-Up Date cannot be in the past';
  }

  if (!values.endDate) {
    errors.endDate = 'Drop-Off Date is required';
  } else if (new Date(values.endDate).setHours(0, 0, 0, 0) < new Date(values.startDate).setHours(0, 0, 0, 0)) {
    errors.endDateendDate = 'Drop-Off Date cannot be before Pick-Up Date';
  }

  return errors;
};

const Booking = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { vehicle } = location.state || {};

  if (!vehicle) {
    return <p>No vehicle data provided</p>;
  }

  const handleSubmit = async (formValues, { setSubmitting }) => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:3001/booking/book', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formValues),
      });
      const data = await response.json();
      if (data.success) {
        alert("Car booked successfully");
        navigate("/");
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      console.error('Error booking car:', error.message);
    } finally {
      setLoading(false);
      setSubmitting(false);
    }
  };

  return (
    <section className='form-booking'>
      <div className="form-container">
        <h2>Book a Vehicle</h2>
        <Formik
          initialValues={{ name: '', email: '', phoneNumber: '', car: '', startDate: '', endDate: '' }}
          validate={validate}
          onSubmit={handleSubmit}
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
                <label htmlFor="car">Car Name</label>
                <Field type="text" name="car" />
                <ErrorMessage name="car" component="div" className="error" />
              </div>

              <div className="form-group">
                <label htmlFor="phoneNumber">Phone Number</label>
                <Field type="text" name="phoneNumber" />
                <ErrorMessage name="phoneNumber" component="div" className="error" />
              </div>

              <div className="form-group">
                <label htmlFor="startDate">Pick-Up Date</label>
                <Field type="date" name="startDate" />
                <ErrorMessage name="startDate" component="div" className="error" />
              </div>

              <div className="form-group">
                <label htmlFor="endDate">Drop-Off Date</label>
                <Field type="date" name="endDate" />
                <ErrorMessage name="endDate" component="div" className="error" />
              </div>

              <button type="submit" disabled={isSubmitting}>
                {loading ? 'Booking...' : 'Book'}
              </button>
            </Form>
          )}
        </Formik>
      </div>
      <div className="image1">
        <img src={vehicle.image} alt={`${vehicle.type} ${vehicle.model}`} />
        <div className="vehicle-details">
          <p>Type: {vehicle.type}</p>
          <p>Model: {vehicle.model}</p>
          <p>description: {vehicle.description}</p>
          <p>Price: {vehicle.price}</p>
        
          
        </div>
      </div>
    </section>
  );
};

export default Booking;
