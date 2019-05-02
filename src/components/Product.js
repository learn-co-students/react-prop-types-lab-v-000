import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {
  render() {
    return (
      <div className="product">
        <h1>Name: {this.props.name}</h1>
        <p>Producer: {this.props.producer}</p>
        <p>Watermarks: {this.props.hasWatermark}</p>
        <p>Color: {this.props.color}</p>
        <p>Weight: {this.props.weight}</p>
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
  weight: (props, Product) => {
   const weight = props[Product];
   const validWeight = weight > 80 && weight < 300;

    if(weight === undefined) {
      return new Error('Please enter a weight.')
    }
    if(isNaN(weight)) {
      return new Error('Please enter a number.')
    }
    if(!validWeight) {
      return new Error('Weight must be between 80 and 300')
    }
  }
}

export default Product;
