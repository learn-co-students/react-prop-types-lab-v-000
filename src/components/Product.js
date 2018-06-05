// Code Product Component Here
import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {
  render() {
    return (
      <div className="product">
        <ul>
          <li>{this.props.name}</li>
          <li>{this.props.producer}</li>
          <li>{this.props.hasWatermark ? 'Watermarked' : 'Not Watermarked'}</li>
          <li>{this.props.color}</li>
          <li>{this.props.weight}</li>
        </ul>
      </div>
    )
  }
}

Product.defaultProps = {
  hasWatermark: false
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(["white", "eggshell-white", "salmon"]).isRequired,
  weight: function(props, propName, componentName) {
    const weight = props[propName];
    if (weight === undefined) {
      return new Error("Weight cannot be undefined.");
    }
    if (isNaN(weight)) {
      return new Error("Weight must be a number.");
    }
    if (weight < 80 || weight > 300) {
      return new Error("Weight must be between 80 and 300.");
    }
    return null;
  }
};

export default Product;
