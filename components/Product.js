import React from 'react';

class Product extends React.Component {
  render() {
    return (
      <h1>{ this.props.name }</h1>
    );
  };
};

Product.defaultProps = {
  hasWatermark: false
};

Product.propTypes = {
  name: React.PropTypes.string.isRequired,
  producer: React.PropTypes.string,
  hasWatermark: React.PropTypes.bool,
  color: React.PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: function(props, propName, componentName) {
    const weight = props[propName];

    if (weight === undefined) {
      return new Error("Weight cannot be undefined.");
    }

    if (isNaN(weight)) {
      return new Error("Weight must be a number.");
    }

    if(weight < 80 || weight > 300) {
      return new Error("Weight must be between 80 and 300.");
    }

    return null;
  }
};

export default Product;
