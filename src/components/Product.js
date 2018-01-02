// Code Product Component Her
import React from 'react'
import PropTypes from 'prop-types'
const range = require('range-array');

export default class Product extends React.Component {
  render () {
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
  hasWatermark: false
}

function weightCheck (props, propName, componentName) {
  if (typeof props[propName] === 'number' && props[propName] >= 80 && props[propName] <= 300) {

  } else {
    return new Error('Invalid entry, weight must be between 80 and 300')
  }
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: PropTypes.oneOf(range(80, 100)).isRequired
}
