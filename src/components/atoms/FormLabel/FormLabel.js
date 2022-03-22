import React      from 'react';
import { Form } from 'react-bootstrap'
import PropTypes  from 'prop-types';

//require('./_style.scss');

const FormLabel = props => (
  <Form.Label className="a__label">{props.text}</Form.Label>
);

FormLabel.propTypes = {
  text: PropTypes.string.isRequired,
};

export default FormLabel;
