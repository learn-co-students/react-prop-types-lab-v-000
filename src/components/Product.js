// Code Product Component Here
import React from 'react';
import PropTypes from 'prop-types'

class Product extends React.Component {
  render() {
    return (
      <div className="product">
        <h1>{this.props.name}</h1>
        <h3>By: {this.props.producer}</h3>
        <h4>Has watermark: {this.props.hasWatermark ? 'True' : 'False'}</h4>
        <ul>
          <li><strong>Color:</strong> {this.props.color}</li>
          <li><strong>Weight:</strong> {this.props.weight}</li>
        </ul>
      </div>
    );
  }
}

Product.defaultProps = {
  hasWatermark: false
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf([
    'white',
    'eggshell-white',
    'salmon'
  ]).isRequired,
  weight: function (props, propName, componentName) {
    const weight = props[propName];
    if (weight === undefined) {
      return new Error ('Weight property is required')
    } else if (isNaN(weight)) {
      return new Error ('Weight property must be a number')
    } else if (weight < 80 || weight > 300) {
      return new Error ('Weight property must be between 80 and 300')
    }
  }
};

export default Product;
