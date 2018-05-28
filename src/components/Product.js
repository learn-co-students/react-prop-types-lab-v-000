// Code Product Component Here
import React from 'react'
import PropTypes from 'prop-types'
class Product extends React.Component {
  render () {
    return (
      <div className="Product">
        <h1>{this.props.name}</h1>
        <h2>{this.props.producer}</h2>
        <h2>{this.props.hasWatermark}</h2>
        <h2>{this.props.color}</h2>
        <h2>{this.props.weight}</h2>
      </div>
    )
  }
}

Product.defaultProps = {
  hasWatermark: false
}

function weightLimit(props, propName, componentName) {
  componentName = componentName || 'ANONYMOUS';
  let weight = props[propName]

  if (!weight) {
    return new Error('Weight is required');
  }
  if (typeof weight !== 'number') {
    return new Error('Weight must be a number');
  }
  if (weight < 80 || weight > 300) {
    return new Error('Weight must be between 80 and 300');
  }
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white','eggshell-white','salmon']).isRequired,
  weight: weightLimit
}


export default Product
