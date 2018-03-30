import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {
  render() {
    return (
      <div>
        <h1>Order for: {this.props.name}</h1>
        <ul>
          <li>Producer: {this.props.producer}</li>
          <li>Watermark: {this.props.hasWatermark}</li>
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

function weightTypes(props, propName, componentName) {
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
  color: PropTypes.oneOf([
    'white',
    'eggshell-white',
    'salmon'
  ]).isRequired,
  weight: weightTypes
}

export default Product
