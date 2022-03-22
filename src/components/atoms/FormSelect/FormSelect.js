import React      from 'react';
import { Form } from 'react-bootstrap'
import PropTypes  from 'prop-types';

//require('./_style.scss');

const FormSelect = props => (
  <Form.Control as="select"
    onChange={props.onChange}
  >{
    props.select.map((e) =>{
      return <option value={e.value}>{e.text}</option>
    })
    }</Form.Control>
);

FormSelect.propTypes = {
  select: PropTypes.object,
  onChange: PropTypes.func,
};

export default FormSelect;
