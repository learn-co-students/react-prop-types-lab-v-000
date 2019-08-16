// Code Product Component Here
import React from 'react';
import PropTypes from 'prop-types';

const acceptedColors = ['white', 'eggshell-white', 'salmon']

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

Product.defaultProps = {
  hasWatermark: false

}

function hasValue(props, propName, componentName, location){
  const acceptedColors = ['white', 'eggshell-white', 'salmon']
  if (props[propName]){
    let value = props[propName]
    if (typeof value !== 'string'){
      return new Error("Improper value, must be a string.")
    }
    return acceptedColors.includes(value) ? null : new Error("Not an accceptable color.")
  }
  else{
    return new Error("Value has not been assigned.")
  }
}

function customRange(props, propName, componentName, location){
  if (props[propName]){
    let value = props[propName]
    if (isNaN(value) ){
      return new Error("Value is not a number")
    }
    else if (value < 80 || value > 300) {
      return new Error("Value is not in accepted range")
    }
    else {
      return null
    }
  }
  else {
    return new Error("Value has not been assigned.")
  }
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  weight: customRange,
    color: PropTypes.oneOf([
    'white', 
    'eggshell-white', 
    'salmon'
  ]).isRequired
}

export default Product