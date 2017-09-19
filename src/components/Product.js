// Code Product Component Here
import React from 'react'
import PropTypes from 'prop-types'

class Product extends React.Component {
  render() {
    return(
      <div className="product">
        <h1>{this.props.name}</h1>
        <ul>
          <li>Producer: {this.props.producer}</li>
          <li>{this.props.hasWatermark ? 'Includes watermark' : 'Missing watermark'}</li>
          <li>Color: {this.props.color}</li>
          <li>Weight: {this.props.weight}</li>
        </ul>
      </div>
    )
  }
};

Product.defaultProps = {
  hasWatermark: false
};


Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: weightLimit
}


function weightLimit(props,propName,componentName){

  if(props[propName]){
    let value = props[propName]
    if (typeof value === 'number'){
      if (value > 300 || value < 80){
        return new Error(propName + ' in ' + componentName + " is out of the weight range")
      } else {
        return null
      }
    } else {
      return new Error(propName + ' in ' + componentName + "must be a number")
    }
  } else {
    return new Error(propName + ' in ' + componentName + "is required")
  }
}



export default Product;
