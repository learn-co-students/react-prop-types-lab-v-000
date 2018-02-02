// Code Product Component Here
import React from 'react';
import PropTypes from 'prop-types';


class Product extends React.Component {
 
  render() {
    return (
      <div className="product">
      	<h1>{this.props.name}</h1>
        <ul>
          <li>{this.props.hasWatermark ? 'Watermark' : ' '}</li>
          <li>{this.props.producer}</li>
          <li>{this.props.color}</li>
          <li>{this.props.weight}</li>
        </ul>
      </div>
    );
  }
}


Product.defaultProps = {
	hasWatermark: false,
};

function createCustomPropType(isRequired) {

	return function(props, propName, componentName) {
		const prop = props[propName];
	    if (prop == null) {
	      // Prop is missing
	      if (isRequired) {
	        // Prop is required but wasn't specified. Throw an error.
	        throw new Error();
	      }
	      // Prop is optional. Do nothing.
	    } else {
	      	if (props[propName] < 80 || props[propName] > 300) {
	      		throw new Error(
	        		'Invalid prop `' + propName + '` supplied to' +
	        		' `' + componentName + '`. Validation failed.'
	      		);
	    	}
	    	if (isNaN(props[propName])) {
	      		throw new Error(
	        		'Not a number.'
	      		);
	    	}
	    }
  	}
}

const customPropType = createCustomPropType(false);
customPropType.isRequired = createCustomPropType(true);

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: customPropType.isRequired
};

export default Product;