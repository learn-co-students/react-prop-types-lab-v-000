import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {
  render() {
  return (
    <div></div>
  )
}
}

Product.defaultProps = {
  hasWatermark: false,
}

const weightValidator = (props, propName, componentName) => {
  componentName = componentName || 'ANONYMOUS';
  if (props[propName]) {
    let value = props[propName];
    if (typeof value === 'number') {
      if (value <= 80) {
        return new Error(propName + ' in ' + componentName + " is less than 80, but must be within 80 and 300.");
      } else if (value >= 300) {
        return new Error(propName + ' in ' + componentName + " is greater than 300, but must be within 80 and 300.");
      }
    } else {
      return new Error(propName + ' in ' + componentName + " must be a number");
    }
  } else {
    return new Error('weight' + ' in ' + componentName + " is required.");
  }
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: weightValidator
}

export default Product;
