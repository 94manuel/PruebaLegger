import PropTypes  from 'prop-types';
import React, { Component } from 'react';

class  pdf extends Component {
    constructor(props) {
        super(props);
      }
      
  render (){
    <object
        data={props.pdf}
        type="application/pdf"
        width="100%"
        height="100%"
    ></object>
  }
}

pdf.propTypes = {
    pdf: PropTypes.string,
};


export default pdf;