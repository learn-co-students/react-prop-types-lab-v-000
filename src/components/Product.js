import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <p>Producer: {this.props.producer}</p>
        <p>Has watermark: {this.props.hasWatermark}</p>
        <p>Color: {this.props.color}</p>
        <p>Weight: {this.props.weight}</p>
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
  weight: rightWeight
}

function rightWeight(props, propName) {
  const weight = props[propName];
  if (weight) {
    if (typeof weight === 'number') {
      return weight >= 80 && weight <= 300 ? null : new Error('The `weight` prop should range between 80 and 300');
    } else {
      return new Error('The `weight` prop is not a number.')
    }
  }
  return new Error('The `weight` prop is required')
}

export default Product;