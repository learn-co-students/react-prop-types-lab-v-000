 import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <h3>{this.props.producer}</h3>
        <p>Watermark? - {this.props.hasWatermark}</p>
        <p>Color: {this.props.color} </p>
      </div>  
    )
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
  weight: function(props, propName, componentName){
    const weight = props[propName]
    if (weight === undefined){
      return new Error(propName + 'is undefined')
    }
    if (isNaN(weight)){ 
      return new Error(propName + 'is not a number')
    } 
    if (weight < 80 || weight > 300){
      return new Error(propName + 'is out of range')
    } 
  }
}

export default Product