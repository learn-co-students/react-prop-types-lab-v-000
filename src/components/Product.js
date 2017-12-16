import React from 'react';
import PropTypes from 'prop-types';

export default class Product extends React.Component {
  render() {
    const { name, producer, hasWatermark, color, weight } = this.props;
    return (
      <div>
      <h1>{name}</h1>
      <h5>Producer: {producer}</h5>
      <h5>Watermark: {hasWatermark ? 'Yes' : 'No'}</h5>
      <h5>Color: {color}</h5>
      <h5>Weight: {weight}</h5>
      </div>
    );
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
    const weight = props[propName];

    if (weight === undefined) {
      return new Error('The `weight` prop is required.');
    }

    if (isNaN(weight)) {
      return new Error('The `weight` prop is not a number.');
    }

    const isValidWeight = weight > 80 && weight < 300;

    if(!isValidWeight) {
      return new Error('The `weight` prop should range between 80 and 300.');
    }
  }
}
