import React from 'react';
import PropTypes from 'prop-types'

class Product extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.name}</p>
        <p>{this.props.producer}</p>
        <p>{this.props.hasWatermark}</p>
        <p>{this.props.color}</p>
        <p>{this.props.weight}</p>
      </div>
    );
  }
}

function weightPropType(props, propName) {
  var weight = props[propName];
  if (weight === undefined) {
    return new Error('weight undefined');
  }
  if(isNaN(weight)) {
    return new Error('weight must be a number');
  }
  if (weight < 80 || weight > 300) {
    return new Error('Must be between 80 and 300');
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
  weight: weightPropType
};

export default Product;
