// Code Product Component Here
import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {
   render() {
      return (
         <div>Product</div>
      )
   }
}

Product.defaultProps = {
   hasWatermark: false
};

var weight_range = [];
for (let i = 80; i <= 300; i++) {
   weight_range.push[i];
   
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
   weight: function(props, propName, componentName) {
      let weight = props[propName];
      
      if (weight === undefined) {
        return new Error("Sorry you must include a number for weight.");
      }
  
      if (isNaN(weight)) {
        return new Error("Sorry weight must be a number.");
      }
  
      return weight >= 80 && weight <= 300 ? null : new Error("Must be within range of 80 to 300");
    }
};

export default Product;