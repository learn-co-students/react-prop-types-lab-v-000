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

Product.defaultProps = {
  hasWatermark: false

}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark:PropTypes.bool,
  colors: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']),
  weight: function(prop){
    if( !(Number.isInteger(prop) && prop >= 80 && prop <= 300) ){
      return new Error("Invalid value")
    }
  }
}

export default Product