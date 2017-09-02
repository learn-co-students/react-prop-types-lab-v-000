import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Product extends Component {
  render(){
    return (
      <div>
        <p>Name: {this.props.name}</p>
        <p>Producer: {this.props.producer}</p>
        <p>Watermark? {this.props.hasWatermark ? 'Yes' : 'No'}</p>
        <p>Color: {this.props.color}</p>
        <p>Weight: {this.props.weight}</p>
      </div>
    )
  }
};

Product.defaultProps = {
  hasWatermark: false
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: checkWeight
};

function checkWeight(props, propName, component){
  var weight = props[propName];
  if(weight == null){
    return new Error(`${component}: must have a ${propName}`);
  } else if (isNaN(weight)) {
    return new Error(`${component}: ${propName} must be an integer`);
  } else if (weight < 80 || weight > 300) {
    return new Error(`${component}: ${propName} must be between 80 and 300`);
  }
}

export default Product;
