import React from 'react';
import PropTypes from 'prop-types';
 
class Product extends React.Component {
	render() {
		return (
			<div>
			Name: {this.props.name}
			producer: {this.props.producer}
			hasWatermark: {this.props.hasWatermark}
			color: {this.props.color}
			weight: {this.props.weight}
			</div>
		)
	}
}

Product.propTypes = {
	name: PropTypes.string.isRequired,
	producer: PropTypes.string,
	hasWatermark: PropTypes.bool,
	color: PropTypes.oneOf([
	'white', 
	'eggshell-white', 
	'salmon'
	]).isRequired,
	weight: function(props, propName) {
		const weight = props[propName];

		if(weight === undefined) {
			return new Error("Weight is required.")
		}

		if(isNaN(weight)) {
			return new Error("Input weight is not a number.")
		}

	   	if(weight < 80 || weight > 300) {
	    	return new Error('Invalid range');
		}
	}
}

Product.defaultProps = {
	hasWatermark: false
};

export default Product;