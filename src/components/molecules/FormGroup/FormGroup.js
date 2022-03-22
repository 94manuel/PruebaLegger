import React      from 'react';
import PropTypes  from 'prop-types';
import { Form } from 'react-bootstrap';

import FormLabel        from '../../atoms/FormLabel/FormLabel';
import FormControl  from '../../atoms/FormControl/FormControl';

//require('./_style.scss');

const FormGroup = props => (
  <Form.Group controlId={props.controlId}>
    <FormLabel text={props.FormLabel} />
    <FormControl 
      required={props.required}
      value={props.value}
      type={props.type}
      placeholder={props.placeholder}
      onChange={props.onChange}
      name={props.name}
      size={props.size}
     />
  </Form.Group>
);

FormGroup.propTypes = {
  label: PropTypes.string.isRequired,
  text: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  controlId: PropTypes.string,
  name: PropTypes.string,
  size: PropTypes.string,
  value: PropTypes.string,
  required: PropTypes.bool,
};

export default FormGroup;
