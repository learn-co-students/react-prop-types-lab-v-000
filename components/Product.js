import React from 'react'; 
import PropTypes from 'prop-types';

export default class Product extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.name}</p>
        <p>{this.props.producer}</p>
        <p>{this.props.hasWatermark? "yes" : "no"}</p>
        <p>{this.props.color}</p>
        <p>{this.props.weight}</p>
      </div>
      )  
  }
}

Product.defaultProps = {
  hasWatermark: false, 
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string, 
  hasWatermark: PropTypes.bool, 
  color: PropTypes.oneOf(["salmon","white","eggshell-white"]).isRequired, 
  weight: validWeight
}

function validWeight(props, propName, componentName) {
  componentName= componentName || "ANONYMOUS"; 

  const weight = props[propName]; 
  
  if (weight === undefined) {
    return new Error('The `weight` prop is required.');  
  }
  if (isNaN(weight)) {
    return new Error(propName+ ' in ' + componentName + ' must be a number');  
  }

  if (weight < 80 ||weight > 300) {
    return new Error('The `weight` prop mustbe between 80 and 300');  
  }
}


