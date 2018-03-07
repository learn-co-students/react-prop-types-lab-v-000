import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {
	
	render() {
		return (
			<div>
				<h1>{this.props.name}</h1>
				<h4>{this.props.producer}</h4>
				<p>{this.props.hasWatermark ? 'No' : 'Yes'} </p>
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
	color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,

	weight: (props, Product) => {
		const weight = props[Product];
		const validWeight = weight > 80 && weight < 300;

		if(weight === undefined) {return new Error('prop required!')}
		if (isNaN(weight)) {return new Error('prop must be a number')}
    if (!validWeight) {return new Error('prop is the wrong weight')}
  }
}


export default Product;

