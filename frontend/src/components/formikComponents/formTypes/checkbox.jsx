import React from 'react';
import { Field, ErrorMessage } from 'formik';
import { Form } from 'react-bootstrap';
import TextError from '../../textError';

const Checkbox = ({ label, name, ...props }) => (
  <Form.Group controlId={name}>
    <Field
      as={Form.Check}
      type="checkbox"
      label={label}
      name={name}
      {...props}
    />
    <ErrorMessage name={name} component={TextError} />
  </Form.Group>
);

export default Checkbox;
