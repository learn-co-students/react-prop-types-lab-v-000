import React from 'react';
import PropTypes from 'prop-types';

const Product = (props) => {
  return(
    <div>
      <p><strong>Product Name:</strong> {props.name}</p>
      <p><strong>Producer:</strong> {props.producer}</p>
      <p><strong>Water Marked?:</strong> {props.hasWatermark === true ? 'YOU KNOW IT' : 'Sorry, but it is cheap...'}</p>
      <p><strong>Color:</strong> {props.color}</p>
      <p><strong>Weight:</strong> {props.weight}</p>
    </div>
  )
}

const rigthWeight = (props, propName, componentName) => {
  componentName = componentName || "ANONYMOUS";

  if (props[propName]) {
    let value = props[propName];

    if (typeof value !== 'number') {
      return new Error(`${propName} in ${componentName} must be a number.`);
    } else if (value < 80 || value > 300) {
      return new Error(`${propName} in ${componentName} must be between 80 and 300 (lbs).`);
    }
  } else {
    return new Error(`${propName} in ${componentName} is required.`);
  }
  return null;
}

Product.defaultProps = {
  hasWatermark: false,
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: rigthWeight,
};

export default Product;
