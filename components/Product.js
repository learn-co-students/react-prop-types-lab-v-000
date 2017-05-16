import React from 'react';

class Product extends React.Component {
  render() {
    return (
      <div class="product">
        <h1>{this.props.name}</h1>
        <h3>Produced By: {this.props.producer}</h3>
        <h3>Watermark?: {this.props.hasWatermark}</h3>
        <p>Color: {this.props.color}</p>
        <p>Weight: {this.props.weight}</p>
      </div>
    )
  }
}

Product.defaultProps = {
  hasWatermark: false,
};

Product.propTypes = {
  name: React.PropTypes.string.isRequired,
  producer: React.PropTypes.string,
  hasWatermark: React.PropTypes.bool,
  color: React.PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: function(props, propName) {
    const weight = props[propName];
    if (weight === undefined) {
      return new Error("Weight needs a value")
    }

    if (isNaN(weight)) {
      return new Error("Weight needs to be a number")
    }

    if (weight < 80 || weight > 300) {
      return new Error("Weight must be between 80 and 300")
    }
  }
};

export default Product;
