import React from 'react';
import { Formik, Field, Form } from 'formik';
import * as yup from 'yup';

const UserForm = props => {
  return (
    <div>
      <Formik
        initialValues={props.initialValues}
        render={props => {
          return (
            <Form>
              <Field type='text' name='name' placeholder='Name'></Field>
              <Field type='text' name='email' placeholder='Email'></Field>
              <Field type='text' name='name' placeholder='Password'></Field>
              <input type='checkbox'></input>
              <button type='submit'>Submit</button>
            </Form>
          );
        }}
      />
    </div>
  );
};

export default UserForm;
