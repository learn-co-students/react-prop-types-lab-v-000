import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {
  render() {
    return (
      <div className="product">
        <ul>
          <li>{this.props.name}</li>
          <li>{this.props.producer}</li>
          <li>Watermark: {this.props.hasWatermark}</li>
          <li>{this.props.color}</li>
          <li>{this.props.weight}</li>
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
  color: PropTypes.oneOf([
    'white',
    'eggshell-white',
    'salmon'
  ]).isRequired,
  weight: function(props, weight) {
    if (props[weight] === undefined) {
      return new Error(
        'Weight is required.'
      );
    }
    else if (isNaN(props[weight])) {
      return new Error(
        'Weight needs to be a number.'
      );
    }
    else if (props[weight] < 80 || props[weight] > 300) {
      return new Error(
        'Weight needs to be between 80 to 300.'
      );
    }
  }
}

export default Product;
