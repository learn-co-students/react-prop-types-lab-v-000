// Code Product Component Here
import React from 'react';
import PropTypes from 'prop-types'

class Product extends React.Component{
  render() {
    const { name, producer, hasWatermark, color, weight } = this.props;
    return(
      <div>
        <p> Name: {name} </p>
        <p> Producer: {producer} </p>
        <p> Has Water Mark? {hasWatermark ? "yes" : "no"} </p>
        <p> Color: {color} </p>
        <p> Weight: {weight} </p>
      </div>
    )
  }
}

function validateWeight(props, propName, componentName){
  let value = props[propName];
  if(!value) {
    return new Error(propName + " is required");
  } else if(!Number.isInteger(value)){
    return new Error(propName + " needs to be an integer");
  } else if(value < 80 || value > 300){
    return new Error(propName + " needs to be between 80 and 300");
  } else {
    debugger
    return null;
  }
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: validateWeight
}

Product.defaultProps = {
  hasWatermark:false,
}

export default Product;
