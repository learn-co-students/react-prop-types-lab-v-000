import React from 'react';
import PropTypes from 'prop-types';

export default class Product extends React.Component{
  render(){
    return(
      <div>
        <h1>{this.props.name}</h1>
        <ul>
          <li>Producer:{this.props.producer}</li>
          <li>Watermark: {this.props.hasWatermark}</li>
          <li>Color: {this.props.color}</li>
          <li>Weight: {this.props.weight}</li>
        </ul>
      </div>
    );
  }
}

Product.defaultProps = {
  hasWatermark: false
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: React.PropTypes.oneOf(['white'], ['eggshell-white'], ['salmon']).isRequired,
  weight:  function(props, propName) {
  if (props[propName] === undefined){
    return new Error('The `weight` prop is required.');
  }
  if (isNaN(props[propName])){
    return new Error('The `weight` prop is not a number.');
  }
   if(props[propName] < 80 || props[propName] > 300) {
      return new Error('The `weight` prop should range between 80 and 300.');
   }
  }
};
