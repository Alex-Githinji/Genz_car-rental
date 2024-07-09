import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import "./signup.css";

const Signup = () => {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (formValues) => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:3001/user/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formValues),
      });
      const data = await response.json();
      if (data.success) {
        setSubmitted(true);
        alert ("account created successfully") 
        navigate("/login");  
      } else {
        setError(data.message);
      }
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  const validate = (values) => {
    const errors = {};
    if (!values.firstName) {
      errors.firstName = 'Enter First Name';
    }
    if (!values.lastName) {
      errors.lastName = 'Enter Last Name';
    }
    if (!values.email) {
      errors.email = 'Enter Email';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
    if (!values.phoneNumber) {
      errors.phoneNumber = 'Enter Phone Number';
    }
    if (!values.password) {
      errors.password = 'Enter Password';
    }
    return errors;
  };

  return (
    <div className="signup-form-container">
      <h2>Signup</h2>
      {submitted ? (
        <div className="signup-success-message">
          <p>Registration successful!</p>
          <Link to="/login">Go to Login</Link>
        </div>
      ) : (
        <Formik
          initialValues={{ firstName: '', lastName: '', email: '', phoneNumber: '', password: '' }}
          validate={validate}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="signup-form">
              <div className="signup-form-group">
                <label htmlFor="firstName">First Name</label>
                <Field type="text" name="firstName" />
                <ErrorMessage name="firstName" component="div" className="signup-error" />
              </div>

              <div className="signup-form-group">
                <label htmlFor="lastName">Last Name</label>
                <Field type="text" name="lastName" />
                <ErrorMessage name="lastName" component="div" className="signup-error" />
              </div>

              <div className="signup-form-group">
                <label htmlFor="email">Email</label>
                <Field type="email" name="email" />
                <ErrorMessage name="email" component="div" className="signup-error" />
              </div>

              <div className="signup-form-group">
                <label htmlFor="phoneNumber">Phone Number</label>
                <Field type="text" name="phoneNumber" />
                <ErrorMessage name="phoneNumber" component="div" className="signup-error" />
              </div>

              <div className="signup-form-group">
                <label htmlFor="password">Password</label>
                <Field type="password" name="password" />
                <ErrorMessage name="password" component="div" className="signup-error" />
              </div>

              <div className="signup-form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <Field type="password" name="confirmPassword" />
              </div>

              <button type="submit" disabled={isSubmitting || loading}>
                {loading ? 'Please wait...' : 'Create account'}
              </button>
            </Form>
          )}
        </Formik>
      )}
      {!submitted && (
        <div className="signup-login-link">
          <p>Already have an account? <Link to="/login">Click here to login</Link></p>
        </div>
      )}
    </div>
  );
};

export default Signup;
