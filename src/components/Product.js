import React from 'react';
import PropTypes from 'prop-types';

export default class Product extends React.Component {
  render() {
    return (
      <div>Product</div>
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
  weight: customWeight
}

function customWeight(props, propName) {
  if (props[propName] === undefined) {
    return new Error(`Required prop ${propName}`)
  } else if (Number.isInteger(props[propName]) === false) {
    return new Error(`${propName} must be a number`)
  } else if (props[propName] < 80 || props[propName] > 300) {
    return new Error(`${propName} is not between 80 and 300`)
  }
}
