import React from 'react';
import PropTypes from 'prop-types';

export default class Product extends React.Component {
  render() {
    const { name, producer, hasWatermark, color, weight } = this.props;
    return (
      <div>
        <h1>Name: {name} </h1>
        <h1>Producer: {producer} </h1>
        <p>Product Specs:</p>
          <p>Color: {color} </p>
          <p>Watermark?: {hasWatermark ? "Yes" : "No"}</p>
          <p>Weight: {weight} </p>
      </div>
    );
  }
}

Product.defaultProps = {
  hasWatermark: false,
  size: 'regular'
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: PropTypes.number.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  weight: (props, propName) => {
    const weight = props[propName];
    if (weight === undefined) {
      return new Error('The `weight` prop is required.');
    }
    if (weight < 80 || weight > 300) {
      return new Error('The `weight` prop should range between 80 and 300.');
    }
    if (isNaN(weight)) {
      return new Error('The `weight` prop is not a number.');
    }
  }
};
