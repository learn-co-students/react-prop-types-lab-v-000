import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {

  render() {
    return (
      <div className='product'>
      <h1>{this.props.name}</h1>
      <p>{this.props.producer}</p>
      <p>Has Watermark? {this.props.hasWatermark}</p>
      <p>Weight: {this.props.weight}</p>
      <small>Color: {this.props.color}</small>
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
  weight: function(props, propName, componentName) {
    const weight = props[propName]
    if (!weight) {
      return new Error(
        'Invalid prop' + propName + 'supplied to' +
        '`' + componentName + '`. Validation failed because prop was blank.'
      )
    } else if (weight < 80 || weight > 300) {
      return new Error(
        'Invalid prop' + propName + 'supplied to' +
        '`' + componentName + '`. Validation failed because prop was not in weight range of 80-300.'
      )
    } else if (isNaN(weight)) {
      return new Error(
        'Invalid prop' + propName + 'supplied to' +
       ' `' + componentName + '`. Validation Failed because prop was not a number.'
      )
    }
  }
}

export default Product;
