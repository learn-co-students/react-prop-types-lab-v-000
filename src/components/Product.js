// Code Product Component Here
import React from 'react';
import PropTypes from 'prop-types';

function goodWeight(props, propName, componentName) {
  if (!(props[propName])) {
    return new Error("Weight is a required property");
  }
  let value = props[propName];
  if (NaN(value)) {
    return new Error(propName + ' must be a number');
  }
  if (value > 300 || value < 80 ) {
    return new Error(propName + ' must be a number between 80 and 300');
  }
}


class Product extends React.Component {
  render() {
    return (
      <div>
        <p>Name: {this.props.name}</p>
        <p>Producer: {this.props.producer}</p>
        <p>Has Watermark?: {this.props.hasWatermark}</p>
        <p>Color: {this.props.color}</p>
        <p>Weight: {this.props.weight}</p>
      </div>
    );
  }
}


Product.defaultProps = {
  hasWatermark: false
}

Product.propTypes = {
  weight: goodWeight,//PropTypes.number.isRequired
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired
   
}

export default Product;