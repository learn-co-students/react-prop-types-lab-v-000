// Code Product Component Here
// Code Product Component Here
import React from 'react';
import PropTypes from 'prop-types';

export default class Product extends React.Component {
  render() {
    const { name, producer, hasWatermark, color, weight } = this.props;
    return (
      <div className="product">
        <h1>Name: {name}</h1>
        <p>Producer: {producer}</p>
        <p>Watermark?: {hasWatermark ? "Yes" : "No"}</p>
        <p>Color: {color}</p>
        <p>Weight: {weight}</p>
      </div>
    );
  }
}

Product.defaultProps = {
  hasWatermark: false,
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: function(props, propName) {
    const weight = props[propName];

    if (weight === undefined) {
      return new Error("You must include a number for weight.");
    }

    if (isNaN(weight)) {
      return new Error("Weight must be a number.");
    }

    return weight > 80 && weight < 300 ? null : new Error("Weight must be between 80 and 300.");
  }
}
