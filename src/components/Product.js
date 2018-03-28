// Code Product Component Here
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'

class Product extends React.Component {
  render() {
    return (
      <div>
        Product
      </div>
    )
  }
}

Product.defaultProps = {
  hasWatermark: false
}

function weightRange(props, propName){
  const weight = props[propName];
  if (weight === undefined) {
    return new Error('The `weight` prop is required.');
  }
  if (isNaN(weight)) {
    return new Error('The `weight` prop is not a number.');
  }
  if (weight < 80 || 300 < weight) {
    return new Error('The `weight` prop should range between 80 and 300.');
  }
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: weightRange
}

export default Product;