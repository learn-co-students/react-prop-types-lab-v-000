// Code Product Component Here

import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {
  render() {
    return (
      <div className="Product">
        <p>Name: {this.props.name}</p>
        <p>Producer: {this.props.producer}</p>
        <p>Has Watermark: {this.props.hasWatermark}</p>
        <p>Color: {this.props.color}</p>
        <p>Weight: {this.props.weight}</p>
      </div>
    );
  }
}

function weightCheck(props, propName) {
  const weight = props[propName];

  if (weight === undefined) {
    return new Error('Invalid')
  }

  // Recycled
  if (isNaN(weight)) {
    return new Error('The `weight` prop is not a number.');
  }

  // Recycled
  const isValidWeight = weight > 80 && weight < 300;
  // Recycled
  if (!isValidWeight) {
    return new Error('Invalid - not between 80 and 300')
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
  weight: weightCheck
};

export default Product;
