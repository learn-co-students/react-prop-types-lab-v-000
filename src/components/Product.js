import React from 'react'
import PropTypes from 'prop-types'

class Product extends React.Component {
  render() {
    return (
      <div>
        {this.props.name}
        {this.props.producer}
        {this.props.hasWatermark}
        {this.props.color}
        {this.props.weight}
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
  weight: PropTypes.number.isRequired,
  weight: function(props, propName, componentName) {
    const v = props[propName]

    if (!v) {
      return new Error('must be defined')
    }

    if (isNaN(v)) {
      return new Error('must be a number')
    }

    if (v < 80 || v > 300) {
      return new Error('must be between 80 and 300')
    }
  }
}

export default Product
