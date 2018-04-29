// Code Product Component Here
import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {
  render() {
    return (
      <div className="product">
        <p>Name: {this.props.name}</p>
        <p>Producer: {this.props.producer}</p>
        <p>Watermark: {this.props.hasWatermark}</p>
        <p>Color: {this.props.color}</p>
        <p>Weight: {this.props.weight}</p>
      </div>
    );
  }
};

Product.defaultProps = {
  hasWatermark: false
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: checkWeight
};

function checkWeight (props, propName, componentName) {
  let weight = props[propName];
  if (weight < 80 || weight > 300) {
    return new Error (propName + 'needs to be between 80 and 300')
  } else if (weight === undefined) {
    return new Error (propName + 'is required.')
  } else if (isNaN(weight)) {
    return new Error (propName + 'must be a number.')
  }
}

export default Product;
