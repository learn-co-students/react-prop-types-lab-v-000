// Code Product Component Here
import React from 'react';
import PropTypes from 'prop-types';

export default class Product extends React.Component {
  render(){
    return (
      <p>TT</p>
    )
  }
}

Product.defaultProps = {
  hasWatermark: false
}

const weightCheck = (props, propName, componentName) => {
  const weight = props[propName];

  if (weight === undefined) {
    return new Error('This is required')
  } if (isNaN(weight)){
    return new Error('Weight must be a number')
  } if (weight < 80 || weight > 300) {
    return new Error('Weight must be between 80lbs. and 300lbs.')
  }
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: weightCheck
}
