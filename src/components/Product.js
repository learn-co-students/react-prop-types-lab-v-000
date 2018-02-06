// Code Product Component Here
import React from 'react'
import PropTypes from 'prop-types'

class Product extends React.Component {
  render () {
    return (
      <div>
        <ul>
          <h2>Name: {this.props.name}</h2>
          <li>Producer: {this.props.producer}</li>
          <li>Has Watermark? {this.props.hasWatermark.toString()}</li>
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
  color: PropTypes.oneOf([
    'white',
    'eggshell-white',
    'salmon'
  ]).isRequired,
  weight: (props, propName) => {
    const weight = props[propName]
    const isValid = weight > 80 && weight < 300

    if (weight === undefined) {
      return new Error('There should be a weight for a product.')
    }

    if (isNaN(weight)) {
      return new Error('Product weight must be an interger.')
    }

    if (!isValid) {
      return new Error('The weight must be between 80 and 300.')
    }

  }
}

export default Product;

// *  `name`: a string — required
// *  `producer`: a string — optional
// *  `hasWatermark`: a boolean — optional, defaults to false
// *  `color`: a string — required, can only be `'white'`, `'eggshell-white'` or `'salmon'`
// *  `weight`: a number — required, ranges between 80 and 300
