// Code Product Component Here
import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {
  render() {
    return (
      <div className="product">
        <div>{this.props.name}</div>
        <div>{this.props.producer}</div>
        <div>{this.props.hasWatermark}</div>
        <div>{this.props.color}</div>
        <div>{this.props.weight}</div>
      </div>
    );
  }
}

function productWeight(props, propName, componentName) {
  componentName = componentName || 'ANONYMOUS';
    if (props[propName]) {
        let value = props[propName];
        if (value === undefined) {
            return new Error('The `weight` prop is required.');
        }
        if (isNaN(value)) {
            return new Error('The `weight` prop is not a number.');
        }
        if (typeof value === 'number') {
            return value <= 300 && value >= 80 ? null : new Error(propName + ' in ' + componentName + " outside weight range.");
    }
    else {
        return new Error('The `weight` prop is required.');
    }
  }
  // assume all ok
  return null;
}

Product.defaultProps = {
  hasWatermark: false
};

Product.propTypes = {
    name: PropTypes.string.isRequired ,
    producer: PropTypes.string,
    hasWatermark: PropTypes.bool,
    color: PropTypes.oneOf(['white', 'eggshell-white','salmon']).isRequired,
  weight: (props, propName) => {
    const weight = props[propName];

    if (weight === undefined) {
      return new Error('The `weight` prop is required.');
    }

    if (isNaN(weight)) {
      return new Error('The `weight` prop is not a number.');
    }

    const isValidWeight = weight > 80 && weight < 300;

    if (!isValidWeight) {
      return new Error('The `weight` prop should range between 80 and 300.');
    }
  }
};

export default Product