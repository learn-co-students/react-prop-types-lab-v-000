// Code Product Component Here
import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component{
  render(){
    return(
      <div>
        <h1>{this.props.name}</h1>
        <p>{this.props.producer}</p>
        <p>{this.props.hasWatermark}</p>
        <p>{this.props.color}</p>
        <p>{this.props.weight}</p>
      </div>
    )
  }
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark:PropTypes.boolean,
  colors: PropTypes.string.isRequired,
  weight: PropTypes.number.isRequired
}

export default Product