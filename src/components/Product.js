import React from 'react'
import PropTypes from 'prop-types';
// Code Product Component Here
export default class Product extends React.Component{
  render(){
    return (<div></div>);
  }
}

Product.defaultProps = {
  hasWatermark: false
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: function(props, name){
    if(props[name]===undefined)return new Error('The `weight` prop is required.');
    if(isNaN(props[name]))return new Error('Weight must be an integer');
    if(props[name] <=80 || props[name] >= 200)return new Error('Weight must be between 80 and 300');
  }
};
