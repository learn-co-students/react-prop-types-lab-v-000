import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {

	render() {
		return (
			<div></div>
			);
		}
	}

	Product.propTypes = {
		name: PropTypes.string.isRequired,
		producer: PropTypes.string,
		color: PropTypes.oneOf(['white','eggshell-white']).isRequired,
		weight: (props, propName) => {
			let value = props[propName];
			if (value === undefined) {return new Error(propName + "is required");}
			if (isNaN(value)) {return new Error(propName + "is not a number");}
			if (value < 80 || value > 300) {return new Error(propName + " is out of range");}
		},
		hasWatermark: PropTypes.bool
	}

	Product.defaultProps = {
		hasWatermark: false
	}

	export default Product;