// Code Product Component Here
import React from 'react'
import PropTypes from 'prop-types'

class Product extends React.Component {
  render() {
    return (
      <div className="product">
        <h2>{this.props.name}</h2>
        <ul>
          <li>Producer: {this.props.producer}</li>
          <li>{this.props.hasWatermark ? 'Watermark' : 'No Watermark'}</li>
          <li>Color: {this.props.color}</li>
          <li>Weight: {this.props.weight}</li>
        </ul>
      </div>
    );
  }
}

Product.defaultProps = {
  hasWatermark: false
}


Product.propTypes = {
  name: PropTypes.string.isRequired,
  hasWatermark: PropTypes.bool,
  producer: PropTypes.string,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: function(props, propName) {
    if (props[propName] === undefined) {
      return new Error(
        props[propName] + '`is required.'
      );
    }
    if (isNaN(props[propName])) {
      return new Error(
        props[propName] + '` must be a number.'
      );
    }
    if (props[propName] < 80 || props[propName] > 300) {
      return new Error(
        props[propName] + '` must be between 80 and 300'
      );
    }
  }
}

export default Product
