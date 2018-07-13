// Code Product Component Here
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
class Product extends React.Component{
  render (){
    return(
      <div>
        <ul>
          <li>{this.props.name}</li>
          <li>{this.props.producer}</li>
          <li>{this.props.hasWatermark}</li>
          <li>{this.props.color}</li>
          <li>{this.props.weight}</li>
        </ul>
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
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: weightOptions
}
function weightOptions(props, propName, componentName){
  componentName = componentName || 'ANONYMOUS';

  if(props[propName]){
    let value = props[propName];
    if(typeof value === 'number'){
      return (value >= 80 && value <= 300) ? null : new Error(propName + 'in ' + componentName + " is not between 80 and 300.");
    } else {
      return new Error(propName + 'in ' + componentName + " must be a number");
    }
  }

  return new Error(propName + 'in ' + componentName + " is required");
}

export default Product;
