// Code Product Component Here
import React from 'react';
import PropTypes from 'prop-types';

export default class Product extends React.Component{
  render(){
    return(
      <div>
        <h1>{this.props.name}</h1>
        <h3>{this.props.producer}</h3>
        <h3>{this.props.hasWatermark}</h3>
        <h3>{this.props.color}</h3>
        <h3>{this.props.weight}</h3>
      </div>
    );
  }
}

var weight_arr = [];
for(let i = 80; i < 301; i++){
  weight_arr.push(i)
}

Product.defaultProps = {
  hasWatermark: false,
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white','eggshell-white','salmon']).isRequired,
  weight: PropTypes.oneOf(weight_arr).isRequired
}
