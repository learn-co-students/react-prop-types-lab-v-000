import React from 'react';
import PropTypes from 'prop-types';

const Product = ({ name, producer, hasWatermark, color, weight }) => (
  <div>
    <h1>{name}</h1>
    <p>Producer: {producer}</p>
    <p>Watermark?: {hasWatermark ? 'true' : 'false'}</p>
    <p>color: {color}</p>
    <p>weight: {weight}</p>
  </div>
);

Product.defaultProps = {
  hasWatermark: false,
  producer: '',
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: ((props, propName) => {
    const weight = props[propName];
    if (weight === undefined) {
      return new Error('weight is required');
    } else if (isNaN(weight)) {
      return new Error('weight needs to be a number');
    } else if (weight <= 80 || weight >= 100) {
      return new Error('weight must be between 80-100');
    }
    return weight;
  }).isRequired,
};

export default Product;
