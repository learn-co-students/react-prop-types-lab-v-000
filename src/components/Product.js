// Code Product Component Here
import React from 'react';
import PropTypes from 'prop-types';

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
    )
  }
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: weightPropType
};

Product.defaultProps = {
	hasWatermark: false
}

function weightPropType(prop, propType) {
  const weightProp = prop[propType];
  if (!weightProp) {
    return new Error('weight required');
  }
  else if (isNaN(weightProp)) {
    return new Error('weight must be a number')
  }
  else if (weightProp < 80 || weightProp > 300) {
	  return new Error('invalid weight')
	}
}

export default Product;
