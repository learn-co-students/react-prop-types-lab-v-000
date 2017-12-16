// Code Product Component Here
import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {
  render() {
    return(
      <div>
        Product
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
  color: PropTypes.oneOf([
    'white',
    'eggshell-white',
    'salmon'
  ]).isRequired,
  customProp: function(props, weight, Product) {
    if (props[weight] > 300 || props[weight] < 80) {
      return new Error(
        'Invalid prop `' + weight + '`. Validation failed.'
      );
    }
  },
};

export default Product;
