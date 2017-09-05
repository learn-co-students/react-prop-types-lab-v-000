// Code Product Component Here
import React from 'react';
import PropTypes from 'prop-types';


export default class Product extends React.Component{
	render(){
		return(
			<div className="product">
				<h2>{this.props.name}</h2>
				{this.props.producer ? <h5>{this.props.producer}</h5> : null}
				<small>{this.props.hasWatermark ? 'Watermarked' : 'Not watermarked' }</small> 
				<small>{this.props.color}</small>
				<small>{this.props.weight}</small>
			</div>
	)}
}


Product.defaultProps = {
  hasWatermark: false,
};


Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: function(props, propName){
  	var weight = props[propName];

  	var validWeight = weight > 80 && weight < 300;

  	if(weight === undefined){
  		return new Error('weight must be defined')
  	}

  	if(isNaN(weight)){
  		return new Error('weight must be a number')
  	}

  	if (!validWeight){
  		return new Error('The `weight` prop should range between 80 and 300.');

  	}
  }
};