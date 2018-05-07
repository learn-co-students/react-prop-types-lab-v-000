// Code Product Component Here
import React from 'react'
import PropTypes from 'prop-types'

class Product extends React.Component {
  render() {
    return(
      <div>
        <h1>{this.props.name}</h1>
        <h2>{this.props.producer}</h2>
        <h3>{this.props.color}</h3>
        <h4>{this.props.weight}</h4>
      </div>
    )
  }
}

Product.defaultProps = {
  hasWatermark: false
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: (props, propName) => {
    const weight = props[propName];
    if (weight < 80 || weight > 300) {
      return new Error(`Invalid weight range in ${propName}`);
    } else if (weight === undefined) {
      return new Error(`${propName} is required`)
    } else if (isNaN(weight)) {
      return new Error(`${propName} is not a Number`)
    }
  }
};

export default Product
