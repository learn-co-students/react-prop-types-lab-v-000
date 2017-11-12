import React from 'react';
import PropTypes from 'prop-types';

export default class Product extends React.Component {
	render() {
		return (
			<div className="product">
				<p>Name: {this.props.name}</p>
				<p>Producer: {this.props.producer}</p>
				<p>Watermark: {this.props.hasWatermark ? "Yes" : "No"}</p>
				<p>Color: {this.props.color}</p>
				<p>Weight: {this.props.weight}</p>
			</div>
		);
	}
}

Product.defaultProps = {
	hasWatermark: false
};

let weight_range = [];
for (var i = 80; i <= 300; i++) {
	weight_range.push(i);
}

Product.propTypes = {
	name: PropTypes.string.isRequired,
	producer: PropTypes.string,
	hasWatermark: PropTypes.bool,
	color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
	weight: PropTypes.oneOf(weight_range).isRequired
}