// Code Product Component Here
import React from 'react';
import PropTypes from 'prop-types';
import propTypesRange from 'prop-types-range';

class Product extends React.Component {
  render() {
    return (
      <div className="product">
      <ul>
      <li>Name: {this.props.name}</li>
      <li>Producer: {this.props.producer}</li>
      <li>Watermark: {this.props.hasWatermark}</li>
      <li>Color: {this.props.color} </li>
      <li>Weight: {this.props.weight} </li>
      </ul>
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
  color: PropTypes.oneOf([
    'white', 'eggshell-white', 'salmon'
  ]).isRequired,
  weight: propTypesRange(80,300).isRequired
}


export default Product;
