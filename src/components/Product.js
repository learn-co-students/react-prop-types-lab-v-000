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
		if (!validWt(props[propName])) {
			return new Error('Invalid weight! Must be a number between 80 and 300');
		}
	}
}

function validWt (wt) {
  return ((typeof wt === 'number') && (wt > 79 )&& (wt < 301));
}

export default Product;