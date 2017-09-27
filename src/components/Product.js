// Code Product Component Here

import React from 'react';
import PropTypes from 'prop-types';

export default class Product extends React.Component {
  render(){
    return (
      <div>
        <h1> {this.props.name} </h1>
        <p> {this.props.producer} </p>
        <p> {this.props.hasWatermark} </p>
        <p> {this.props.color}</p>
        <p> {this.props.weight}</p>
      </div>
    )
  }
};

Product.defaultProps = {
  hasWatermark: false
}

Product.propTypes ={
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'egshell-white', 'salmon']).isRequired,
  weight: (props, propName) => {
    const weight = props[propName];

    if (weight === undefined){
      return new Error ('"weight" prop is required.');
    }

    if (isNaN(weight)){
      return new Error ('The "weight" prop is NaN.');
    }

    const weightIsValid = weight > 80 && weight < 300;

    if (!weightIsValid){
      return new Error('The "weight" prop must be between 80 and 300.');
    }
  }
}
