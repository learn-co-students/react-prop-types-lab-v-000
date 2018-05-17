// Code Product Component Here
import React from 'react';
import PropTypes from 'prop-types';

export default class Product extends React.Component {
  render() {
    return (
      <div>
        <h1>Name: {this.props.name}</h1>
        <ul>
          <li>Producer: {this.props.producer}</li>
          <li>Has Watermark: {this.props.hasWatermark? 'yes' : 'no'}</li>
          <li>Color: {this.props.color}</li>
          <li>Weight: {this.props.weight}</li>
        </ul>
      </div>
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
  weight
};

function weight(props, propName, component) {
  if (props[propName]) {
    let value = props[propName];
    if (typeof value === 'number') {
        return value >= 80 && value <= 300 ? null : new Error(propName + ' in ' + component + " needs to be between 80 and 300.");
    } else {
      return new Error(propName + ' in ' + component + " must be a number.");
    }
  } else {
    return new Error(propName + ' in ' + component + " is required.");
  }

  return null;
}
