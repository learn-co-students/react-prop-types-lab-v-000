// Code Product Component Here
import React from 'react';
import PropTypes from 'prop-types'

class Product extends React.Component {
  render() {
    return (
      <div className="product">
      <h1>{this.props.name}</h1>
      <h2>{this.props.producer}</h2>
      <h3>{this.props.hasWatermark}</h3>
      <h4>{this.props.color}</h4>
      <h4>{this.props.weight}</h4>
      </div>
    )
  }
}

export default Product

Product.defaultProps = {
  hasWatermark: false
}



Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: function(props, propName, componentName) {
    const weight = props[propName]
    if (weight === undefined) {
      return new Error('weight is required.')
    }
    if (isNaN(weight)){
    return new Error('weight must not a number')
  }
    if (weight < 80 || weight > 300) {
    return new Error('weight must be between 80lbs. and 300lbs.')
  }
  }
}
