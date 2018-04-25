import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class Product extends React.Component {
  render() {
    return(
      <div className="product">
        <h1>Name: {this.props.name}</h1>
        <p>Producer: {this.props.producer}</p>
        <p>Watermark: {this.props.hasWatermark}</p>
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
  weight: function(props, propName, componentName) {
    let weight = props[propName];

    if (weight === undefined) {
      return new Error("You must provide a number for weight.");
    }

    if (isNaN(weight)) {
      return new Error("Weight must be a number.");
    }

    return weight >= 80 && weight <= 300 ? null : new Error("Number must be within a range of 80 to 300");
  }
}

export default Product;
