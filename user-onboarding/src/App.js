import React, { useState } from 'react';
import './App.css';
import { withFormik, Form, Field } from 'formik';

import * as yup from 'yup';
import axios from 'axios';

import initialValues from './data';

const App = ({ values, errors, touched }) => {
  return (
    <Form>
      <div>
        {touched.name && errors.name && <p>{errors.name}</p>}
        <Field type='text' name='name' placeholder='Name' />
      </div>
      <div>
        {touched.email && errors.email && <p>{errors.email}</p>}
        <Field type='email' name='email' placeholder='Email' />
      </div>
      <div>
        {touched.password && errors.password && <p>{errors.password}</p>}
        <Field type='password' name='password' placeholder='Password' />
      </div>
      <label>
        <Field type='checkbox' name='tos' checked={values.tos} />
        Agree to terms of service
      </label>
      <button type='submit'>Submit</button>
    </Form>
  );
};

const FormikApp = withFormik({
  mapPropsToValues({ name, email, password, tos }) {
    return {
      name: name || '',
      email: email || '',
      password: password || '',
      tos: tos || false
    };
  },

  validationSchema: yup.object().shape({
    name: yup.string().required(),
    email: yup
      .string()
      .required('Email is required')
      .email('Email not valid'),
    password: yup
      .string()
      .min(8, 'Password must be 8 characters or longer')
      .required('Password is required')
  }),

  handleSubmit(values) {
    console.log(values);
  }
})(App);

export default FormikApp;
