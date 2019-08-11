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
  weight: (props, propName) => {
    const weight = props[propName];

    if (weight === undefined) {
      return new Error('The `weight` prop is required.');
    }

    if (isNaN(weight)) {
      return new Error('The `weight` prop is not a number.');
    }

    const isValidWeight = weight > 80 && weight < 300;

    if (!isValidWeight) {
      return new Error('The `weight` prop should range between 80 and 300.');
    }
  },
};

export default Product;
