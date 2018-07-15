import React from 'react'
import PropTypes from 'prop-types'

export default class Product extends React.Component {
  render() {
    const {name, producer, hasWatermark, color, weight} = this.props

    return (
      <div className="product">
        <h2>{name}</h2>
        <h3>{producer}</h3>
        <p>Watermark: {hasWatermark ? 'Yes' : 'No'}</p>
        <p>Color: {color}</p>
        <p>Weight: {weight}</p>
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
  weight: (props, propName) => {
    const weight = props[propName]

    if (weight === undefined) {
      return new Error(
        `Invalid. Prop '${propName}' is required.`
      )
    }
    if (isNaN(weight)) {
      return new Error(
        `Invalid. Prop '${propName}' must be a number.`
      )
    }
    if (weight < 80 || weight > 300) {
      return new Error(
        `Invalid. Prop '${propName}' must be between 80 and 300.`
      )
    }
  }
}
