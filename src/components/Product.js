// Code Product Component Here

// In the components/Product.js file, create a Product React component.
// This component has the following props:
// name: a string — required
// producer: a string — optional
// hasWatermark: a boolean — optional, defaults to false
// color: a string — required, can only be 'white', 'eggshell-white' or 'salmon'
// weight: a number — required, ranges between 80 and 300
// Note: for the weight prop, we'll need custom logic.
// Remember that it's possible to write your own prop validator function!

import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {
  render(){
    return(
      <div className="product">
        <h1>{this.props.name}</h1>
        <h2>{this.props.producer}</h2>
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

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: (props, propName) => {
    const weight = props[propName];
    if (weight === undefined) {
      return new Error('The "weight" prop is required')
    } else if(isNaN(weight)) {
      return new Error('"Weight" must be a number')
    } else if(weight > 300 || weight < 80){
      return new Error('"Weight" must be between 80 and 300.')
    }
  }


};

export default Product;
