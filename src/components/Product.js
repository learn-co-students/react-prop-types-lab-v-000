// Code Product Component Here
import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {

  render() {
    return (
      <div className="product">
        <h1>Name: {this.props.name}</h1>
        <p>Producer: {this.props.producer}</p>
        <p>Has a Watermark? {this.props.hasWatermark}</p>
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
  color: PropTypes.oneOf([
    'white',
    'eggshell-white',
    'salmon'
  ]).isRequired,
  weight: (props, propName) => {
      const weight = props[propName];
      const isValid = weight > 80 && weight < 300;
      if (weight === undefined) {
        return new Error('The `weight` prop is required.');
      }if (isNaN(weight)) {
        return new Error('The `weight` prop is not a number.');
      }
      if (!isValid) {
        return new Error('The `weight` prop be between 80 and 300.');
      }
    },
}

export default Product;
