import React from 'react';
import PropTypes from 'prop-types';

export default class Product extends React.Component {
  render() {
    const { name, producer, hasWatermark, color, weight } = this.props;
    return (
      <div>
        <h2>{this.props.name}</h2>
        <p>Producer: {this.props.producer}</p>
        <p>Watermark? {this.props.hasWatermark ? 'Yes' : 'No'}</p>
        <p>Color: {this.props.color}</p>
        <p>Weight: {this.props.weight}</p>
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
  weight: (props, propName) => {
    const weight = props[propName];
    if (weight === undefined) {
      return new Error('weight is required');
    } else if (isNaN(weight)) {
      return new Error('weight needs to be a number');
    } else if (weight <= 80 || weight >= 100) {
      return new Error('weight must be between 80-100');
    }
  }
}
