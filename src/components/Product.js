import React from 'react'
import PropTypes from 'prop-types';

class Product extends React.Component {
  render(){
    return(
      <div>
        <h1>{this.props.name}</h1>
        <h4>{this.props.producer}</h4>
        <p>{this.props.color}</p>
        <p>{this.props.weight}</p>
      </div>
    )
  }
}

Product.defaultProps = {
  hasWatermark: false
}

function isRightAmount(props, propName, componentName){
  const propWeight = props[propName]
  if(propWeight === undefined){
    return new Error("Must enter weight.")
  }else if(typeof propWeight !== 'number'){
    return new Error("Must be a string and a number")
  }else if(typeof propWeight === 'number'){
    return (propWeight < 300 && propWeight > 80) ? null : new Error(propName + ' in ' + componentName + " is not a proper weight")
  }
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(["white", "eggshell-white", "salmon"]).isRequired,
  weight: isRightAmount
}

export default Product
