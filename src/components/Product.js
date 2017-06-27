import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {
  render () {
    return (
      <div className="product">
        <ul>
          <li>{this.props.name}</li>
          <li>{this.props.producer}</li>
          <li>{this.props.hasWatermark}</li>
          <li>{this.props.color}</li>
          <li>{this.props.weight}</li>
        </ul>
      </div>
    )
  }
}

Product.defaultProps = {
  hasWatermark: false
}

Product.propTypes = {
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: customWeight,
  name: PropTypes.string.isRequired
}

function customWeight(props, propName, componentNames) {
  componentNames = componentNames || 0
  if (props[propName]) {
    let value = props[propName];
    if (typeof value != 'number') {
      return new Error("Weight must be a number");
    }
    if (value < 80 || value > 300) {
      return new Error("Weight is out of range")
    }
    return null;
  }
  return new Error("Invalid weight");
}

export default Product;