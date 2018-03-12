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
  const weight = prop[propType]

  if (!weight || weight < 80 || weight > 300){
	  return new Error('invalid weight')
	}
}

export default Product;
