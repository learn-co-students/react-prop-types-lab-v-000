import React from 'react';
import PropTypes from 'prop-types';

function checkWeight(props, propName, componentName) {
  componentName = componentName || 'ANONYMOUS';
  if (props[propName]) {
    let value = props[propName];
    if (typeof value === 'number') {
        return (value >= 80 && value <= 300 )? null : new Error(propName + ' in ' + componentName + " is not in the specified weight");
    }
    return new Error(propName + 'must be a number');
  }
  // assume all ok
  return new Error(propName + 'is required');
}

class Product extends React.Component{
  render(){
    return(
      <div class="product">
        <h1> {this.props.name} </h1>
        <h2> Produced By: {this.props.producer} </h2>
        <h3> Information About the Product</h3>
        <p> This product has a watermark: {this.props.hasWatermark} </p>
        <p> It is colored {this.props.color}.</p>
        <p> It has a weight of {this.props.weight} </p>
      </div>



    )
  }
}

Product.defaultProps ={
  hasWatermark: false
}



Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white','eggshell-white','salmon']).isRequired,
  weight: checkWeight
}

export default Product;
