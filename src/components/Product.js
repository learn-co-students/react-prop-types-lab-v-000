// Code Product Component Here
import React from 'react';
import PropTypes from 'prop-types';

export default class Product extends React.Component {

  render() {
    return (
      <div className="product">
        Product
      </div>
    )
  }
}

Product.defaultProps = {
  hasWatermark: false
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf([
    'white',
    'eggshell-white',
    'salmon'
  ]).isRequired,
  weight: (props, propName) => {
    let weight = props[propName];
    if (weight === undefined) {
      return new Error("Sorry, you must include a weight");
    }
    if (isNaN(weight)) {
      return new Error("Sorry, weight must be a number");
    }
    return (weight >= 80 && weight <= 300) ? null : new Error("Sorry, weight must be between 80 to 300");
  }
}
