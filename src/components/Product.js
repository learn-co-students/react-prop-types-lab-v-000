import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class Product extends React.Component {
	render() {
		return (
			<div>
				<p>Name: {this.props.name}</p>
				<p>Producer: {this.props.producer}</p>
				<p>Watermark? {this.props.hasWatermark ? 'Yes' : 'No'}</p>
				<p>Color: {this.props.color}</p>
				<p>Weight: {this.props.weight}</p>
			</div>
		)
	}
}

Product.defaultProps = {
	hasWatermark: false
};

Product.propTypes = {
	name: React.PropTypes.string.isRequired,
	producer: React.PropTypes.string,
	hasWatermark: React.PropTypes.bool,
	color: React.PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
	weight: (props, propName) => {
		const weight = props[propName];

		if(weight === undefined){
			return new Error(`Weight prop is required.`)
		}
		if(isNaN(weight)){
			return new Error(`Weight must be a number.`)
		}

		const validWeight = weight > 80 && weight < 300;

		if(!validWeight){
			return new Error(`Must be between 80 and 300.`)
		}
	}
}

export default Product 

