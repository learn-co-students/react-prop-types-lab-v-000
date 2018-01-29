import PropTypes from 'prop-types';
import React from 'react';

export default class Product extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
        <ul>
          <li>Producer: {this.props.producer}</li>
          <li>Watermark? {this.props.hasWatermark ? "Yes" : "No"}</li>
          <li>Color: {this.props.color}</li>
          <li>Weight: {this.props.weight}</li>
        </ul>
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
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: function(props, propName) {
    const weight = props[propName];
    const validRange = weight > 80 && weight < 300;

    if (typeof weight === 'undefined') {
      return new Error ('Not defined.');
    }

    if (isNaN(weight)) {
      return new Error ('Not a number.');
    }

    if (!validRange) {
      return new Error('Weight needs to be between 80 and 300.')
    }
  }
}