// Code Product Component Here
import ReactDOM from 'react-dom';
import React from 'react';
import PropTypes from 'prop-types';

export default class Product extends React.Component {
  render() {
    return (
      <div className="product-card">
        <h1>{this.props.name}</h1>
        <h3>{this.props.producer}</h3>
        <p>Watermark: {this.props.hasWatermark ? 'Yes' : 'No'}</p>
        <p>Color: {this.props.color}</p>
        <p>Weight: {this.props.weight}</p>
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
    if (props[propName]) {
      let weight = props[propName];
      if (typeof weight === 'number') {
        return (weight < 80 || weight > 300) ? new Error("Weight must be between 80-300.") : null
    } else {
        return new Error("Weight must be a number.")
      }
    } else {
      return new Error("Weight is required.")
    }
  }
}
