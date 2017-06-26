import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {
	render() {
		return (
			<div className="product">
        <h1>{this.props.name}</h1>
        <p>{this.props.producer}</p>
        <p>{this.props.hasWatermark ? "Has Watermark" : "No Watermark"}</p>
        <p>{this.props.color}</p>
        <p>{this.props.weight}</p>
      </div>
		);
	}
}

Product.defaultProps = {
	hasWatermark: false
}

Product.propTypes = {
	name: PropTypes.string.isRequired,
	producer: PropTypes.string,
	hasWatermark: PropTypes.bool,
	color: PropTypes.PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
	weight: function(props, propName) {
		if (!props[propName]) {
			return new Error(`The prop ${propName} is marked as required`);
		}
		if (!validWtType(props[propName])) {
			return new Error(`${propName} should be a number.`);
		}
		if (!validWtRange(props[propName])) {
			return new Error(`${propName} is out of range.`);
		}
	}
}

function validWtType(wt) {
  return (typeof wt === 'number');
}

function validWtRange(wt) {
	return ((wt >= 80) && (wt <= 300));
}

export default Product;