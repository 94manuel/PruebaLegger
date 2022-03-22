import React      from 'react';
import { Button } from 'react-bootstrap';
import PropTypes  from 'prop-types';

//require('./_style.scss');

const ButtonCuston = props => (
  <Button 
  className="a__button"
  variant={props.variant}
  onClick={props.onClick}
  disabled={props.disabled}
  name={props.name}
  >{props.text}</Button>
);

ButtonCuston.propTypes = {
  text: PropTypes.string,
  variant: PropTypes.string,
  onClick: PropTypes.func,
  name: PropTypes.string
  //disabled: PropTypes.boolean,
};

export default ButtonCuston;
