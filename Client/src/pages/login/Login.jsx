import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import "./login.css";

const Login = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (formValues) => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:3001/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formValues),
      });
      const data = await response.json();
      if (data.success) {
        setSubmitted(true);
        alert("loggin succesfully")
        navigate("/"); 
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
    if (!values.email) {
      errors.email = 'Enter Email';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address';
    }
    if (!values.password) {
      errors.password = 'Enter Password';
    }
    return errors;
  };

  return (
    <div className="signup-form-container">
      <h2>Login</h2>
      <Formik
        initialValues={{ email: '', password: '' }}
        validate={validate}
        onSubmit={handleSubmit} 
      >
        {({ isSubmitting }) => (
          <Form className="signup-form">
            <div className="signup-form-group">
              <label htmlFor="email">Email</label>
              <Field type="email" name="email" />
              <ErrorMessage name="email" component="div" className="signup-error" />
            </div>

            <div className="signup-form-group">
              <label htmlFor="password">Password</label>
              <Field type="password" name="password" />
              <ErrorMessage name="password" component="div" className="signup-error" />
            </div>

            <button type="submit" disabled={isSubmitting || loading}>
              {loading ? 'Please wait...' : 'Login'}
            </button>
          </Form>
        )}
      </Formik>
      {error && <div className="signup-error">{error}</div>}
      <div className="signup-login-link">
        <p>Don't have an account? <Link to="/signup">Click here to signup</Link></p>
      </div>
    </div>
  );
};

export default Login;
