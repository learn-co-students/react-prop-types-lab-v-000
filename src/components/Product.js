// Code Product Component Here
import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {
  render() {
    return (<div>Product</div>)
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
  weight: function weightProp(props, propName) {
    const weight = props[propName]
    if (typeof weight !== 'number' || weight < 80 || weight > 300) {
      console.error('Invalid ' + propName)
    }
  }
}

export default Product;
