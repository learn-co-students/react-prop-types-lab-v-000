// Code Product Component Here
import React from 'react';
import PropTypes from 'prop-types';

export default class Product extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <p>{this.props.producer}</p>
        <p>{this.props.hasWatermark}</p>
        <p>{this.props.color}</p>
        <p>{this.props.weight}</p>
      </div>
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
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: function(props, propName) {
  if (props[propName] === undefined) {
      return new Error(`Missing ${propName}`)
    }
    if (typeof props[propName] !== 'number') {
      return new Error(`${propName} is not a number`)
    }
    if (props[propName] < 80 || props[propName] > 300) {
      return new Error(`${propName} has to be between 80 and 300`)
    }
  }
}
