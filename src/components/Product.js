// Code Product Component Here
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class Product extends React.Component{
  render(){
    return(<div>
      <p>{this.props.name}</p>
      <p>{this.props.producer}</p>
      <p>{this.props.hasWatermark}</p>
      <p>{this.props.color}</p>
      <p>{this.props.weight}</p>
    </div>)
  }
}

Product.defaultProps = {
  hasWatermark: false
}

// var weightRange = new Range(0, 301)];

var weightRange = [];
for (var i = 80; i < 301; i++) {
  weight_range.push(i);
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: PropTypes.oneOf(weightRange).isRequired
}

export default Product;
