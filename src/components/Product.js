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
    )
  }
};

Product.defaultProps = {
  hasWatermark: false
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  hasWatermark: PropTypes.bool,
  producer: PropTypes.string,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: function(props, propName) {
    const weight = props[propName];
    if (weight === undefined) {
      return new Error('The `weight` prop is required.');
    }
    if (isNaN(weight)) {
      return new Error('The `weight` prop is not a number.');
    }
    if (weight < 80 || weight > 300) {
      return new Error('The `weight` prop must be between 80 and 300.');
    }
  }
};

export default Product
