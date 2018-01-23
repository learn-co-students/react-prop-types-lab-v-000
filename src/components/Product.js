// Code Product Component Here
// Code The Spaceship Component Here
import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {
  render() {
    return (
      <div className="product-card">
        <h1>{this.props.name}</h1>
        <h3>Producer: {this.props.producer}</h3>
        <h3>Has Watermark: {this.props.hasWatermark}</h3>
        <h3>Color: {this.props.color}</h3>
        <h3>Weight: {this.props.weight}</h3>
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
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: weightValidator
};

function weightValidator(props, propName) {
   if (typeof props[propName] !== 'number' || props[propName] < 80 || props[propName] > 300){
     console.error('Invalid type of' + propName + '. Validation failed.');
   }
 }

export default Product;
