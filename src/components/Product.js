import React from 'react';
import PropTypes from 'prop-types';

export default class Product extends React.Component {
  render() {
    const {name, producer, hasWatermark, color, weight} = this.props
    return (
      <div>
        <h1>{name}</h1>
        <p><em>Producer:</em> {producer}</p>
        <p>{hasWatermark ? "It has a watermark" : "No watermark"}</p>
        <p><em>Color:</em> {color}</p>
        <p><em>Weight:</em> {weight}</p>
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
  weight: function(props, propName, componentName) {
    const weight = props[propName];

    if (!weight) {
      return new Error('Weight must be defined.')
    }

    if (!Number.isInteger(weight)) {
      return new Error('Weight must be between 80 and 300.');
    };

    if (weight < 80 || weight > 300) {
      return new Error('Weight must be a number.');
    }
  }
}
