import React from 'react';
import { Form } from 'react-bootstrap';
import PropTypes  from 'prop-types';

//require('./_style.scss');

const FormControl = props => (
  <Form.Control 
    required={props.required}
    type={props.type}
    placeholder={props.placeholder}
    value={props.value}
    onChange={props.onChange}
    name={props.name}
    pattern="[A-Za-z0-9_-]{1,15}" />
);

FormControl.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string,
  value: PropTypes.string,
};

export default FormControl;
