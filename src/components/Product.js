import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {
  render() {
   return (
     <div className="product">
       {this.props.name}
       {this.props.weight}
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
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: function (props, propName){
    debugger
    const weight = props[propName]
    if (!(propName in props)){
      return new Error (propName + " missing")
    } else if (weight < 79 && weight < 301) {
      return new Error('The `weight` prop should range between 80 and 300.');
  } else if (isNaN(weight)) {
     return new Error(weight + ' is not a number')
  }
}
};

export default Product