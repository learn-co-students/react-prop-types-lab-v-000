// Code Product Component Here
import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {
  render(){
    return (
      <div className="product">
        <h3>Name: {this.props.name}</h3>
        <p>{!!this.props.producer ? "Producer: " + this.props.producer : null}</p>
        <p>{this.props.has_watermark ? "Watermarked" : null} </p>
        <p>Color: {this.props.color}</p>
        <p>Weight: {this.props.weight}</p>
      </div>
    )
  }
};

Product.defaultProps = {
  hasWatermark: false,
}

function checkWeight(props, propName, componentName){
  const theWeight = props["weight"]
  if (theWeight < 80 | theWeight > 300){
    return new Error(
      'Invalid prop ' + propName + ' supplied to ' + componentName+ '. Validation failed.'
    );
  }
  if (!theWeight){
    return new Error(
      'Weight specification is required in ' + componentName
    );
  }

  if (isNaN(theWeight)){
    return new Error(
      'Weight weight prop must be a number in ' + componentName
    );
  }
  return null
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight:  checkWeight
};

export default Product;
