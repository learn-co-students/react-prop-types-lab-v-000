import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {
  render() {
    return (
      <div>
        <h1>Name: {this.props.name}</h1>
        <p>Producer: {this.props.producer}</p>
        <p>Has Watermark?: {this.props.hasWatermark ? "Yes" : "No"}</p>
        <p>Color: {this.props.color}</p>
        <p>Weight: {this.props.weight}</p>
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
  weight: function(props, propName, componentName){
    let weight = props[propName]

    if ( weight === undefined ) {
  return new Error( `missing ${propName} prop` )
    }
    if ( !(typeof weight === 'number') ) {
      return new Error( `${propName} is not a number` )
    }
    if ( !(weight >= 80 && weight <= 300) ) {
      return new Error( `${propName} not between 80 and 300` )
    }
  }
}

export default Product
