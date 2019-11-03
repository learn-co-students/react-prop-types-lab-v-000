import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {
 render() {
   return (
     <div>
      <h1>{this.props.name}</h1>
      <h2>{this.props.producer}</h2>
      <li>{this.props.hasWatermark ? 'Yes' : 'No'}</li>
      <li>{this.props.color}</li>
      <li>{this.props.weight}</li>
     </div>
   )
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
      return new Error('Must enter weight')
    }
    if (isNaN(weight)) {
      return new Error('Weight must be a number')
    }
    if (weight < 80 || weight > 300) {
      return new Error('Weight must be between 80 and 300')
    }
  }
}


export default Product
