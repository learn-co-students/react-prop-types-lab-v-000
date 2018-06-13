// Code Product Component Here
import React from "react";
import PropTypes from "prop-types";

export default class Product extends React.Component{

  render(){
    return(
      <div className="product">
        <h1>Name: {this.props.name}</h1>
        <h3>Producer: {this.props.producer}</h3>
        <h5>Watermark: {this.props.hasWatermark ? "Yes":"No"}</h5>
        <p>Color: {this.props.color}</p>
        <p>Weight: {this.props.weight}</p>
      </div>

    );
  }

};

Product.defaultProps= {
  hasWatermark: false

};

Product.propTypes={
  name:PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color:PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: betweenWeights
}

function betweenWeights(props, propName){
  if (props[propName] == null) {
    return new Error('The `weight` prop is required.');
  };

  let value = props[propName];

  if( typeof value === "number"){
    if (value <80 || value > 300) {
      return new Error('The `weight` prop should range between 80 and 300.');
   }
 }
  if( typeof value !== "number"){
    return new Error('The `weight` prop is not a number');
  }

}
