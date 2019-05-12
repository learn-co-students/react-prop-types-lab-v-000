// Code Product Component Here
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';	

class Product extends React.Component {
  render() {
    return (
      <div className="product">
        <p>Name: {this.props.name}</p>
        <p>Producer: {this.props.producer}</p>
        <p>Watermark: {this.props.hasWatermark? 'true' : 'false'}</p>
        <p>Color: {this.props.color}</p>
        <p>Weight: {this.props.weight}</p>
      </div>
    )
  }
}
export default Product;

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

function weightValidator(props, propName, componentName) {
  let value = props[propName];
  
  // -----should be requried-----
  if (!value) {
    return new Error('missing weight');
  }

  // -----should be a number-----
  if (typeof value !== 'number') {
    return new Error('weight must be a number');
  } 

  // -----should range between 80 and 300-----
  if (value < 80 || value > 300) {
    return new Error('weight must be between 80 and 300');
  }

  return null;
}


