// Code Product Component Here
import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {
  render() {
    return (
      <div className="product">
        <p>{this.props.name}</p>
        <p>{this.props.producer}</p>
        <p>{this.props.hasWatermark}</p>
        <p>{this.props.color}</p>
        <p>{this.props.weight}</p>
      </div>
    );
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
  // props: This is the object hash of all properties passed into the component
  // propName: The name of the property currently being evaluated
  // componentName: The name of the component currently being worked with
  weight: (props, propName, componentName) => {
    const weight = props[propName];

    if (weight === undefined) {
      return new Error(`The 'weight' prop supplied to ${componentName} is required.`);
    }

    if (isNaN(weight)) {
      return new Error(`The 'weight' prop supplied to ${componentName} is not a number.`);
    }

    const validWeight = weight > 80 && weight < 300;

    if (!validWeight) {
      return new Error(`The 'weight' prop supplied to ${componentName} needs to be between 80 and 300.`);
    }
  }
}

export default Product;