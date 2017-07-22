// Code Product Component Here
import React from 'react'
import PropTypes from 'prop-types'

class Product extends React.Component{
  render(){
    return(
      <div>
        <p>Name:{this.props.name}</p>
        <p>Producer:{this.props.producer}</p>
        <p>Has watermark:{this.props.hasWatermark}</p>
        <p>Color:{this.props.color}</p>
        <p>Weight:{this.props.weight}</p>
      </div>
    );
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
    var weight = props[propName]
    if(weight === undefined){
      return new Error (`You must provide a weight`)
    }

    if(isNaN(weight)){
      return new Error ('You must provide a number for weight')
    }

    if(weight < 80 || weight > 300){
      return new Error ('weight must be between 80 and 300')
    }
    return null
  }
}

export default Product
