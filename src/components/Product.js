import React from 'react';
import PropTypes from 'prop-types';

export default class Product extends React.Component {
	render(){
		return(
			<div className="product">
				<h1>{this.props.name}</h1>
				<h3>{this.props.producer}</h3>
				<p>{this.props.hasWatermark ? 'Watermarked' : 'Not watermaked'}</p>
				<p>{this.color}</p>
				<p>{this.weight}</p>
			</div>
		);
	}
}

Product.defaultProps = {
  hasWatermark: false
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: function(props, propName) {
  			if (!props[propName]) {
  				return new Error('The `weight` prop is required.');
  			} else {
    			let value = props[propName];
    			if (typeof value === 'number') {
        			return value > 80 && value < 300 ? null : new Error('The weight prop should range between 80 and 30');
    			} else {
    				return new Error('The `weight` prop is not a number.')
    			} 
  			}
		  }
};

