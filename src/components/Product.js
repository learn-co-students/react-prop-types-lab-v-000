// Code Product Component Here
import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {
  render () {
    return (
      <div className="paper">
      </div>
    );
  }
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: function(props, propName, component){
    var valType = typeof props[propName]
    console.log(valType);
    if (props[propName] === undefined ) {
      return new Error ('missing ${propName}')
    }
    if (typeof (props[propName]) != "number") {
      return new Error ('the ${propName} must be a number')
    }
    if (props[propName] < 80 || props[propName] > 300) {
      return new Error('must be between 80 and 300')
    }

  }
}

Product.defaultProps = {
  hasWatermark: false
}

export default Product;
