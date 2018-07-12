import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {
 
  render() {
    return (
      <div>
        <p>{this.props.name}</p>
        <p>{this.props.producer}</p>
        <p>{this.props.hasWatermark ? "Yes" : "No"}</p>
        <p>{this.props.color}</p>
        <p>{this.props.weight}</p>
      </div>
    );
  }
}

export default Product;

Product.defaultProps = {
	hasWatermark: false
};

Product.propTypes = {
	name: PropTypes.string.isRequired,
	producer: PropTypes.string,
	hasWatermark: PropTypes.bool,
	color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
	weight: function(props, weight) {

		if (props[weight] < 80 || props[weight] > 300) {
			return new Error('The `weight` prop should range between 80 and 300.');
		}

		if (props[weight] === undefined) {
			return new Error('The `weight` prop is required.')
		}

		if (isNaN(props[weight])) {
			return new Error('The `weight` prop is not a number.');
		}

    }

}

