// Code Product Component Here
import React from 'react';
import PropTypes from 'prop-types';

export default class Product extends React.Component {
  render() {
    return(
      <div className="product">
        <h1>{this.props.name}</h1>
        <ul>
          <li>{this.props.producer}</li>
          <li>{this.props.hasWatermark}</li>
          <li>{this.props.color}</li>
          <li>{this.props.weight}</li>
        </ul>
      </div>
    )
  }
}

Product.defaultProps = {
  hasWatermark: false
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf([
    'white',
    'eggshell-white',
    'salmon'
  ]).isRequired,
  weight: weightValidator
}

function weightValidator(props, propName) {
  const weight = props[propName];

  if (weight === undefined) {
    return new Error("Weight must be defined")
  }
  if (isNaN(weight)) {
    return new Error("Weight must be a number")
  }
  const weightCheck = weight > 80 && weight < 300;

  if (!weightCheck) {
    return new Error("Weight must be between 80 and 300")
  }
}
