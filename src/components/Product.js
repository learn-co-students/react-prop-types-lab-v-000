import React from 'react';
import PropTypes from 'prop-types';

export default class Product extends React.Component {
  render () {
    return (
      <ul>
        <li>{this.props.name}</li>
        <li>{this.props.producer}</li>
        <li>{this.props.hasWatermark ? 'Yes' : 'No'}</li>
        <li>{this.props.color}</li>
        <li>{this.props.weight}</li>
      </ul>
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
  color: PropTypes.oneOf([
    'white', 'eggshell-white', 'salmon'
  ]).isRequired,
  weight: (props, propName) => {
    const weight = props[propName];
    const isValidWeight = weight > 80 && weight < 300;
    
    if (weight === undefined) {
      return new Error ('Undefined `weight`.');
    }
    if (isNaN(weight)) {
      return new Error ('`weight` is not a number.');
    }
    if (!isValidWeight) {
      return new Error ('`weight` is not a valid weight.');
    }
  },
}








