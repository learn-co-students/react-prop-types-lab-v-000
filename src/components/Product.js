// Code Product Component Here
import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {
  render() {
    return (
      <div className="product">
      </div>
    );
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
  weight: (props, propName) => {
    const weight = props[propName];
    const validWeightRange = weight > 80 && weight < 300;

    if (weight === undefined)  return new Error('The `weight` prop is required.')
    if (isNaN(weight)) return new Error('The `weight` prop is not a number.')
    if (!validWeightRange) return new Error('The `weight` prop should range between 80 and 300.');
  }
};

export default Product;
