// Code Product Component Here
import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {
  render() {
    return(
      <div>
        <h1>{this.props.name}</h1>
        <p>{this.props.producer}</p>
        <p>{this.props.hasWatermark ? "Yes" : "No"}</p>
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
  weight: (props, propName) => {
    let value = props[propName];
    if (value === undefined) {return new Error(propName + "is required");}
    if (isNaN(value)) {return new Error(propName + "is not a number");}
    if (value < 80 || value > 300) {return new Error(propName + " is out of range");}
  }
};

Product.defaultProps = {
  hasWatermark: false
}

export default Product;
