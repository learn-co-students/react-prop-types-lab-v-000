import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {
 
  render() {
    return (
      <ul>
      <li>{this.props.name}</li>
      </ul>
      );
  }
}

var colors = ['white', 'eggshell-white', 'salmon']

var weight_range = [];                                                          
for (var i = 80; i <= 100; i++) {                                               
  weight_range.push(i);                                                         
}
 
Product.defaultProps = {
  name: "john",
  producer: 'regular',
  hasWatermark: true,
  color: "blue",
  weight: 80
};

Product.defaultProps = {
  hasWatermark: false,
};
 
Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(colors).isRequired,
  weight: PropTypes.oneOf(weight_range).isRequired
};

export default Product  
