// Code Product Component Here
import React from 'react';
import PropTypes from 'prop-types';


class Product extends React.Component{
  render(){
    return (
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
  hasWatermark: false,
};

function weightChecker(props, propName, componentName){
  if(typeof props[propName] === 'string'){
    return new Error ('Invalid type')
  }else if(props[propName] > 300 || props[propName] < 80){
    return new Error ('Invalid number')
  }else if(!props[propName]){
    return new Error ('This value is required')
  }

}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: weightChecker
};


export default Product
