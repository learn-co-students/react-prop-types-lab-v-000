import React from 'react';
import PropTypes from 'prop-types';


class Product extends React.Component {
	render() {
		<div className="product">
			<h3>{this.props.name}</h3>
			<p>this.props.producer</p>
			<p>this.props.hasWatermark</p>
			<p>this.props.color</p>
			<p>this.props.weight</p>
		</div>
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
	weight: function(props, weight, Product) {
    if (props[weight] !== Number(props[weight]) || !/\d/.test(props[weight]) || props[weight] < 80 || props[weight] > 300) {
      return true
    } else {
    	return false
    }
  }
}

export default Product