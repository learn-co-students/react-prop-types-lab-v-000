// Code Product Component Here
import React from 'react';
import PropTypes from 'prop-types';

export default class Product extends React.Component {
  render() {
    const { name, producer, hasWatermark, color, weight } = this.props;

    return (
      <div className="productInfo">
        <ul>
          <li>Name: {name}</li>
          <li>Producer: {producer}</li>
          <li>Has a Watermark: {hasWatermark ? "Yes" : "No"}</li>
          <li>Color: {color}</li>
          <li>Weight: {weight}</li>
        </ul>
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
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: function(props, propName, componentName) {
    const weight = props[propName];
    if (typeof weight === 'number') {
      const validWeight = 80 < weight && weight < 300;
      if (!validWeight) {
        return new Error('Weight value must be between 80 and 300.')
      }
    } else if (typeof weight !== 'number' && typeof weight !== 'undefined') {
      return new Error('Weight value must be a number')
    } else {
      return new Error('Weight is required.')
    }
  }
}
