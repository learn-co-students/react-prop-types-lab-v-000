// Code Product Component Here
import React from 'react'
import PropTypes from 'prop-types'

export default class Product extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <h2>{this.props.producer}</h2>
        <h3>{this.props.hasWatermark === false ? "false" : "true"}</h3>
        <h4>{this.props.color}</h4>
        <h5>{this.props.weight}</h5>
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
  weight(props, propName) {
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
};
