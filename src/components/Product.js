import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {
  render() {
    return (
      <div>
      <p> {this.props.name} </p>
      <p> {this.props.producer} </p>
      <p> {this.props.hasWatermark} </p>
      <p> {this.props.color} </p>
      <p> {this.props.weight} </p>

      </div>
    )
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
  weight: function(props, propName, componentName) {
    debugger;
    let weight = props.weight
    if (weight===undefined) {
      return new Error('Validation failed.')
    }
    if (isNaN(weight)) {
      return new Error('Validations failed.')
    }
    if (weight < 80 || weight > 300) {
      return new Error('Validationz failed.')
    }
  }
}

export default Product;
