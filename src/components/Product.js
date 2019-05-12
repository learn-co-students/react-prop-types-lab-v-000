// Code Product Component Here
import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component{
  render(){
    return (
      <div className="product">
        <ul>
          <li>Name: {this.props.name}</li>
          <li>Producer: {this.props.producer}</li>
          <li>Watermark: {this.props.hasWatermark}</li>
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

function weightPropType(props, propName, componentName) {
  let weight = props[propName];

  if (!weight) {
    return new Error('Weight is required');
  }
  if (isNaN(weight)) {
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
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: weightPropType
};


export default Product;
