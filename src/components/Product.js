// Code Product Component Here
import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.name}</p>
        <p>{this.props.producer}</p>
        <p>{this.props.hasWatermark ? 'true' : 'false'}</p>
        <p>{this.props.color}</p>
        <p>{this.props.weight}</p>
      </div>
    );
  }
}

Product.defaultProps= {
  hasWatermark: false
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: propsWeight
}

function propsWeight(props, propName, componentName) {
  var weight = props[propName]
  if(weight == null){
      return new Error(`${componentName}: must have a ${propName}`);
    } else if (isNaN(weight)) {
      return new Error(`${componentName}: ${propName} must be an integer`);
    } else if (weight < 80 || weight > 300) {
      return new Error(`${componentName}: ${propName} must be between 80 and 300`);
    }
}
export default Product;
