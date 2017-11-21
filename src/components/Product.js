// Code Product Component Here
import React from 'react'
import PropTypes from 'prop-types'

class Product extends React.Component {
  render () {
    return (
      <div className="product">
        <h1>{this.props.name}</h1>
        <p>Producer: {this.props.producer}</p>
        <p>Watermark: {this.props.hasWatermerk ? 'Yes' : 'No'}</p>
        <p>Color: {this.props.color}</p>
        <p>Weight: {this.props.weight}</p>
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
  color: PropTypes.oneOf(['white', 'egshell-white', 'salmon']).isRequired,
  weight: function(props, propName, componentName) {
    const weight = props[propName]
    const error = `Invalid prop \`${propName}\``


    if (weight < 80 || weight > 300){
      return new Error(error) 
    } 
    
    if (isNaN(weight)){
      return new Error(error)
    } 
  }
}

export default Product
