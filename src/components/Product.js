import React from 'react'
import PropTypes from 'prop-types'

class Product extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.name}</p>
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

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: function weightProp(props, propName, componentName) {
    const weight = props[propName]
    if (typeof weight !== 'number' || weight > 300 || weight < 80) {
      console.error('Invalid ' + propName + 'supplied to ' + componentName + '. Validation failed.')
    }
  }
}

export default Product
