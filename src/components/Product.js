// Code Product Component Here
import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {

  render() {
    return (
      <div className="product">
        <h1>{this.props.name}</h1>
        <h3>Details</h3>
        <ul>
          <li>Producer: {this.props.producer}</li>
          <li>hasWatermark?: {this.props.hasWatermark}</li>
          <li>Color: {this.props.color}</li>
          <li>Weight: {this.props.weight}</li>
        </ul>
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
  weight: function (props, propName) {
      if (props[propName] === undefined) {
        return new Error("There's no weight!");
      }
      let value = props[propName];
      if (typeof value !== 'number') {
        return new Error('The weight is not a number!');
      } else if (value < 80 || value > 300) {
        return new Error('The weight is out of range!');
      }
    }
  }

export default Product;
