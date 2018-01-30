// Code Product Component Here
import React from 'react';
import PropTypes from 'prop-types';

export default class Product extends React.Component {
  render() {
    return (
      <div></div>
    )
  }
}

Product.defaultProps = {
  hasWatermark: false,
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: (props, propName, componentName) => {
    let weight = props[propName];

    if (!weight) {
      return new Error(`The prop ${propName} is market as required`)
    }

    if (isNaN(weight)) {
      return new Error(`Invalid prop ${propName}`)
    }

    if (!(props[propName] > 79 && props[propName] < 301)) {
      return new Error(`Invalid prop ${propName} supplied to ${componentName}. Validation failed.`)
    }
  }
}
