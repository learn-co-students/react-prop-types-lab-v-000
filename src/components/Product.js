import React from 'react';
import PropTypes from 'prop-types';

export default class Product extends React.Component {
  render(){

  }
}
Product.defaultProps ={
  hasWatermark: false
}

Product.propTypes = {
  hasWatermark: PropTypes.bool,
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  color: PropTypes.oneOf(['white','eggshell-white','salmon']).isRequired,
    weight: (props, propName) => {
      let weight = props[propName];
      if (weight === undefined) {
        return new Error("Please input weight");
      }
      if (isNaN(weight)) {
        return new Error("weight must be a number");
      }
      if (!(weight >= 80 && weight <= 300))
      return new Error("weight must be between 80 to 300");
    }
}
