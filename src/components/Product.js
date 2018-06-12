// Code Product Component Here
import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {
  render() {
    return (
      <div>Product</div>
    )
  }
};

Product.defaultProps = {
  hasWatermark: false
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white','eggshell-white','salmon']).isRequired,
  weight: (props, propName) => {
    let weight = props[propName];

    if (weight === undefined) {
      return new Error("Sorry you must include a number for weight.");
    }

    if (isNaN(weight)) {
      return new Error("Sorry weight must be a number.");
    }

    return weight >= 80 && weight <= 300 ? null : new Error("Must be within range of 80 to 300");
  }
};


export default Product;
