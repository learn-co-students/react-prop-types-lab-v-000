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
  hasWatermark: false
}

function checkWeight(props, propName, componentName) {
  if (props[propName]) {
    let value = props[propName];
    if (typeof value === 'number') {
        return (value <= 300 && value >=80) ? null : new Error(propName + ' in ' + componentName + " is outside of 80 to 300");
    } else {
        return new Error(propName + 'must be a number.')
    }
  } else {
    return new Error('Missing '+ propName + '.')
  }
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white','eggshell-white','salmon']).isRequired,
  weight: checkWeight
}