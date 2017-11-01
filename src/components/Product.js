import React from 'react';
import PropTypes from 'prop-types';

export default class Product extends React.Component {
	render () {
		return (
			<div></div>
		);
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
	weight: function(props, propName, componentName) {
    
    if (props[propName] === undefined) {
      return new Error('Weight is required');
    }

		if (isNaN(props[propName])) {
			return new Error('Weight is a number');
		}

    if (props[propName] <= 80 || props[propName] >= 300) {
      return new Error('weight has to be between 80 and 300.');
    }
  }
}
