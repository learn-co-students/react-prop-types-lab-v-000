// Code Product Component Here
import React from 'react';
import PropTypes from 'prop-types';

import ReactDOM from 'react-dom';

export default class Product extends React.Component {
  render () {
    return (
      <div className="product">
        <ul>
          <li>name: {this.props.name}</li>
          <li>{this.props.producer}</li>
          <li>color: {this.props.color} </li>
        </ul>
      </div>
    );
  }
}

Product.defaultProps = {
  hasWatermark: false
};


function propRange(props, propName, componentName) {
  let value = props[propName];
  if (value === undefined) {
    return new Error('The `weight` prop is required.');
  }
  if (typeof value === 'number') {
    return value >=80 ? null : new Error(propName + ' in ' + componentName + " is outside range.");
  }
  if (isNaN(value))  {
    return new Error(propName + ' in ' + componentName + " is not a number.");
  }
}


Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string, 
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: propRange
};



