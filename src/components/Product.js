// Code Product Component Here
import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {
  render() {
    return (
      <div>
        <p>Name: {this.props.name}</p>
        <p>Producer: {this.props.producer}</p>
        <p>Watermark: {this.props.hasWatermark}</p>
        <p>Color: {this.props.color}</p>
        <p>Weight: {this.props.weight}</p>
      </div>
    )
  }
}

Product.defaultProps = {
  hasWatermark: false
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  weight: function(props, propWeight) {
    const weight = props[propWeight]
    if (!(propWeight in props)) {
      return new Error(propWeight + " is missing");
    } else if (weight < 80 && weight < 300) {
      return new Error(`The 'weight' property must be between 80 and 300.`);
    } else if (isNaN(weight)) {
      return new Error(weight + " must be a number.")
    }
  }
};

export default Product
