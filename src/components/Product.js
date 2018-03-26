// Code Product Component Here
import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {
  render() {
    return (
      <div className="product">
      <ul>
      <li>{this.props.name}</li>
      <li>{this.props.producer}</li>
      <li>{this.props.hasWatermark ? "yes" : "no"}</li>
      <li>{this.props.color}</li>
      <li>{this.props.weight}</li>
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
    'white',
    'eggshell-white',
    'salmon'
  ]).isRequired,
  weight: (props, propsName) => {
    const weight = props[propsName];


    if (weight === undefined) {
      return new Error(' the `weight` is required');
    }
    if(isNaN(weight)) {
      return new Error(' the `weight` is not a number');
    }

    const validWeight = weight > 80 && weight < 300

    if(!validWeight){
      return new Error ('not between the right weight');
    }
  }
}

export default Product
