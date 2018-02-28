import React from 'react';
import PropTypes from 'prop-types';

export default class Product extends React.Component {
  render() {
    return (
      <div>
        <h2>Name: {this.props.name}</h2>
        <p>Product: {this.props.producer}</p>
        <p>Has Watermark: {this.props.hasWatermark}</p>
        <p>Color: {this.props.color}</p>
        <p>Weight: {this.props.weight}</p>
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
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: weightRange
}

function weightRange (props, propName, componentName) {

    let value = props[propName];
    if (value === undefined) {
      return new Error(`${propName} must be defined`)
    }

    if (typeof value !== 'number') {
      return new Error(`${propName} must be a number`)
    }

    if (value > 300 || value < 80) {
      return new Error(`${propName} must be between 80 and 300`)
    }
}
