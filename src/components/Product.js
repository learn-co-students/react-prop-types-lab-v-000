// Code Product Component Here
import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {
  render() {
    return(
      <div>
        Product
      </div>
    )
  }
}

Product.defaultProps = {
  hasWatermark: false
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf([
    'white',
    'eggshell-white',
    'salmon'
    ]).isRequired,
  weight: (props, propName) => {
    const weight = props[propName];
    if(weight === undefined){
      return new Error('Props `weight` is required or a number.')
    }

    if(isNaN(weight)) { //REMEMBER NaN NOT Nan!!
      return new Error('Props `weight` must be a number.')
    }

    const valid = weight < 300 && weight > 80;

    if(!valid){
        return new Error('Props `weight` must be between 80 and 300.')
    }
  },
};



export default Product;
