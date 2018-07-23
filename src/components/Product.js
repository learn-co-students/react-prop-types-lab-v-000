// Code Product Component Here
import React from 'react';
import PropTypes from 'prop-types';



export default class Product extends React.Component{
  render(){
    return(
      <div>
        {this.props.name}
        {this.props.producer}

        {this.props.color}
        <div>{this.props.weight}</div>
      </div>
    )
  }
}
Product.defaultProps = {
  hasWatermark: false
}

  // function createCustomPropType(isRequired) {
  //   // The factory returns a custom prop type
  //   return function(props, propName, componentName) {
  //
  //     const propValue = props[propName];
  //     if(propValue === undefined){
  //       return new Error("propValue is required")
  //     }
  //      if (typeof propValue === 'number'){
  //       return propValue >= 80 && propValue <= 300 ? null : new Error(propName + ' in ' + componentName + " is not in range");
  //     }else{
  //
  //       throw new Error(propName + ' in ' + componentName + " is not a number");
  //
  //     }
  //
  //   }
  // }


  // const customPropType = createCustomPropType(false);
  // customPropType.isRequired = createCustomPropType(true);

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(
    ['white','eggshell-white','salmon']
  ).isRequired,
  weight: (props,propName) =>{

     const propValue = props[propName];

     if(propValue === undefined){
       return new Error("propValue is required")
     }
     if (isNaN(propValue)){
       return new Error("weight is not a number");

    }
    const isValid = propValue > 80 && propValue < 300
    if (!isValid){
      return new Error("range should be 80-300");
    }
  }


}
