// Code Product Component Here

import React from 'react';
import PropTypes from 'prop-types';

export default class Product extends React.Component {
  render() {
    return (
      <div className="product">
        <p>{this.props.name}</p>
        <p>{this.props.producer}</p>
        <p>{this.props.hasWatermark}</p>
        <p>{this.props.color}</p>
        <p>{this.props.weight}</p>
      </div>
    );
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
  weight: function(props, propName, componentName) {
    const error_output = 'Invalid prop ' + propName + ' supplied to ' + componentName + ':'

    if (props[propName] === undefined) {
      return new Error(error_output + 'required');
    }
    if (typeof props[propName] !== "number") {
      return new Error(error_output + 'not a number');
    }
    if (props[propName] < 80 || props[propName] > 300) {
      return new Error(error_output + 'out of range(80 - 300)');
    }
  }
}

