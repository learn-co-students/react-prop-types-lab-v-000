// Code Product Component Here
import React from 'react'
import PropTypes from 'prop-types'

class Product extends React.Component {
	render() {
		return (
			<div>
				<p>{this.props.name}</p>
				<p>{this.props.producer}</p>
				<p>{this.props.hasWatermark}</p>
				<p>{this.props.color}</p>
				<p>{this.props.weight}</p>
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
	weight: function(props, propName) {
		const weight = props[propName];

		if (weight === undefined) {
			return new Error ('Weight is required.');
		}

		if (isNaN(weight)) {
			return new Error ('Weight is a number.')
		}

		if (!(weight > 80 && weight < 300)) {
			return new Error ('Weight must be between 80 & 300.')
		}

	}
}

export default Product;